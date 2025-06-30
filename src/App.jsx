import { useState } from 'react';
import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Education } from './components/sections/Education';
import "./index.css";
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import  Contact  from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
        
      {/* Enhanced Animated Background */}
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
  {/* Green Accent Animated Background */}
  <div className="fixed inset-0 bg-gradient-to-br from-black via-green-900/10 to-black">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%2300ff88&quot; fillOpacity=&quot;0.03&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
    
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-green-400/10 to-green-600/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-600/10 to-green-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
  </div>
  <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      </div>

     
    </>
  );
}

export default App;
