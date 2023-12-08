import { Routes } from 'react-router-dom';
import './App.css';
import DeiselProducts from './Components/Deisel/DeiselProducts';
import DeiselProduct1 from './Components/DeiselDetail/DeiselProduct1';
import Engine from './Components/Engine-Oil/Engine';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
// import { Route,Routes } from 'react-router-dom';
import Header from './Components/Navbar/Header';
import PetrolProducts from './Components/Petrol/PetrolProducts';

function App() {
  return (
    <>
      <Header />
      <Main />
      <DeiselProducts />
      <PetrolProducts />
      <Engine />
      <Footer />
      {/* <Routes>
        <Route path="/DeiselProduct1" element={<DeiselProduct1 />} />
      </Routes> */}
    </>
  )
}

export default App;
