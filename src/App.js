import './App.css';
import Left from './components/Left';
import Right from './components/Right';

function App() {
  return (
    <div className="container">
      <div>
        <Left />
      </div>
      <div>
        <Right />
      </div>
    </div>
  );
}

export default App;
