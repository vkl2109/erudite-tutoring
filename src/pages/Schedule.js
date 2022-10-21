import { useNavigate } from 'react-router-dom';
import NewApptForm from '../components/appts/NewApptForm';

function SchedulePage () {
    const navigate = useNavigate();
    function addApptHandler (apptData) {
        fetch(
            'https://erudite-tutoring-default-rtdb.firebaseio.com/appts.json',
            {
                method: 'POST',
                body: JSON.stringify(apptData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate("/Dashboard", { replace: true });
        });
    }

    return (
        <section>
            <h1>Scheduling</h1>
            <NewApptForm onAddAppt = {addApptHandler}/>
        </section>
    );
}

export default SchedulePage;