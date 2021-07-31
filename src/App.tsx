import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import { Home } from './pages/Home';
import { Login } from './pages/Login'
import { Room } from './pages/Room';
import { AdminRoom } from './pages/AdminRoom';


import {AuthContextProvider} from './contexts/AuthContext'


function App() {
  
  return (
    <Router>  
      <AuthContextProvider>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" exact component={Login} />
        <Route path="/rooms/:id" component={Room} />
        <Route path="/admin/rooms/:id" component={AdminRoom}/>
        </Switch>
        </AuthContextProvider>
    </Router>
  );
}

export default App;
