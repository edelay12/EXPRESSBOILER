const knex = require("knex");
const app = require("../src/app");
const helpers = require("./test-helpers");

describe("Events Endpoints", function() {
  let db;

  const { testEvents } = helpers.makeEstoreFixtures();

  before("make knex instance", () => {
    db = knex({
      client: "pg",
      connection: process.env.TEST_DATABASE_URL
    });
    app.set("db", db);
  });

  after("disconnect from db", () => db.destroy());

  before("cleanup", () => helpers.cleanTables(db));

  afterEach("cleanup", () => helpers.cleanTables(db));

  describe(`GET /api/events`, () => {
    context("Given there are events in the database", () => {
      beforeEach("insert events", () =>
        helpers.seedProductsTable(db, testProducts)
      );

      it("responds with 200 and all of the events", () => {
        const expectedEvents = testEvents;
        return supertest(app)
          .get("/api/events")
          .expect(200, expectedEvents);
      });
    });
  });
});
