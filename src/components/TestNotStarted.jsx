import React from 'react'

export default function TextNotStarted(){
    return(<div style={{'padding':'0 10%'}}>
            <br/>
            <div><h3>You can not enter the Quiz now.</h3></div>
            <div style={{'display':'grid', 'grid-template-columns':'1fr 2fr', 'border':'2px solid rgba(69, 123, 157,0.7)','borderBottom':'none', 'padding':'10px 20px', 'borderRadius':'8px 8px 0 0', 'color':'#f1faee'}}>
                <div>Slot 1</div>
                <div style={{'textAlign':'right'}}>16th January<br />6:30 PM to 7:00 PM</div>
            </div>
            <div style={{'display':'grid', 'grid-template-columns':'1fr 2fr', 'border':'2px solid rgba(69, 123, 157,0.7)', 'padding':'10px 20px', 'borderRadius':'0 0 8px 8px', 'color':'#f1faee'}}>
                <div>Slot 2</div>
                <div style={{'textAlign':'right'}}>16th January<br />8:30 PM to 9:00 PM</div>
            </div>
        </div>)
}