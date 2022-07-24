const btn = document.getElementById('btn')! as HTMLButtonElement;

const input = document.getElementById('todoinput')! as HTMLInputElement;

const form = document.querySelector('form')!;

const list = document.getElementById('todolist')!;

interface Todo {
	text: string;
	completed: boolean;
}

const todos: Todo[] = readTodos();

function readTodos(): Todo[] {
	const todosJSON = localStorage.getItem('todos');
	if(todosJSON === null)  return [];
	return JSON.parse(todosJSON);
}

function createTodo(todo: Todo): void {
	const newLI = document.createElement('li');
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.checked = false;
	newLI.append(todo.text);
	newLI.append(checkbox);
	list.append(newLI);
}

function handleSubmit(e: SubmitEvent): void {
	e.preventDefault();

	const newTodo: Todo = {
		text: input.value,
		completed: false,
	};

	createTodo(newTodo);
	todos.push(newTodo);

	localStorage.setItem('todos', JSON.stringify(todos));

	input.value = '';
}

form.addEventListener('submit', handleSubmit);
