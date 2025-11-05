import Header from './components/Header';
import Sidenav from './components/Sidenav';
import Footer from './components/Footer';
import Home from './pages/Home';


function App() {

  return (
    <div className='layout'>
      <Header/>
      <Sidenav/>
      <main className="main">
        <Home />
      </main>
      <Footer/>
    </div>
  )
}

export default App
