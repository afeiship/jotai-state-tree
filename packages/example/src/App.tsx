import Button from '@jswork/react-lib';
import './App.css';
import '@jswork/react-lib/dist/style.css';

function App() {
  return (
    <>
      <h1>react-lib</h1>
      <Button
        onClick={() => {
          console.log('click me');
        }}>
        Click me
      </Button>
    </>
  );
}

export default App;
