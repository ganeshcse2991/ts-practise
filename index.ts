import axios from 'axios';

interface TODO {
  id: number;
  title: string;
  completed: boolean;
}

const URL = 'http://jsonplaceholder.typicode.com/todos/1';

axios.get(URL).then(response => {
  const todo = response.data as TODO;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    ID is : ${id},
    TITLE is : ${title},
    COMPLETED is: ${completed}
  `);
};
