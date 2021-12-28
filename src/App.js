
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Home from "./Views/image/Home";
import Notfound from "./Views/image/Notfound";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route >
          <Notfound />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
