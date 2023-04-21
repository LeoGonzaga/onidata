import Login from './screens/Login';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { GlobalStyles } from './themes/theme.config';
import Register from '@screens/Register';
import Dashboard from '@screens/Dashboard';

import { store } from './store/index';
import { Provider } from 'react-redux';

const ErrorPage = () => {
  return <h1>Pagina não encontrada</h1>;
};

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
          <Route element={<Dashboard />} path="/" />

          <Route element={<ErrorPage />} path="*" />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
