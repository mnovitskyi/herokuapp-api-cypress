# RESTful Booker API Automation with Cypress

This project contains automated API tests for the [RESTful Booker API](https://restful-booker.herokuapp.com/apidoc/index.html) using Cypress, TypeScript, Faker for dynamic test data, and Allure for reporting.

---

## Features

- API tests implemented with Cypress `cy.request()`
- Clean separation of API requests and tests
- Dynamic test data generation using `@faker-js/faker`
- Environment variables for sensitive data (`API_USERNAME`, `API_PASSWORD`)
- Allure reporting integration with `@shelex/cypress-allure-plugin`
- TypeScript support for better type safety and autocomplete

---

## Prerequisites

- Node.js >= 16.x
- npm or yarn package manager
- Cypress installed (`npm install cypress --save-dev`)
- Install dependencies:

```bash
npm install
```

## Environment Variables

Create a .env file or set environment variables in your shell with the following keys:

```env
CYPRESS_API_USERNAME=your_username
CYPRESS_API_PASSWORD=your_password
```

## Running tests

Run tests in headed mode:

```bash
npx cypress open
```

Run tests in headless mode:

```bash
npx cypress run
```

## Reporting

After test execution, generate Allure report:

```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

## Dependencies

- Cypress
- TypeScript
- @faker-js/faker
- @shelex/cypress-allure-plugin

## Environment Variables

This project includes a committed `.env` file for convenience and demo purposes.

**Warning:**  
Do **NOT** commit real secrets or credentials in `.env` to public repos.  
In production or sensitive projects, use environment variables set via CI/CD or secret management.

If you want to customize variables, edit the `.env` file accordingly.
