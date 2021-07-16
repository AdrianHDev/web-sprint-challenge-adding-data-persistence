exports.up = function (knex) {
  return knex.schema.createTable("project_resources", (tbl) => {
    tbl
      .integer("project_id").notNullable()
      .index()
      .references("project_id")
      .inTable("projects");
    tbl
      .integer("resource_id").notNullable()
      .index()
      .references("resource_id")
      .inTable("resources");
    tbl.integer("quantity").notNullable();
  });
};

exports.down = function (knex) {
    return knex.schema.dropTable('project_resources');
};
