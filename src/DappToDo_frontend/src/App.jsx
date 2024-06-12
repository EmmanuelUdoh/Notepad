import { useState } from 'react';
import { DappToDo_backend } from 'declarations/DappToDo_backend';
import './App.css';
import { TodoWrapper } from './components/TodoWrapper';


function App() {
  // const [greeting, setGreeting] = useState('');

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const name = event.target.elements.name.value;
  //   DappToDo_backend.greet(name).then((greeting) => {
  //     setGreeting(greeting);
  //   });
  //   return false;
  // }

  return (
    <main>
    <div className="App">
      <TodoWrapper  />
    </div>
    </main>
  );
}

export default App;
