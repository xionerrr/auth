import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom';

import { Footer } from 'components/Footer/index';
import { Header } from 'components/Header';
import { Home } from 'pages/Home/index';
import { Login } from 'pages/Login/index';
import { Register } from 'pages/Register/index';
import { ROUTES } from 'routes/routes'

function App() {
  const location = useLocation()
  console.log(location)

  return (
    <div className="App">
      <Header />
      <AnimatePresence>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REGISTER} element={<Register />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
