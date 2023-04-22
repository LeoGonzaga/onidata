import { Navigate, Outlet } from 'react-router-dom';

interface IPrivateRoute {
  isAllowed: boolean;
  children: JSX.Element;
}

export const PrivateRoute = ({
  isAllowed,
  children,
}: IPrivateRoute): JSX.Element => {
  if (!isAllowed) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
