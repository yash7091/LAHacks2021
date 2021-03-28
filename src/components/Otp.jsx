import React from 'react'

export default function Otp(){
    return(<div className="landing-page">
                <h3>Enter OTP</h3>
                <div className="d-flex justify-content-center">
                    <input type="number" />
                </div>
                <div className="d-flex justify-content-center">
                    <a href="/quiz">
                        <button>Verify</button>
                    </a>
                </div>
                <div className="brand">
                    Quizzers' Club
                    <br />
                    <span style={{'color':'#E63946', 'fontSize':'1.4rem'}}>
                        MANIT
                    </span>
                </div>
            </div>
        )
}