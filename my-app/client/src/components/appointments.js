import React, {useState, useEffect} from 'react';

const Appointments = ()=>{
    const [apps, setApps]=useState([])

    useEffect( () => {
        // const fetchApps = async () => {
        //     return
             fetch('/api/appointments')
                .then(response => response.json())
                .then(apps => setApps({apps}))
                // };
        // let fetchedApps = await fetchApps();
        // setApps(fetchedApps);
    }, []);
    console.log(apps)

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

