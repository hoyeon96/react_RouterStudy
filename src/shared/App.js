import React, { Component } from 'react';
import { BrowserRouter as Router, Route ,Switch } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Posts from '../pages/Posts';
import MyPage from '../pages/MyPage';
import Login from '../pages/Login';
import Search from '../pages/Search';
import NoMatch from '../pages/NoMatch';

import Header from '../components/Header';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header  />
                    <div>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            {/* exact를 하지 않으면 /about에도 /가 있기 때문에, 매칭되어 보여짐 */}
                            {/* <Switch> */}
                                <Route path="/about/:name" component={About} />
                                {/* <Route path="/about " component={About} /> */}
                                {/* /about을 위에 작성했더니 name 입력해도 안나타남 */}
                            {/* </Switch> */}
                            <Route path="/posts" component={Posts} />
                            <Route path="/login" component={Login} />
                            <Route path="/me" component={MyPage} />
                            <Route path="/search" component={Search} />
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                    
                </div>
            </Router>
                
            
        );
    }
}

export default App;