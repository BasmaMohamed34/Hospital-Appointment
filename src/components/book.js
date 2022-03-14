import { useState } from "react";
import { DatePicker } from "react-rainbow-components";

const Book=(props)=>{
  let [date,setDate]=useState(null);
  let [patient,setPatient]=useState(props.user.username);
  function onDateChange(){
    setDate(date);
  }
  let style={
     backgroundImage: "url(/bookBG.jpg)",
     backgroundSize:"cover",
     paddingBottom:"160px",
     fontFamily:"kumbh Sans",
     fontWeight:"bold",
     textAlign:"center"
  }
    return(
        <div style={style}>
            <h1 className="text-center text-danger pt-5">Book Appointment</h1>
          <div className="w-50 m-auto mt-5 rounded p-4 border shadow-lg" >
            <form>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input required type="input" placeholder={patient} onChange={(e)=>{setPatient(e.target.value)}} className="form-control" id="username"/>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input required type="input" placeholder="email address" className="form-control" id="username"/>
              </div>
              <DatePicker required value={date} onChange={onDateChange} label="Pick appointment date" className="text-danger"/> 
              <button type="submit" className="btn btn-primary btn-lg mt-3" onClick={()=>{
                alert("Appointment booked successfully")
              }}>Submit</button>
            </form>
          </div>
        </div>  
    )
}

export default Book;