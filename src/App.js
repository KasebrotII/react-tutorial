import { useState } from 'react';
import { Greeting } from './Greeting';
import { PeopleList } from './PeopleList';
import { CounterButton } from './CounterButton';
import { CongratulationsMessage } from './CongratulationsMessage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HomePage, CounterButtonPage, PeopleListPage, NotFoundPage, ProtectedPage } from './pages';
import './App.css';



function App() {
  
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [hideMessage, setHideMessage] = useState(false);

  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  return (
    <div className="App">
      <BrowserRouter>   
            <Link to="/counter">Go to the Counter Page</Link>
            <Link to="/people-list">Go to the People List Page</Link>
            <Routes>
                <Route exact path="/" element={ <HomePage /> } />
                <Route exact path="/counter" element={ <CounterButtonPage /> } />
                <Route exact path="/people-list" element={ <PeopleListPage /> } />
                <Route path='/protected' element={ <ProtectedPage /> } />
                <Route path="*" element={ <NotFoundPage /> } />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
