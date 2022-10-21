import ApptItem from './ApptItem';
import classes from './ApptList.module.css';

function ApptList (props) {
    return (
        <ul className = {classes.list}> 
            {props.appts.map(appt => <ApptItem 
            key = {appt.id} 
            id = {appt.id} 
            name = {appt.name}
            subject = {appt.subject}
            email = {appt.email}
            number = {appt.number}
            date = {appt.date}
            time = {appt.time}
            />)}
        </ul>
    );       
}

export default ApptList;