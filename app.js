const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

let todos = [];

app.get('/', (req, res) => {
  res.render('index', { todos: todos });
});

app.post('/add', (req, res) => {
  const newTodo = req.body.todo;
  todos.push(newTodo);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
