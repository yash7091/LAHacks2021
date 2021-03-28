import React, {useState, useEffect} from 'react'
import Brand from './Brand'
import {db} from '../firebase'
import {LinearProgress} from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {useHistory, Redirect} from "react-router-dom"
import Event from './Event'

export default function Score(){
    const [loading, setLoading]=useState(true);
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: "#06d6a0",
            },
            secondary: {
                main: "#f1faee",
            },
        },
    });

    const history =useHistory();
    window.addEventListener("popstate", e=>{
        history.push("/events");
    })

    //Store the points in the database
    let [name, setName]=useState('')
    useEffect(()=>{  
        db.collection("Attendee").doc(sessionStorage.getItem("email")).get().then(doc=>{
            setName(doc.data().firstName+" "+doc.data().lastName)
        }).then(()=>{
            db.collection("scores").doc().set({
                points:sessionStorage.getItem('score'),
                name:name,
                email:sessionStorage.getItem("email"),
                quizName:sessionStorage.getItem("quizName")
            }).then(()=>{
                setLoading(false);
            })
        })
    },[])

    return (loading?
        <ThemeProvider theme={theme}>
            <LinearProgress />
        </ThemeProvider>
        :<div>
        <div style={{'paddingTop':'140px'}} className="d-flex justify-content-center landing-page">
          <div>
            <h1 style={{'color':'#ffd400', 'textAlign':'center'}}>Your Score</h1>
            <div className="d-flex justify-content-center">
                <img alt="trophy-img" width="150px" height="150px" src="trophy.png" />
            </div>
            <div style={{'border':'2px solid rgba(69, 123, 157,0.5)', 'borderRadius':'8px','height':'60px', 'width':'200px', 'margin':'auto', 'padding':'12px', 'color':'#f1faee'}}>
                <h4 style={{'textAlign':'center'}}>{sessionStorage.getItem('score')}</h4>
            </div>
            <h6 style={{'color':'#f1faee', 'padding':'20px 50px', 'textAlign':'center'}}        >Thankyou for taking the Test.
                <br />
            </h6> 
            <div className="d-flex justify-content-center">
                <a href="/events" className="link-accent">Attend more quizzes</a>
            </div>
        </div>
   </div>
   <Brand />
   </div>
   )
}