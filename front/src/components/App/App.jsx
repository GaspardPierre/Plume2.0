import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "../../routes";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            Component={route.component}
            exact={route.exact}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
