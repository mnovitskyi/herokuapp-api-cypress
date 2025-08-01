export class TokenService {
  private token: string = "";
  private URL = `${Cypress.env("baseUrl")}/auth`;

  getToken(): Cypress.Chainable<string> {
    return cy
      .request({
        method: "POST",
        url: this.URL,
        body: {
          username: Cypress.env("API_USERNAME"),
          password: Cypress.env("API_PASSWORD"),
        },
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        expect(response.status).to.eq(200);
        this.token = response.body.token;
        return this.token;
      });
  }
}
