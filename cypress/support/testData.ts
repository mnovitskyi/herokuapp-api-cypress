import { faker } from "@faker-js/faker";

export const generateBookingData = () => {
  return {
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    totalprice: faker.number.int({ min: 50, max: 500 }),
    depositpaid: faker.datatype.boolean(),
    bookingdates: {
      checkin: faker.date.soon({ days: 1 }).toISOString().split("T")[0],
      checkout: faker.date.soon({ days: 7 }).toISOString().split("T")[0],
    },
    additionalneeds: faker.helpers.arrayElement([
      "Breakfast",
      "Late Checkout",
      "Extra Pillow",
      "None",
    ]),
  };
};
