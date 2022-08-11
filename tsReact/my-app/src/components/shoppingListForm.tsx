import React from "react";

function ShoppingListForm(): JSX.Element {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('submitted');
    
  }
  return(
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product name.." />
      <button type="submit">Add item</button>
    </form>
  )
}

export default ShoppingListForm;