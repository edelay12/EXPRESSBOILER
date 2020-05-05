const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

function makeUsersArray() {
  return [
    {
      full_name: "test test",
      user_name: "testuser1",
      password: "password1"
    },
    {
      full_name: "test test",
      user_name: "testuser2",
      password: "password2"
    },
    {
      full_name: "test test",
      user_name: "testuser3",
      password: "password3"
    },
    {
      full_name: "test test",
      user_name: "testuser3",
      password: "password3"
    }
  ];
}

function makeIssuesArray() {
  return [
    {
      picture_main:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DW53qxXfUWco&psig=AOvVaw1m86lzqY6AQpq-m6fZ4SiY&ust=1582146521789000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCg6JyB3OcCFQAAAAAdAAAAABAI",
      product_name: "Death Wish",
      product_roast: "Dark",
      price: 17,
      details:
        "Smooth and Sweet USDA Organic, ethically sourced coffee from Peru and Nicaragua.",
      origin: "Peru",
      collection: "cold",
      sale: "False",
      sale_price: null,
      featured: "False"
    },
    {
      picture_main:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DW53qxXfUWco&psig=AOvVaw1m86lzqY6AQpq-m6fZ4SiY&ust=1582146521789000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCg6JyB3OcCFQAAAAAdAAAAABAI",
      product_name: "Death Wish",
      product_roast: "Dark",
      price: 16,
      details:
        "Smooth and Sweet USDA Organic, ethically sourced coffee from Peru and Nicaragua.",
      origin: "Peru",
      collection: "cold",
      sale: "False",
      sale_price: null,
      featured: "False"
    },
    {
      picture_main:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DW53qxXfUWco&psig=AOvVaw1m86lzqY6AQpq-m6fZ4SiY&ust=1582146521789000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCg6JyB3OcCFQAAAAAdAAAAABAI",
      product_name: "Stone Street",
      product_roast: "Dark",
      price: 25,
      details:
        "Smooth and Sweet USDA Organic, ethically sourced coffee from Peru and Nicaragua.",
      origin: "Peru",
      collection: "cold",
      sale: "False",
      sale_price: null,
      featured: "False"
    },
    {
      picture_main:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DW53qxXfUWco&psig=AOvVaw1m86lzqY6AQpq-m6fZ4SiY&ust=1582146521789000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCg6JyB3OcCFQAAAAAdAAAAABAI",
      product_name: "Tiny Footprint",
      product_roast: "Dark",
      price: 25,
      details:
        "Smooth and Sweet USDA Organic, ethically sourced coffee from Peru and Nicaragua.",
      origin: "Peru",
      collection: "cold",
      sale: "False",
      sale_price: null,
      featured: "True"
    }
  ];
}
function cleanTables(db) {
  return db.transaction(trx =>
    trx.raw(
      `TRUNCATE
         products
        `
    )
  );
}

function seedIssuesTable(db, issues) {
  return db.into("issues").insert(issues);
  /* .then(() =>
      // update the auto sequence to stay in sync
      db.raw(
        `SELECT setval('blogful_users_id_seq', ?)`,
        [users[users.length - 1].id],
      )
    ) */
}

function makeBugtraxFixtures() {
  const testUsers = makeUsersArray();
  const testIssues = makeIssuesArray();
  return { testUsers, testIssues };
}

module.exports = {
  makeUsersArray,
  makeIssuesArray,
  makeBugtraxFixtures,
  cleanTables,
  seedIssuesTable
};
