import React, {useState, useEffect} from 'react';

const Appointments = ()=>{
    const [apps, setApps]=useState([])

    useEffect( () => {
        fetch('https://nailshop.herokuapp.com/api/routes/appoinments')
            .then(response => response.json())
            .then(data => setApps(data))
    }, []);
    console.log(apps)
   
    return (
        <div>
        <p>list of appointments</p>
        <table>
            <thead>
            <tr>
                <th>date and time</th>
                <th>Name</th>
                <th>phone number</th>
                <th>product</th>
            </tr>
            </thead>
            <tbody>
            { apps.map((e,i) => <tr key={i}>
                    <td>{e.dateTime}</td>
                    <td>{e.firstName} {e.secondName}</td>
                    <td>{e.phoneNumber}</td>
                    <td>{e.product}</td>
                </tr>)}
                </tbody>
                </table>                 
        </div>
    )
};

export default Appointments;

