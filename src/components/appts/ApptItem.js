import Card from '../ui/Card';
import classes from './ApptItem.module.css';

function ApptItem (props) {
    return (
        <li className = {classes.item}>
            <Card>
                <div className = {classes.content}>
                    <h3>{props.name}</h3>
                    <h3>{props.subject}</h3>
                    <email>{props.email}</email>
                    <p>{props.number}</p>
                    <date>{props.date}</date>
                    <br></br>
                    <time>{props.time}</time>
                </div>
                <div className = {classes.actions}>
                    <button>CANCEL</button>
                </div>
            </Card>
            
        </li>
    );
}
export default ApptItem;