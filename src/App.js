import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./Login";
import Registration from "./Registration";


function App() {

  return (
    <Router>
    <Switch>
   <Route path='/login'>
   <Login />
   </Route>
   <Route exact path="/"></Route>
   <Route path="/registration"> <Registration /> </Route>
   </Switch>
   </Router>

    
  );
}

export default App;
