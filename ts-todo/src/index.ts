const btn = document.getElementById('btn')! as HTMLButtonElement;

const input = document.getElementById('todoinput')! as HTMLInputElement;

const form = document.querySelector('form')!;

const list = document.getElementById('todolist')!;

// interface for a Todo
interface Todo {
	text: string;
	completed: boolean;
}

// Todos array
const todos: Todo[] = readTodos();

// showing todos to the dom
todos.forEach(todo => {
	createTodo(todo);
});

// function to save todos in local storage
function saveTodos(): void {
	localStorage.setItem('todos', JSON.stringify(todos));
}

// function that read all the todos from local storage
function readTodos(): Todo[] {
	const todosJSON = localStorage.getItem('todos');
	if(todosJSON === null)  return [];
	return JSON.parse(todosJSON);
}


// function that create an individual todo
function createTodo(todo: Todo): void {
	const newLI = document.createElement('li');

	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.checked = todo.completed;

	// event listener for updating completed status of a todo
	checkbox.addEventListener('change', () => {
		todo.completed = checkbox.checked;
		
		// saveTodos function calls
		saveTodos();
	})

	newLI.append(todo.text);
	newLI.append(checkbox);
	list.append(newLI);
}


// handle form submission
function handleSubmit(e: SubmitEvent): void {
	e.preventDefault();

	const newTodo: Todo = {
		text: input.value,
		completed: false,
	};

	// createTodo function calls
	createTodo(newTodo);

	// push todo in todos array
	todos.push(newTodo);

	// saveTodos function calls
	saveTodos();
	// set input value to "" (empty string)
	input.value = '';
}

// event listener for form submission
form.addEventListener('submit', handleSubmit);
