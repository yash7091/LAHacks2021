import React from 'react'
import LeaderBoard from './LeaderBoard'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Quiz from './Quiz'
import Landing from './Landing'
import Admin from './Admin'
import Instructions from './Instructions'
import AdminAuth from './AdminAuth'
import NotFound from './NotFound'
import Score from './Score'
import Scheduler from './Scheduler'
import EventsPage from './EventsPage'
import Login from './Login'
import MyEvents from './myEvents'
// import PrivateRoute from './PrivateRoute'
// import {db} from '../firebase'

export default function App(){
    // const [auth, setAuth]=useState(false);
    // useEffect(()=>{
    //     if(sessionStorage.getItem("auth")){
    //         setAuth(true);
    //     }
    // })

    
    return(
    <div>
            <Router>
                <Switch>
                    <Route path='/' exact><Landing /></Route>
                    {/*<Route path='/verification'><Otp /></Route>*/}
                    <Route path='/register'><AdminAuth /></Route>
                    <Route path='/login' component={Login} />
                    <Route path='/admin'><Admin /></Route>
                    <Route path="/leader-board" ><LeaderBoard /></Route>
                    <Route path='/quiz' component={Quiz} />
                    <Route path='/instructions' component={Instructions} />
                    <Route path='/score' component={Score} />
                    <Route path="/scheduler" component={Scheduler} />
                    <Route path="/events" component={EventsPage} />
                    <Route path="/my-events" component={MyEvents} />
                    <Route><NotFound /></Route>
                    </Switch>
                </Router>
    </div>
    )
}
