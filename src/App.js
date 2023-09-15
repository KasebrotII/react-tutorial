import { useState } from 'react';
import { Greeting } from './Greeting';
import { PeopleList } from './PeopleList';
import { CounterButton } from './CounterButton';
import { CongratulationsMessage } from './CongratulationsMessage';
import './App.css';

const people = [{
  name: "John"
  , age: 40
  , hairColor: "brown"
}
, {
  name: "Helga"
  , age: 25
  , hairColor: "red"
}
, {
  name: "Dwayne"
  , age: 55
  , hairColor: "blonde"
}];

function App() {
  
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [hideMessage, setHideMessage] = useState(false);

  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  return (
    <div className="App">
      <header className="App-header">
        {hideMessage
          ? null
          : <CongratulationsMessage 
            numberOfClicks={numberOfClicks}
            threshold={10}
            onHide={() => setHideMessage(true)}
            ></CongratulationsMessage>}
        
        <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks}></CounterButton>
      </header>
    </div>
  );
}

export default App;
