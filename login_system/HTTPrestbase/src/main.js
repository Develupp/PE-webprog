"use strict";
const logger = require("./logger");
const _ = require("lodash");

const {
  account,
  http_port
} = process.env;

const HTTP_API = new (require("./httpAPI"))(http_port);

async function main() {
  try {
    logger.info("Things started");

    
    if (account == 1) {
      const Accounts = require("./accounts");

      Accounts.start();
    }

    // End of main
  } catch (e) {
    logger.error("Main error ", e);
  }
}

main();
