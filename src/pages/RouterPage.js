import React, { Component} from 'react';
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom'

export default class RouterPage extends Component {
    render() {
        return (
            <div className="ReactRouterPage">
            <Router>
                console.log(this);
               <div>
               <Link to="/home">首页</Link>
               <Link to="/user">用户中心</Link>
               </div>
               <Switch>
                  <Route exact path="/home" children={()=><div>children</div>} component={HomePage}/>
                  <Route path="/user" component={UserPage} />
               </Switch>
            </Router>

           
            </div>
        )
    }
}


class HomePage extends Component {
    render() {
        return (
            <div>
              Homepage    
            </div>
        )
    }
}
class UserPage extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
              UserPage  
            </div>
        )
    }
}

