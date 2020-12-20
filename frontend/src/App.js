import { Route, BrowserRouter as Router } from 'react-router-dom';
import Success from './Success';
import VerificationCode from './VerificationCode';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={VerificationCode} />
        <Route exact path="/success" component={Success} />
      </Router>

    </div>
  );
}

export default App;
