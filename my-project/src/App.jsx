import './App.css'
// import Logo from "./Logo";
import Navbar from "./Navbar";
import Help from "./help.jsx";
import Home from "./Home";
import Howto from "./howto.jsx";
import Project from "./projects.jsx";
import Footer from "./footer";
import Service from "./services.jsx";
import FoundersSection from "./founder.jsx";
import Widget from "./testimonal.jsx";
import Faq from "./faq.tsx";


function App() {
 

  return (
    <>
      <div className="container">
        <Navbar></Navbar>
        <Home></Home>
        <Help></Help>
        <Howto></Howto>
        <Project></Project>
        <Service></Service>
        <Widget></Widget>
        <FoundersSection></FoundersSection>
        <Faq></Faq>
        <Footer />
      </div>
    </>
  );
}


export default App
