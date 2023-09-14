exports.up = function (knex) {
  return knex.schema.createTable("reviews", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("author").notNullable();
    table.string("book").notNullable();
    table.string("review").notNullable();
    table.decimal("dateOfRelease").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("reviews");
};
