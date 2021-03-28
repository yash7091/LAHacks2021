import React from 'react'
import Event from './Event'
import EventButton from './EventButton'
import {useState, useEffect} from 'react'
import firebaseApp from '../firebase'
import {useHistory} from 'react-router-dom'


export default function MyEvents(){
    const history=useHistory()
    const [evt,setEvt]=useState([]);
    useEffect(()=>{
        firebaseApp.firestore().collection("Events").where('organizer', '==', sessionStorage.getItem('email')).onSnapshot(snapshot=>{
            setEvt(
                snapshot.docs.map(doc=>({
                    event:doc.data(),
                }))
            )
        })
    }
    ,[])
    // const [enabled, setEnabled]=useState(true);
    const handleLogout=(e)=>{
        sessionStorage.removeItem("email");
        history.push("/login")
    }
    return <div>
        <div className="landing-page" style={{'padding':'2% 5%'}}>
        <div style={{'display':'grid', 'gridTemplateColumns':'1fr 1fr'}}>
			<div style={{'padding':'25px 25px', 'float':'left'}} className="grid-item">
                <Event />
            </div>
		    <div style={{'float':'right','padding':'10px 0'}}>
				<a style={{'float':'right', 'cursor':'pointer'}} className="submit-btn link-accent" onClick={handleLogout}>LOGOUT</a>
		    </div>
	    </div>
        <div className="row">
            {evt.map(one=>{
                    return <div className="col-lg-4"><EventButton text={one.event.eventName} timeDuration={one.event.timeDuration} time={one.event.startTime+" to "+ one.event.endTime} date={one.event.date} noOfQues={one.event.noOfQues} organizer='true' enabled='true' /></div>
            })}
        </div>
        </div>
        <button onClick={e=>history.push('/scheduler')} style={{'position':'fixed', 'bottom':'5%', 'right':'5%', 'outline':'0', 'border':'0', 'padding':'10px 20px', 'borderRadius':'8px', 'boxShadow':'0 -2px 20px rgba(255,255,255,0.7)'}}>Schedule a quiz</button>
    </div>
}