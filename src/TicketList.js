import { useState,useEffect } from 'react';
import './TicketList.css';
import './Spinner.css';
import axios from 'axios';

const TicketList = () => {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(false);

      useEffect(() => {
        fetchTickets();
      },[]);

        const fetchTickets = async () => {
            setLoading(true);
            try {
            const response = await axios.get('https://ithelpdeskwebapi.azurewebsites.net/api/Ticket');
            setTickets(response.data);
            } catch (error) {
            console.error( error);
            } finally {
            setLoading(false);
            }
        };

    return (
        <div>
        <h1 className="ticket-header">Tickets</h1>
        <div className="TicketTable">
        { loading ? <div className="spinner"></div> :
            <table>
                <tr className="ticketheader-row">
                    <th>Id</th>
                    <th>Repoter</th>
                    <th>Category</th>
                    <th>AssignToMe</th>
                    <th>Description</th>
                    <th>IsThereAnyResolution</th>
                    <th>Resolution</th>
                </tr>
                {tickets ? tickets.map((ticket) => (
                <tr className="ticket-row">
                    <td>{ticket.ticketId}</td>
                    <td>{ticket.reporter}</td>
                    <td>{ticket.category}</td>
                    <td>{ticket.assignToMe ? "Yes" : "No"}</td>
                    <td>{ticket.description}</td>
                    <td>{ticket.isThereAnyResolution}</td>
                    <td>{ticket.resolution}</td>
                </tr>
            )) : <></>}
            </table>
        }
        </div>
        </div>
    );
  };

export default TicketList;