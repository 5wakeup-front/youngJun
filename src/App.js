import Todo from './page/todo/todo';
import './App.css';
import { RecoilRoot } from 'recoil';


function App() {
  return (
    <RecoilRoot>
      <div className='height100'>
        <Todo />
      </div>
    </RecoilRoot>
  );
}

export default App;
