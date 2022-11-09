import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Logout from './pages/Logout';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import NotFound from './pages/NotFound';
import PasswordReset from './pages/PasswordReset';
import PasswordResetRequest from './pages/PasswordResetRequest';
import Register from './pages/Register';

function App(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/login' element={<Login />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/register' element={<Register />} />
                <Route path='/password/reset-request' element={<PasswordResetRequest />} />
                <Route path='/password/reset' element={<PasswordReset />} />
                <Route path='/mypage' element={<MyPage />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
