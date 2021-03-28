import React from 'react'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import firebaseApp, { auth } from '../firebase'
import Brand from './Brand'
export default function Scheduler(){
    const history = useHistory();
    const [evnt, setEvnt] =useState("")
    const [startTime, setStartTime] =useState("")
    const [endTime, setEndTime] =useState("")
    const [date, setDate] =useState("")
    const [noOfQues, setNoOfQues] =useState("")
    const [time, setTime]=useState()

    const handleSchedule=(event)=>{
        sessionStorage.setItem("event", evnt)
        
        const year=date.split("-")[0];
        const month=date.split("-")[1];
        const day=date.split("-")[2];
        const startHours=startTime.split(":")[0];
        const startMinutes=startTime.split(":")[1];
        const endHours=endTime.split(":")[0];
        const endMinutes=endTime.split(":")[1];

        firebaseApp.firestore().collection("Events").doc(evnt).set({
           eventName:sessionStorage.getItem("event"),
           organizer:sessionStorage.getItem("email"),
           date:date,
           startTime:startTime,
           endTime:endTime,
           noOfQues:noOfQues,
           timeStampStart:new Date(year, month-1, day, startHours, startMinutes, 0, 0).getTime(),
           timeStampEnd:new Date(year, month-1, day, endHours, endMinutes, 0, 0).getTime(),
           timeDuration:time
        })
        history.push("/admin")
    }
    return <div style={{'paddingTop':'140px'}} className="landing-page">
            <input value={evnt} onChange={event=>setEvnt(event.target.value)} type="text" placeholder="Quiz Name" required />
            <input value={noOfQues} onChange={event=>setNoOfQues(event.target.value)} type="number" placeholder="Number of Questions" required />
            <input value={date} onChange={event=>setDate(event.target.value)} type="date" placeholder="Date of the Event" required />
            <input value={startTime} onChange={event=>setStartTime(event.target.value)} type="time" placeholder="Start of the Event" required />
            <input value={endTime} onChange={event=>setEndTime(event.target.value)} type="time" placeholder="End of the Event" required />
            <input value={time} onChange={event=>setTime(event.target.value)} type="number" placeholder="Duration of Quiz in minutes" required />
            <div className="d-flex justify-content-center"><button onClick={handleSchedule}>Submit</button></div>
            <Brand />
        </div>
}