import { Todo, TodoList } from './classes' // Busca el index.js pordefecto
import { crearTodoHtml } from './js/componentes';
import './styles.css';


export const todoList = new TodoList();


todoList.todos.forEach( crearTodoHtml );

