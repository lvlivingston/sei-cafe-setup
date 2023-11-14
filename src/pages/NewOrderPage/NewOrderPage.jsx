import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';

export default function NewOrderPage() {
  const [menuItems, setMenuItems] = useState([]);
  // Create and initialize the ref to an empty array
  const categoriesRef = useRef([]);

  // - Fetch the menuItems from the server via AJAX
  // - When the data comes back, call setMenuItems to save in state
  // Add this useEffect with an empty dependency array that causes the effect to run only after the first render
  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      // Remove dups of category names using a Set, then spread Set back into an array literal
      categoriesRef.current = [...new Set(items.map(item => item.category.name))];
      setMenuItems(items);
    }
    getItems();
  }, []);
  
  return (
    <h1>NewOrderPage</h1>
  );
}