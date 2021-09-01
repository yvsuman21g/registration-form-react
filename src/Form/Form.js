import React, { useState } from 'react';
import './Form.css';

    const MultipleInputs = () => {
       
   const [userRegistration, setuserRegistration] = useState({
       username: "",
       email: "",
       phone: "",
       password: ""

   });
        const [records, setRecords] = useState([]);

        const handleInput = (e) => {
            const name = e.target.name;
            const value = e.target.value;
            console.log(name, value);

            setuserRegistration({... userRegistration, [name]: value})
        }

        const handleSubmit = (e) => {
                e.preventDefault();

                const newRecord = {... userRegistration, id:new Date().getTime().toString() }
                console.log(records);
                setRecords([... records, newRecord])
                console.log(records);

                setuserRegistration({ username:"", email:"", phone:"", password:"" });
        }
       
       

        return(
            <>
           
           <form action="" onSubmit={handleSubmit}>
                             
                <div className="main">
                    <label htmlFor ="username">FullName</label>
                    <input type="text" autoComplete="off" value={userRegistration.username} onChange={handleInput} name="username"></input>
                </div>
                <div className="main">
                    <label htmlFor ="email">Email</label>
                    <input type="text" autoComplete="off"  value={userRegistration.email} onChange={handleInput} name="email" ></input>
                </div>
                <div className="main">
                    <label htmlFor ="phone">Phone</label>
                    <input type="text" autoComplete="off"  value={userRegistration.phone} onChange={handleInput} name="phone" ></input>
                </div>
                <div className="main">
                    <label htmlFor ="password">Password</label>
                    <input type="password"  value={userRegistration.password} onChange={handleInput} name="password" ></input>
                </div>

                <button type ="submit">Registration</button>
               

           </form>
           <div>
                {
                    records.map((curElem) => {

                        const {id, username, email, phone, password} = curElem;
                        
                        return(
                            <div className="showDataStyle" key={curElem.id}>
                                <p>{curElem.username}</p>
                                <p>{curElem.email}</p>
                                <p>{curElem.phone}</p>
                                <p>{curElem.password}</p>
                            </div>
                        )

                        })
                }
            </div>

            </>
           
           
        )

    }


    export default MultipleInputs;