import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Community from './pages/community';
import HarvestingEngines from './pages/HarvestingEngines';
import No404 from './pages/No404';
import RegisterPage from './pages/RegisterPage';
import CardInfo from './pages/CardInfo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/HarvestingEngines" element={<HarvestingEngines />} />
          <Route path='/Community' element={<Community />} />
          <Route path='/LoginPage' element={<LoginPage />} />
          <Route path='/RegisterPage' element={<RegisterPage />} />
          <Route path='/:id' element={<CardInfo />} />
          <Route path='*' element={<No404 />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
