import React, {useState} from 'react';

const Appointments = ()=>{
    const [apps, setApps]=useState([])

    useEffect(async () => {
        const fetchApps = () => {
            return fetch('/api/appointments')
                .then(response => response.json());
        };
        let fetchedApps = await fetchApps();
        setApps(fetchedApps);
    }, []);

    return (
        <div>
        <p>list of appointments</p>
        <ul>
            <li>app#1</li>
            <li>app#2</li>
            <li>app#3</li>
        </ul>
        </div>
    )
};

export default Appointments;

