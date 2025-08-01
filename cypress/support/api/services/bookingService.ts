import { BookingData } from "../../types";
import { logStep } from "../../allure";

export class BookingService {
  private URL = `${Cypress.env("baseUrl")}/booking`;

  createBooking(bookingData: BookingData) {
    logStep(
      `Create booking for ${bookingData.firstname} ${bookingData.lastname}`
    );
    return cy.request({
      method: "POST",
      url: `${this.URL}`,
      body: bookingData,
      headers: { "Content-Type": "application/json" },
    });
  }

  getBooking(id: number) {
    logStep(`Get booking with ID: ${id}`);
    return cy.request({
      method: "GET",
      url: `${this.URL}/${id}`,
      failOnStatusCode: false,
    });
  }

  updateBooking(id: number, token: string, bookingData: BookingData) {
    logStep(`Update booking with ID: ${id}`);
    return cy.request({
      method: "PUT",
      url: `${this.URL}/${id}`,
      body: bookingData,
      headers: {
        "Content-Type": "application/json",
        Cookie: `token=${token}`,
      },
    });
  }

  deleteBooking(id: number, token: string) {
    logStep(`Delete booking with ID: ${id}`);
    return cy.request({
      method: "DELETE",
      url: `${this.URL}/${id}`,
      headers: { Cookie: `token=${token}` },
    });
  }
}
