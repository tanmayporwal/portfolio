import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Services from "./components/Services"
import Particles from "react-particles-js"
import AboutMe from "./components/AboutMe"

function App() {
  return (
    <>
      <Particles 
        params = {{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true, 
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#FFFAFA"
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
    </>
  );
}

export default App;