import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { 
  HomePage,
  CounterButtonPage,
  PeopleListPage,
  NotFoundPage,
  ProtectedPage,
  ControlledFormPage,
  UncontrolledFormPage,
  UserProfilePage
} from './pages';
import { NavBar } from './NavBar';
import { FormsNavBar } from './FormsNavBar';
import './App.css';



function App() {
  
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [hideMessage, setHideMessage] = useState(false);

  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  return (
    <div className="App">
      <BrowserRouter>   
            <NavBar />
            <Routes>
                <Route exact path="/" element={ <HomePage /> } />
                <Route exact path="/counter" element={ <CounterButtonPage /> } />
                <Route exact path="/people-list" element={ <PeopleListPage /> } />
                <Route path="/protected" element={ <ProtectedPage /> } />
                <Route path='/user' element={ <UserProfilePage /> } />
                <Route path="/forms" element={ <FormsNavBar /> } />
                                <Route path="/forms/controlled" element={ <ControlledFormPage /> } />
                                <Route path="/forms/uncontrolled" element={ <UncontrolledFormPage /> } />
                <Route path="*" element={ <NotFoundPage /> } />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
