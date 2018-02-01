
exports.up = function(knex, Promise) {
    return knex.schema.table('contato', function(t) {
        t.integer('telefone').notNull().defaultTo(0);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('contato', function(t) {
        t.dropColumn('telefone');
    });
};