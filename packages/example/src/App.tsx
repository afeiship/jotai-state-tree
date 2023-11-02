import JotaiStateTree from '@jswork/jotai-state-tree';
import stores from './stores';
import './App.css';

function App() {
  return (
    <JotaiStateTree stores={stores}>
      <h1>jotai-state-tree</h1>
      <button
        onClick={() => {
          nx.$set('recorder.action', 'record');
        }}>
        Record
      </button>
    </JotaiStateTree>
  );
}

export default App;
