var faker = require('faker');

var database = { todos: []};

for (var i = 1; i<= 300; i++) {
  database.todos.push({
    id: i,
    title: faker.lorem.word(),
    detail: faker.lorem.sentences()
  });
}

console.log(JSON.stringify(database));
