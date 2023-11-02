import JotaiStateTree from '@jswork/jotai-state-tree/src';
import stores from './stores';
import './App.css';

function App() {
  return (
    <JotaiStateTree stores={stores}>
      <h1>jotai-state-tree</h1>
      <button
        onClick={() => {
          console.log('click me');
        }}>
        Click me
      </button>
    </JotaiStateTree>
  );
}

export default App;
