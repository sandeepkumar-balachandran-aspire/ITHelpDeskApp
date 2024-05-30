import './TicketForm.css';
import { useNavigate } from "react-router-dom";

const TicketForm = ({ Submit, reporter, priority, category, description, assignToMe, isThereAnyResolution,resolution, 
    setReporter,setPriority,setCategory, setDescription, setAssignToMe,setIsThereAnyResolution, setResolution
 }) => {

    const navigate = useNavigate();
 
    const coursesPage = () => {
      navigate("/tickets")
    }

    // Handle the submit of the form.
    const handleSubmit = (e) => {
      e.preventDefault();
      Submit();
    };
  
    return (

    <div className="ticket-form">
        <form onSubmit={handleSubmit}>
            <div className="form-content">
            <div className="label"><label htmlFor="reporter">Reporter:</label></div>
            <input
                type="text"
                id="reporter"
                name="reporter"
                value={reporter}
                onChange={(event) => (event.target.value.length > 0 && event.target.value.length < 20 ) ? setReporter(event.target.value) :setReporter("") }
                required
            />
            </div>
            <div className="form-content">
            <div className="label"><label htmlFor="priority">Priority:</label></div>
            <select
                id="priority"
                name="priority"
                value={priority}
                onChange={(event) => (event.target.value.length > 0 ? setPriority(Number(event.target.value, 10)) :setPriority(0)) }
                required
            >
                <option value="">Select priority</option>
                <option value="1">1 - Low</option>
                <option value="2">2 - Medium</option>
                <option value="3">3 - High</option>
            </select>
            </div>
            <div className="form-content">
            <div className="label"><label htmlFor="category">Category:</label></div>
            <select
                id="category"
                name="category"
                value={category}
                onChange={(event) => (event.target.value.length > 0 && event.target.value.length < 2 ? setCategory(Number(event.target.value, 10)) :setCategory(0))}
                required
            >
                <option value="">Select category</option>
                <option value="1">1 - Technical Issue</option>
                <option value="2">2 - Billing Issue</option>
                <option value="3">3 - General Inquiry</option>
            </select>
            </div>
            <div className="form-content">
            <div className="label"><label htmlFor="description">Description:</label></div>
            <textarea
                id="description"
                name="description"
                value={description}
                onChange={(event) => (event.target.value.length > 0 && event.target.value.length < 50 ) ? setDescription(event.target.value) :setDescription('')}
                required
            />
            </div>
            <div className="form-content">
            <div className="label"><label htmlFor="assignToMe">Assign to Me:</label></div>
            <select
                id="assignToMe"
                name="assignToMe"
                value={assignToMe}
                onChange={(event) => (event.target.value.length > 0 ? setAssignToMe((event.target.value?.toLowerCase?.() === 'true')) :setAssignToMe(""))}
                required
            >
                <option value="">Select</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
            </div>
            <div className="form-content">
            <div className="label"><label htmlFor="isThereAnyResolution">IsThereAnyResolution:</label></div>
            <textarea
                id="isThereAnyResolution"
                name="isThereAnyResolution"
                value={isThereAnyResolution}
                onChange={(event) => (event.target.value.length > 0 && event.target.value.length < 20 ) ? setIsThereAnyResolution(event.target.value) :setIsThereAnyResolution('')}
                required
            />
            </div>
            <div className="form-content">
            <div className="label"><label htmlFor="resolution">Resolution:</label></div>
            <textarea
                id="resolution"
                name="resolution"
                value={resolution}
                onChange={(event) => (event.target.value.length > 0 && event.target.value.length < 20 ) ? setResolution(event.target.value) :setResolution('')}
                required
            />
            </div>
            <div className="buttonDiv">
            <button type="submit">Submit Ticket</button>
            <button onClick={coursesPage}>View Tickets</button>
            </div>
        </form>
        
    </div>
    );
  };

export default TicketForm;