import React from 'react'
import {useState} from 'react'
import Brand from './Brand'
import firebaseApp from '../firebase'
import {useHistory} from 'react-router-dom'

export default function Login(){
    const history=useHistory()
    const [password,setPassword]=useState("");     //scholar no.
    const [email,setEmail]=useState("");         //email
    const [message, setMessage]=useState("")
    const [post,setPost]=useState("");             //post

    const handleLogin=(e)=>{
        firebaseApp.firestore().collection(post).doc(email).get().then(doc=>{
            if(doc.exists){
                if(doc.data().password === password){
                    if(post==="Organizer"){
                        history.push('/my-events');
                        sessionStorage.setItem("email", email)
                    }else{
                        history.push('/events')
                        sessionStorage.setItem("email", email)
                    }
                }else{
                    setMessage("Incorrect Password");
                    setTimeout(() => {
                        setMessage("")
                    }, 3000);
                }
            }else{
                setMessage("You are not registered as an "+post+". Please sign up to continue.");
                setTimeout(() => {
                    setMessage("")
                }, 3000);
            }
        })
    }

    return (<div style={{'paddingTop':'140px'}}>
        <h3>Welcome Back !</h3>
        <div className="landing-page">
            <input type="email" value ={email} onChange={event=>setEmail(event.target.value)}  placeholder="Email Address" required />
            <input value={password} onChange={event=>setPassword(event.target.value)} type="password" placeholder="Password" required />
            <div className="d-flex justify-content-center">
                <select value={post} onChange={event=>setPost(event.target.value)} required>
                    <option value="">Choose an option</option>
                    <option value="Organizer">Create a quiz</option>
                    <option value="Attendee">Attend a quiz</option>
                </select>
            </div>
            <div className="d-flex justify-content-center"><button onClick={handleLogin}>Submit</button></div>
            <p style={{'color':'#eadeda', 'textAlign':'center'}}>Don't have an account? <a href="/register" className="link-accent">Sign Up</a></p>
            <p style={{'color':'#fff', 'textAlign':'center'}}>{message}</p>
            <Brand />
        </div>
    </div>)
}