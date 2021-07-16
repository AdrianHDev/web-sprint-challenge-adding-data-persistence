exports.up = function (knex) {
  return knex.schema.createTable("projects", (tbl) => {
    tbl.increments("project_id");
    tbl.string("project_name").notNullable();
    tbl.string("project_description");
    tbl.integer("project_completed").defaultTo(0);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("projects");
};
