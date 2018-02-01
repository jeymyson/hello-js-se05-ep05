
// migrations/20180130141837_esquema_inicial.js
exports.up = knex => knex.schema.createTable("contato", tb => {
    tb.increments("idcontato")
    tb.string("nomecontato").notNullable()
    tb.timestamp("dtcriacaocontato").notNullable().defaultTo(knex.fn.now())
  })
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("contato")
  };
