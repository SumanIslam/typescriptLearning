import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ShoppingList from './components/ShoppingList';
import Item from './models/item';
import ShoppingListForm from './components/shoppingListForm';


function App() {
	const [items, setItems] = useState<Item[]>([]);

	const addItem = (product: string, quantity: number) => {
		setItems([...items, {id: uuidv4(), product, quantity}])
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
