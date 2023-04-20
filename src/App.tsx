import Login from './screens/Login';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { GlobalStyles } from './themes/theme.config';
import Register from '@screens/Register';

const ErrorPage = () => {
  return <h1>Pagina não encontrada</h1>;
};

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />

          <Route element={<ErrorPage />} path="*" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
