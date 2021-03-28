import React,{useState, useEffect} from 'react'
import firebaseApp, { auth } from '../firebase'
import {useHistory} from 'react-router-dom'
import Brand from './Brand'
import Event from './Event'
                

export default function Admin(){
    const history = useHistory();
    const [evt,setEvt]=useState("");
    const [question,setQuestion] = useState("");
    const [a,setA] = useState("");
    const [b,setB] = useState("");
    const [c,setC] = useState("");
    const [d,setD] = useState("");
    const [ans,setAns] = useState("");
    let [message, setMessage]=useState("");
	
	const handleLogout=()=>{
        history.push('/login');
        sessionStorage.removeItem("email")
	}
    // useEffect(() => {
    //     auth.onAuthStateChanged((user) => {
    //       //redirect the page 
    //       console.log(user)
    //       if(!user){
    //         history.push('/admin-login')
    //       }
    //     })
    //   });

    const addQuestion=(event)=>{
        event.preventDefault();
        if(event ==="" || question==="" || a==="" || b==="" || c==="" || d==="" || ans===""){
           setMessage(<p style={{'color':'#E63946', 'textAlign':'center'}}>Fill out all the fields first.</p>);
            setTimeout(() => {
                   setMessage("");
            }, 2000);
        }else{
              firebaseApp.firestore().collection('Events/'+sessionStorage.getItem('event')+"/Questions").doc().set({
                eventName: sessionStorage.getItem('event'),
                question: question,
                A: a,
                B: b,
                C: c,
                D: d,
                ans:ans,
                organizer:sessionStorage.getItem('email')
            }).then(setMessage(<p style={{'color':'#f1faee'}}>Successfully added to the database.</p>)      
            ).catch((e)=>setMessage(<p style={{'color':'#E63946'}}>Some error has occured.</p>))
            setTimeout(() => {
                setMessage("");
            }, 3000);
            setEvt("");
            setQuestion("");
            setA("");
            setB("");
            setC("");
            setD("");
    }
    }
    return(<div>
	<div style={{'display':'grid', 'gridTemplateColumns':'1fr 1fr'}}>
			<div style={{'padding':'25px 25px', 'float':'left'}} className="grid-item">
                <Event />
            </div>
		    <div style={{'float':'right'}}>
				<button style={{'float':'right'}} className="submit-btn link-accent" onClick={handleLogout}>LOGOUT</button>
		    </div>
	</div>
	<div style={{'paddingTop':'0px'}} className="landing-page">
                <h3>Have a good question in mind? Bring it On.</h3>
                <form>
                <div className="d-flex justify-content-center">
                    <div>
                        <input required value={sessionStorage.getItem('event')} type="text" placeholder="Event Name" />
                        <textarea required value={question} onChange={event=>setQuestion(event.target.value)} type="text" placeholder="Question" />
                        <input required value ={a} onChange={(event)=>setA(event.target.value)} type="text" placeholder="Option 1" />
                        <input required value={b} onChange={(event)=>setB(event.target.value)} type="text" placeholder="Option 2" />
                        <input required value={c} onChange={(event)=>setC(event.target.value)} type="text" placeholder="Option 3" />
                        <input required value={d} onChange={(event)=>setD(event.target.value)} type="text" placeholder="Option 4" />
                        <select required onClick={e=>setAns(e.target.value)}>
                            <option value="">Select the correct option</option> 
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </select>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <a href="/verification">
                        <button onClick={addQuestion}>Push to the Database</button>
                    </a>
                </div>
                <div style={{'padding':'0 10px', 'textAlign':'center'}}>{message}</div>
                </form>
            </div>
		</div>
        );
}