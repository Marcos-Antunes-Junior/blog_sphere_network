import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./Login";


function App() {

  return (
    <Router>
    <Switch>
   <Route path='/login'>
   <Login />
   </Route>
   <Route exact path="/"></Route>
   </Switch>
   </Router>

    
  );
}

export default App;
