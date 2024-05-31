import React, { useState } from 'react';
import axios from 'axios';
import TicketForm from './TicketForm';


const Ticket = () => {
  const [reporter, setReporter] = useState("");
  const [priority, setPriority] = useState(0);
  const [category, setCategory] = useState(0);
  const [description, setDescription] = useState("");
  const [assignToMe, setAssignToMe] = useState(null);
  const [isThereAnyResolution, setIsThereAnyResolution] = useState("");
  const [resolution, setResolution] = useState("");

  const createTicket = async () => {
    try {

      if(reporter !== "" && priority !== 0 
      && category !== 0 && description !== ""
      && assignToMe !== null && resolution !== ""
      && isThereAnyResolution !=="" ){
        const response = await axios.post('https://ithelpdeskwebapi.azurewebsites.net/api/Ticket',
        { reporter, priority , category, description, assignToMe, isThereAnyResolution, resolution  });
        console.log(response);
        clearForm();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const clearForm = () => {
    setReporter('');
    setPriority(0);
    setCategory(0);
    setDescription('');
    setAssignToMe(null);
    setResolution('');
    setIsThereAnyResolution('');
  };

  const handleSubmit = (e) => {
    createTicket();
  };

  return (
    <div>
      <h1 className="ticket-header">Create Ticket</h1>
      <div className="ticket-div">
      <TicketForm
          Submit={handleSubmit}
          reporter={reporter}
          priority={priority}
          category={category}
          description={description}
          assignToMe={assignToMe}
          isThereAnyResolution={isThereAnyResolution}
          resolution={resolution}
          setReporter={setReporter}
          setPriority={setPriority}
          setCategory={setCategory}
          setDescription={setDescription}
          setAssignToMe={setAssignToMe}
          setIsThereAnyResolution={setIsThereAnyResolution}
          setResolution={setResolution}
        />
      </div>
    </div>
  );
};

export default Ticket;