import NavBarComponent from "./components/NavBarComponent";
import "./App.css";
import GreenBannerComponent from "./components/GreenBannerComponent";
import Card from "./components/Card";
import Recommennds from "./components/Recommennds";
import Barista from "./components/Barista";
import LearnMore from "./components/LearnMore";
import Footer from "./components/Footer";




function App() {
  return (
   <div>
    <NavBarComponent />
    <GreenBannerComponent />
    <Card/>
    <Recommennds />
    <Barista />
    <LearnMore/>
    <Footer/>
    
    </div>
  );
}

export default App;
