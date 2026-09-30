import { useReducer } from 'react';

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'add': return { count: state.count + 1 };
    case 'remove': return { count: Math.max(0, state.count - 1) };
    default: return state;
  }
};

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(cartReducer, { count: 0 });

  return (
    <div>
      <p>Items in cart: {state.count}</p>
      <button onClick={() => dispatch({ type: 'add' })}>+</button>
      <button onClick={() => dispatch({ type: 'remove' })}>-</button>
    </div>
  );
};

export default ShoppingCart;
