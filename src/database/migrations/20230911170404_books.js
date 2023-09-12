exports.up = function (knex) {
  return knex.schema.createTable("books", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable;
    table.string("author").notNullable;
    table.string("image").notNullable;
    table.decimal("dateOfRelease").notNullable;
    table.decimal("numberOfPages").notNullable;
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("books");
};