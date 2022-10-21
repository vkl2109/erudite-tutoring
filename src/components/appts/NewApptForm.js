import { useRef } from 'react';
import classes from './NewApptForm.module.css';
import Card from '../ui/Card';

function NewApptForm (props) {
    const nameInput = useRef();
    const subjectInput = useRef();
    const emailInput = useRef();
    const numberInput = useRef();
    const dateInput = useRef();
    const timeInput = useRef();


    function submitHandler (e) {
        e.preventDefault();
        const apptData = {
            name: nameInput.current.value,
            subject: subjectInput.current.value,
            email: emailInput.current.value,
            number: numberInput.current.value,
            date: dateInput.current.value,
            time: timeInput.current.value,
        }
        props.onAddAppt(apptData);
    }

    return (
        <Card>
            <form className = {classes.form} onSubmit = {submitHandler}>
                <div className = {classes.control}>
                    <label htmlFor ='name'>Name</label>
                    <input type = 'text' required id = "name" ref = {nameInput}></input>
                </div>
                <div className = {classes.control}>
                    <label htmlFor ='subject'>Subject</label>
                    <input type = 'text' required id = "subject" ref = {subjectInput}></input>
                </div>
                <div className = {classes.control}>
                    <label htmlFor ='email'>Email</label>
                    <input type = 'email' required id = "email" ref = {emailInput}></input>
                </div>
                <div className = {classes.control}>
                    <label htmlFor ='number'> Phone Number</label>
                    <input type = 'text' required id = "number" ref = {numberInput}></input>
                </div>
                <div className = {classes.control}>
                    <label htmlFor ='date'>Date</label>
                    <input type = 'text' required id = "date" ref = {dateInput}></input>
                </div>
                <div className = {classes.control}>
                    <label htmlFor ='time'>Time</label>
                    <input type = 'text' required id = "time" ref = {timeInput}></input>
                </div>
                <div className = {classes.actions}>
                    <button>Submit</button>
                </div>
            </form>
        </Card>
    );
}

export default NewApptForm;