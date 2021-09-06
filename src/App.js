import { Learn, Home, About, Integration, Support } from "./pages/pages";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/learn" component={Learn} />
          <Route path="/support" component={Support} />
          <Route path="/integration" component={Integration} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
