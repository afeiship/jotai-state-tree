import ReactDOM from 'react-dom/client';
import JotaiStateTree from '@jswork/jotai-state-tree/src';
import stores from './stores';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <JotaiStateTree stores={stores}>
    <App />
  </JotaiStateTree>
);
