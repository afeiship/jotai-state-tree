import './App.css';

function App() {
  const [action, setAction] = nx.$use('recorder.action');
  return (
    <>
      <h1>jotai-state-tree: {action} </h1>
      <button
        onClick={() => {
          nx.$set('recorder.action', 'record');
        }}>
        Record
      </button>
      <button
        onClick={(e) => {
          setAction('stop');
        }}>
        Stop
      </button>
      <button
        onClick={(e) => {
          // setAction('play');
          nx.$set('recorder.action', 'play');
        }}>
        Play
      </button>
    </>
  );
}

export default App;
