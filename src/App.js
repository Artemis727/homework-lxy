import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import LibApp from './TwtlibApp' ;
import LibList from './TwtlibList' ;
import Libinformation from './Twtlibinformation' ;
 
class App extends React.Component {
  render(){
    return(
      <Router >
        <div>
          <Route exact path="/TwtlibApp" component={LibApp} />
          <Route exact path="/TwtlibList" component={LibList} />
          <Route exact path="/Twtlibinformation" component={Libinformation} />
        </div>
      </Router>
    )
  }
}
export default App ;