import {React} from 'react'
import { useHistory} from 'react-router-dom';
import Brand from './Brand'

export default function Landing(){
    const history = useHistory();

    // //Email Validation
    // function validateEmail(emailAdd) {
    //     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     return re.test(String(emailAdd).toLowerCase());
    // }

    return(
    <div style={{'paddingTop':'140px'}} className='landing-page'>
        <div style={{'padding':'4% 8%'}}>
        <h3 style={{'textAlign':'center'}}>A platform connecting students, professionals, colleges, and companies through innovative challenges, engaging events, and gamified quizzes. A perfect place for the Quiz Organizers and the Quizzing Enthusiasts to connect.</h3><br /><br />
        <div className="d-flex justify-content-center">
            <button onClick={e=>history.push('/login')} style={{'margin':'10px 0', 'borderRadius':'8px','height':'50px'}}>
                Login
            </button>
        </div>
        <div className="d-flex justify-content-center">
            <button onClick={e=>history.push('/register')} style={{'margin':'10px 0', 'borderRadius':'8px','height':'50px'}}>
                Sign Up
            </button>
            </div>
        <br />
        </div>
        <Brand />
    </div>
    )
}