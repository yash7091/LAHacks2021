import React from 'react'
import Event from './Event'
import EventButton from './EventButton'
import {useState, useEffect} from 'react'
import firebaseApp from '../firebase'
import {useHistory} from 'react-router-dom'


export default function EventsPage(){
    const history=useHistory()
    const [evt,setEvt]=useState([]);
    useEffect(()=>{
        firebaseApp.firestore().collection("Events").onSnapshot(snapshot=>{
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
                let enabled;
                const currentTime=new Date().getTime();
                if(currentTime>one.event.timeStampStart && currentTime<one.event.timeStampEnd){
                    enabled=true;
                }else{
                    enabled=false;
                }
                if(currentTime<=one.event.timeStampEnd){
                    return <div className="col-lg-4"><EventButton text={one.event.eventName} timeDuration={one.event.timeDuration} time={one.event.startTime} date={one.event.date} noOfQues={one.event.noOfQues} enabled={enabled} /></div>
                }
            })}
        </div>
        </div>
    </div>
}