
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'fabs', tx_cpf: '44498106865' },
        { username: 'Kuen', tx_cpf: '87427723031' },
        { username: 'Buele', tx_cpf: '39475377000' }
      ]);
    });
};
