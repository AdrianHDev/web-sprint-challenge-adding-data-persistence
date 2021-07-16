exports.up = function (knex) {
  return knex.schema.createTable("tasks", (tbl) => {
    tbl.increments("task_id");
    tbl.string("task_description").notNullable();
    tbl.string("notes");
    tbl.integer("task_completed").defaultTo(0).notNullable();
    tbl
      .integer("project_id").notNullable()
      .index()
      .references("project_id")
      .inTable("projects");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('tasks');
};
