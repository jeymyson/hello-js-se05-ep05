const pessoas = [
  { idcontato: 1, nomecontato: 'Gustavo', telefone: '8872883289' },
  { idcontato: 2, nomecontato: 'Diego',   telefone: '8593838234' },
  { idcontato: 3, nomecontato: 'Tais',    telefone: '8893827239' }
]

exports.up = knex => knex("contato").insert(pessoas)
  
  exports.down = knex => knex("contato").del()
    .whereIn("idcontato", pessoas.map(e => e.idcontato))