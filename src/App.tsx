import Login from './screens/Login';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { GlobalStyles } from './themes/theme.config';
import Register from '@screens/Register';
import Dashboard from '@screens/Dashboard';

import { store } from './store/index';
import { Provider } from 'react-redux';
import PrivateRoute from '@components/PrivateRoute';

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

          <Route
            path="/"
            element={
              <PrivateRoute isAllowed={true}>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route element={<ErrorPage />} path="*" />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
