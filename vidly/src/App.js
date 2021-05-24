import { Route, Switch } from "react-router";
import "./App.css";
import Customers from "./common/Customers";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import { Route } from 'react-router-dom';

function App() {
  return (
    <main className="container">
      <Switch>
        <Route path="/movies"/>
        <Navbar />
        <Movies />
        <Route  path="/customers" component={Customers} />
      </Switch>
    </main>
  );
}

export default App;
