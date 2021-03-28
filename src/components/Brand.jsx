import React from "react"
import SocialMedia from './SocialMedia'

export default function Brand(){
    return <a href='/'><div className="brand justify-content-center">
        <div className="d-flex justify-content-center">
        <div className="d-flex">
            <img src="lightbulb.png" height='70px' />
            <h2 style={{'padding':'15px 0 0 15px', 'color':'#F4E1EA', 'fontWeight':'bold'}}>Quizzers' Hub</h2>
        </div>
        </div>
    <p style={{'textAlign':'center', 'color':'#AED6AF', 'fontSize':'0.9rem', 'fontWeight':'normal','marginTop':'8px'}}>Organize and Attend workable quizzes.</p></div>
    </a>
}