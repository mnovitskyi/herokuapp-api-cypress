import { defineConfig } from "cypress";
import allureWriter from "@shelex/cypress-allure-plugin/writer";
import * as dotenv from "dotenv";

dotenv.config({ quiet: true });

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    env: {
      allure: true,
      API_USERNAME: process.env.CYPRESS_API_USERNAME,
      API_PASSWORD: process.env.CYPRESS_API_PASSWORD,
      baseUrl: "https://restful-booker.herokuapp.com",
    },
    supportFile: "cypress/support/e2e.ts",
  },
});
