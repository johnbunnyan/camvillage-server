'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('users', [
      {
        user_id: 'king',
        password: '1234',
        name: 'michael',
        email: 'jordan@authstates.com',
        nickname: 'airjordan',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 'lightning',
        password: '5678',
        name: 'usain',
        email: 'bolt@authstates.com',
        nickname: 'bolt',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 'faker',
        password: '1111',
        name: 'lee',
        email: 'faker@authstates.com',
        nickname: 'lol',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ]);
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('users', null, {});
  },
};