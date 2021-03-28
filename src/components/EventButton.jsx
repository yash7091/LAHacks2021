import React from 'react'
import {useHistory} from 'react-router-dom'

export default function EventButton(props){
    const history=useHistory()

    const handleClick=(event)=>{
        sessionStorage.setItem("quizName", props.text);
        if(props.enabled){
            if(props.organizer){
                history.push('/leader-board')
            }else{
                sessionStorage.setItem("quizTime", props.timeDuration);
                sessionStorage.setItem("noOfQues", props.noOfQues);
                history.push('/instructions');
            }
        }
    }

    return <div style={{'backgroundColor':'#122464','borderRadius':'8px', 'padding':'4%', 'color':'#eadeda', 'marginBottom':'2%'}}>
            <h4>{props.text}</h4>
            <div style={{'fontSize':'0.8rem'}}>
                <p style={{'opacity':'0.7', 'margin':'0'}}>Number of Questions - {props.noOfQues}</p>
                <p style={{'opacity':'0.7', 'margin':'0'}}>Date - {props.date}</p>
                <p style={{'opacity':'0.7', 'margin':'0'}}>Time - {props.time}</p>
                <p style={{'opacity':'0.7', 'margin':'0'}}>Time Duration - {props.timeDuration} minutes</p>
            </div><br />
            <button onClick={handleClick} style={{'height':'50px', 'borderRadius':'8px', 'opacity':props.enabled?'1':'0.5', 'cursor':props.enabled?'pointer':'default', 'width':'100%'}}>{props.organizer?'Student Response':'Join'}</button>
    </div>
}