import { Todo, TodoList } from './classes' // Busca el index.js pordefecto
import { crearTodoHtml } from './js/componentes';
import './styles.css';


const todoList = new TodoList();

const tarea = new Todo( 'Aprender JavaScript !!!!' );

todoList.nuevoTodo( tarea );

console.log( todoList);


crearTodoHtml( tarea );