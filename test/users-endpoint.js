const knex = require("knex");
const app = require("../src/app");
const helpers = require("./test-helpers");

describe("Users Endpoints", function() {
  db = knex({
    client: "pg",
    connection: process.env.TEST_DATABASE_URL
  });
  app.set("db", db);
});
after("disconnect from db", () => db.destroy());

before("cleanup", () => helpers.cleanTables(db));

afterEach("cleanup", () => helpers.cleanTables(db));

describe(`POST /api/users`, () => {
  context(`User Validation`, () => {
    beforeEach("insert users", () => helpers.seedUsers(db, testUsers));

    const requiredFields = ["user_name", "password", "full_name"];

    requiredFields.forEach(field => {
      const registerAttemptBody = {
        user_name: "test user_name",
        password: "test password",
        full_name: "test full_name",
        title: "test title"
      };

      it(`responds with 400 required error when '${field}' is missing`, () => {
        delete registerAttemptBody[field];

        return supertest(app)
          .post("/api/users")
          .send(registerAttemptBody)
          .expect(400, {
            error: `Missing '${field}' in request body`
          });
      });

      it(`responds 400 'Password be longer than 8 characters' when empty password`, () => {
        const userShortPassword = {
          user_name: "test user_name",
          password: "1234567",
          full_name: "test full_name"
        };
        return supertest(app)
          .post("/api/users")
          .send(userShortPassword)
          .expect(400, { error: `Password be longer than 8 characters` });
      });

      it(`responds 400 'Password be less than 72 characters' when long password`, () => {
        const userLongPassword = {
          user_name: "test user_name",
          password: "*".repeat(73),
          full_name: "test full_name"
        };
        return supertest(app)
          .post("/api/users")
          .send(userLongPassword)
          .expect(400, { error: `Password be less than 72 characters` });
      });
    });
  });
});
