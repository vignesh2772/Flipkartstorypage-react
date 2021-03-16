import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import SocialFollow from "./SocialFollow";
import Scroll from "./scroll";

function App() {
  return (

    < div>
      <Scroll showBelow={250} />
      
      <div><Header /></div>
      
    </div>
  );
}

export default App;
