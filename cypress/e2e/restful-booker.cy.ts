import { BookingService } from "../support/api/services/bookingService";
import { TokenService } from "../support/api/services/tokenService";
import { generateBookingData } from "../support/testData";

const bookingService = new BookingService();
const tokenService = new TokenService();

describe("RESTful Booker API", () => {
  let token: string;
  let bookingId: number;

  before(() => {
    tokenService.getToken().then((t) => {
      token = t;
    });
  });

  it("creates a booking", () => {
    const bookingData = generateBookingData();

    return bookingService.createBooking(bookingData).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.booking).to.include({
        firstname: bookingData.firstname,
        lastname: bookingData.lastname,
      });
      bookingId = res.body.bookingid;
    });
  });

  it("updates the booking", () => {
    expect(bookingId).to.be.a("number");
    expect(token).to.be.a("string");

    const updatedData = generateBookingData();

    return bookingService
      .updateBooking(bookingId, token, updatedData)
      .then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body.firstname).to.eq(updatedData.firstname);
        expect(res.body.totalprice).to.eq(updatedData.totalprice);
      });
  });

  it("deletes the booking", () => {
    expect(bookingId).to.be.a("number");
    expect(token).to.be.a("string");

    return bookingService.deleteBooking(bookingId, token).then((res) => {
      expect(res.status).to.eq(201);
    });
  });

  it("returns 404 for deleted booking", () => {
    expect(bookingId).to.be.a("number");

    return bookingService.getBooking(bookingId).then((res) => {
      expect(res.status).to.eq(404);
    });
  });
});
