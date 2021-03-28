import React, {useState} from 'react'
import {LinearProgress} from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {Redirect} from "react-router-dom"


export default function Instructions(){
    const token=sessionStorage.getItem("auth");
    const submitTime=sessionStorage.getItem("submitTime");
    const [loading, setLoading]=useState(true);
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: "#1A8BDB",
            },
            secondary: {
                main: "#F4E1EA",
            },
        },
    });
    setTimeout(() => {
        setLoading(false);
    }, 3000);

 return(loading?
    <ThemeProvider theme={theme}>
        <LinearProgress />
    </ThemeProvider>    
    :<div className="landing-page d-flex justify-content-center">
            {/*<Prompt
                message={(location, action)=>{
                    if(action==='POP'){
                        sessionStorage.removeItem("auth");
                        return "Are you sure you want to navigate back? You will be taken to the register window and you won't be able to take the test again.";
                    }
                }}
            />*/}
            <div style={window.innerWidth>700?{'padding':'0 25%'}:{'padding':'0 8%'}} className="question">
                <p style={{'margin':'5px 0','color':'#f1faee','paddingTop':'5%'}}>
                    Instructions-
                </p>
                <div style={{'height':'0', 'borderTop':'1px dashed rgba(69, 123, 157,0.5)', 'marginBottom':'5px'}}>
                </div>
                <p style={{'fontSize':'1rem', 'color':'#f1faee'}}>
                    1. Make sure that you have a proper internet connection.
                    <br />
                    <div style={{'height':'0', 'marginBottom':'10px'}}>
                    </div>
                    2. Total number of questions and the genre of the quiz is same as mentioned on the previous window.
                    <br />
                    <div style={{'height':'0', 'marginBottom':'10px'}}>
                    </div>
                    3. Total time allotted for the quiz was also mentioned on the previous window.
                    <br />
                    <div style={{'height':'0', 'marginBottom':'10px'}}>
                    </div>
                    4. Each question carries 1 marks.
                    <br />
                    <div style={{'height':'0', 'marginBottom':'10px'}}>
                    </div>
                    5. +1 for correct answer, 0 for incorrect answer.
                    <br />
                    <div style={{'height':'0', 'marginBottom':'10px'}}>
                    </div>
                    6. Avoid reloading and navigating while attempting the quiz, you may get disqualified and your response may be lost.
                </p>
                <a style={{'display':'block', 'textDecoration':'none', 'marginTop':'20px'}} className="d-flex justify-content-center" href="/quiz">
                    <button onClick={()=>
                    sessionStorage.setItem("submitTime", new Date().getTime()+sessionStorage.getItem('quizTime')*60*1000+4000)
                    } style={{'borderRadius':'8px', 'width':'250px'}}>
                        Proceed
                    </button>
                </a>
            </div>
        </div>
    )
    
}