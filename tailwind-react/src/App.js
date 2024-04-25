import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="flex flex-col justify-center items-center h-screen w-screen">
        <div class="box-border container  bg-green-600 h-48 w-screen flex items-center justify-center">
          Hello, Tailwind CSS in React !!
        </div>
        <div class="box-border container bg-orange-600 h-48 w-screen text-green-800 text-6xl flex items-center justify-center">
          Hello, Tailwind CSS in React !!
        </div>
        <div class="box-border container bg-blue-700 h-48 w-screen flex items-center justify-center">
          Hello, Tailwind CSS in React !!
        </div>
        <div class="box-border container bg-purple-600 h-48 w-screen flex items-center justify-center">
          Hello, Tailwind CSS in React !!
        </div>
      </div>
    </div>
  );
}

export default App;
