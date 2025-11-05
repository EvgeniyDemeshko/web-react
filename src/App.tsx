import Header from './components/Header';
import Sidenav from './components/Sidenav';
import Footer from './components/Footer';
import Home from './pages/Home';
import { useState } from 'react';
import About from './pages/About';


function App() {
  const [page, setPage] = useState('home');

  return (
    <div className='layout'>
      <Header onNavigate={setPage} />
      <Sidenav/>
      <main className="main">
        {page === 'home' && <Home />}
        {page === 'about' && <About />}
      </main>
      <Footer/>
    </div>
  )
}

export default App
