import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Constacts';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router';
import { RootLayout } from './layout/RootLayout';



function App() {

  return (
    <Routes>
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
