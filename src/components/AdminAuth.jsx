import React, {useState} from 'react'
import Brand from './Brand'
import firebaseApp from '../firebase'
import {useHistory} from 'react-router-dom'


export default function AdminAuth(){
    const history = useHistory();
    const [email,setEmail]=useState("");         //email
    const [first,setFirst]=useState("");         //first name
    const [last,setLast]=useState("");             //last name
    const [post,setPost]=useState("");             //post
    const [password,setPassword]=useState("");     //scholar no.
    
    const handleClick=(e)=>{
        e.preventDefault()
        firebaseApp.firestore().collection(post).doc(email).set({
                         firstName: first,
                         lastName: last,
                         post:post,
                         email:email,
                         password: password,           
        })
        sessionStorage.setItem("email", email)
        if(post === "Organizer"){
            history.push('/my-events');
        }else{
            history.push('/events')
        }
    }
    

    return (<div style={{'paddingTop':'140px'}}>
            <h3>Hello {first} !</h3>
            <div className="landing-page">
                <input value={first} onChange={event=>setFirst(event.target.value)} type="text" placeholder="First Name" required />
                <input value={last} onChange={event=>setLast(event.target.value)} type="text" placeholder="Last Name" required />
                <div className="d-flex justify-content-center">
                    <select value={post} onChange={event=>setPost(event.target.value)} required>
                        <option value="">Choose an option</option>
                        <option value="Organizer">Create a quiz</option>
                        <option value="Attendee">Attend a quiz</option>
                    </select>
                </div>
                <input type="email" value ={email} onChange={event=>setEmail(event.target.value)}  placeholder="Email Address" required />
                <input value={password} onChange={event=>setPassword(event.target.value)} type="password" placeholder="Password" required />
                <div className="d-flex justify-content-center"><button onClick={handleClick}>Submit</button></div>
                <p style={{'color':'#eadeda', 'textAlign':'center'}}>Already registered? <a href="/login" className="link-accent">Sign in</a></p>
            </div>
            <Brand />
    </div>)
}

