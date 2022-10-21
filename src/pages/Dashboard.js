import { useState, useEffect } from 'react';
import ApptList from '../components/appts/ApptList';

function DashboardPage () {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedAppts, setLoadedAppts] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        fetch('https://erudite-tutoring-default-rtdb.firebaseio.com/appts.json'
        ).then((response) => {
            return response.json();
        }).then((data) => {
            const appts = [];

            for (const key in data) {
                const appt = {
                    id: key,
                    ...data[key]
                };

                appts.push(appt);
            }
            setIsLoading(false);
            setLoadedAppts(appts);
        });
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }
        
    return (
    <section>
        <h1>Appointments</h1>
        <ApptList appts = {loadedAppts}/>
    </section>
    );
}

export default DashboardPage;