const { v4: uuidv4 } = require('uuid');

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tags').del()
  await knex('tags').insert([
    { id: uuidv4(), name: 'Esporte' },
    { id: uuidv4(), name: 'Moda' },
    { id: uuidv4(), name: 'Livros' }
  ]);
};
