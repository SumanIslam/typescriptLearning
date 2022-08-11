import React, { useState } from 'react';
import './App.css';
import ShoppingList from './components/ShoppingList';
import Item from './models/item';
import ShoppingListForm from './components/shoppingListForm';


function App() {
	const [items, setItems] = useState<Item[]>([]);

	const addItem = (product: string) => {
		console.log(product);
	}

	// const items = [
	// 	{
	// 		id: 1,
	// 		product: 'Lemon',
	// 		quantity: 3,
	// 	},
	// 	{
	// 		id: 2,
	// 		product: 'Chicken Breast',
	// 		quantity: 2,
	// 	},
	// ];

	return (
		<div>
			<ShoppingList items = {items}/>
			<ShoppingListForm onAddItem = {addItem} />
		</div>
	);
}

export default App;
