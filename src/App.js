import { Routes, Route } from 'react-router-dom'
import { createContext, useState } from 'react'
import Home from './pages/Home';
import Login from './pages/Login'
import styles from './index.module.scss'
export const AuthContext = createContext(null);
function App() {

  const [usuario, setUsuario] = useState({ id: '', nome: '', email: '', role: '', token: '' })
  return (
    <AuthContext.Provider value={{ usuario, setUsuario }}>
      <div className={styles.App}>
        <Routes>
          <Route path='/:mesa' element={<Home />} />
          <Route path='/login/:role' element={<Login />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
