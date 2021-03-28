import React, {useState} from 'react'

export default function RegistrationPage(){

       const [text, setText]=useState("");

    const [email,setEmail]=useState("");         //email
    const [password,setPassword]= useState("");  //mobile
    const [first,setFirst]=useState("");         //first name
    const [sec,setSec]=useState("");             //last name
    const [scholar,setScholar]=useState("");     //scholar no.

    const handleChange=(e)=>{
        setText(e.target.value);
    }


    return(<div style={window.innerWidth<500?{'paddingBottom':'35%'}:{'paddingBottom':'15%'}} className="landing-page">
        <h1 style={{'color':'#E63946', 'fontWeight':'bolder', 'textAlign':'center','fontSize':'3rem'}}>
            V<span style={{'fontSize':'2.5rem'}}>I</span>H<span style={{'fontSize':'2.5rem'}}>AA</span>N
        </h1>
        <div style={{'color':'#f1faee', 'padding':'2% 10%', 'textAlign':'center'}}>
            <p>VIHAAN is QCM's opening event for session( It take place even before fresher's evening). The event is organized for the first year students to participate , learn and to let them know what awaits them in future. VIHAAN is a platform for the students, amateurs, quizzers and newcomers to mettle in quizzing.</p>
        </div>
        
        <h3>Hello {text} !</h3>
        <div className="d-flex justify-content-center">
            <div>
                <input onChange={handleChange} type="text" placeholder="First Name" />
                <input value={sec} onChange={event=>setSec(event.target.value)} type="text" placeholder="Last Name" />
                <select>
                    <option>Executive</option>
                    <option>Quizzer</option>
                    <option>Web Developer</option>
                    <option>Content Writer</option>
                    <option>Photographer</option>
                </select>
                <input value ={email} onChange={event=>setEmail(event.target.value)} type="email" placeholder="Email Address" />
                <input value={password} onChange={event=>setPassword(event.target.value)} type="tel" placeholder="Mobile Number" />
                <input value={scholar} onChange={event=>setScholar(event.target.value)} type="number" placeholder="Scholar Number" />
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="First Name" />
            </div>
        </div>
        <div className="d-flex justify-content-center"><a href="/verification"><button>Register</button></a></div>
        <div className="brand">
            Quizzers' Club
            <br />
            <span style={{'color':'#E63946', 'fontSize':'1.4rem'}}>MANIT</span>
        </div>
    </div>)
}