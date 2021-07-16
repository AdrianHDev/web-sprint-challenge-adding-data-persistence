exports.up = function (knex) {
  return knex.schema.createTable("tasks", (tbl) => {
    tbl.increments("task_id");
    tbl.string("task_description").notNullable();
    tbl.string("task_notes");
    tbl.boolean("task_completed").defaultTo(false).notNullable();
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
