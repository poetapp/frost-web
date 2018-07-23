## Functional Testing Overview
  Functional tests simulate a user interacting with the application.
  Tests are organized by application feature and exercise all pieces
  of the application (network requests, database access, backend, etc).

  TestCafe is used to run the tests.
  The TestCafe API docs are [here](https://devexpress.github.io/testcafe/documentation/test-api/).

## Directory Structure
  - `tests/functional/features` contains the tests.
  - `tests/functional/helpers.js` contains utility functions.
  - `tests/functional/page-objects` contains selectors and common functions.

## Page Object Model
  The [Page Object model](https://medium.com/tech-tajawal/page-object-model-pom-design-pattern-f9588630800b)
  protects tests from becoming brittle by locating all selectors and
  reusable functions for each application page in one place. When class
  names change or tests shared functions are needed (like logging in a
  user), updates to the test code can be done in one place.

## Running Tests
  By default all functional tests are run inside one chrome browser and one
  firefox browser.  During development, tests can be sped up by
  setting a couple of environment variables:

  ```bash
    # Run tests only in chrome. A browser window will pop up and you can see
    # the tests running - this can help with debugging.
    RUNNER=chrome npm run test:functional

    # Run all tests in headless chrome. Slightly faster than with the UI.
    RUNNER=chrome:headless npm run test:functional

    # Run two instances of headless chome. run half the tests in the first
    # instance, the other half in the second instance.
    RUNNER=chrome:headless RUNNER_COUNT=2 npm run test:functional
  ```

## Database Implications
  Currently, the tests use the same database and no cleanup is performed.
  When run locally, they will add records to your local mongodb instance.
  For this reason, *only run tests in a development environment*.

  TODO: A future PR will add a system where each browser instance running
  tests will create it's own database and tear it down afterwards. This will
  make it safe to run the tests in non-development environments.

## Debugging
  This [article](https://medium.com/@dikareva1209/all-the-tricks-that-help-you-debug-testcafe-tests-af0418220d) explains how to debug failing tests or during test development.
