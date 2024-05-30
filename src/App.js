import React from "react";
import './App.css';
import Ticket from './Ticket';
import TicketList from './TicketList';
import Nav from './Nav';
import { BrowserRouter,Routes, Route} from 'react-router-dom';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/Create" element={<Ticket/>} />
          <Route path="/Tickets" element={<TicketList/>} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
