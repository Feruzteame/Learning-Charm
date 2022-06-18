import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './main/main';
import Auth from './auth/auth_page';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={ <Auth /> } />
          <Route path='/dashboard' exact element={ <Main /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
