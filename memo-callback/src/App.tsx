import { useState } from 'react';
import Profile from './components/Profile';
import ProductList from './components/ProductList';

const App = () => {

  const [count, setCount] = useState(0);

  return (
    <div>

      <h1>Memo and useCallback Exercise</h1>

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <hr />

      <Profile
        firstname="Karla"
        lastname="Avila"
      />

      <hr />

      <ProductList />

    </div>
  );
};

export default App;