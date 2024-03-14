// import { useState, useEffect } from 'react';
import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks';
import { RestrictedRoute } from './RastrictedRoute';
import { PrivateRoute } from './PriveteRoute';
import { refreshUser } from '../redux/auth/operation';
import { Layout } from './Layout';
import ErrorPage404 from '../pages/ErrorPage';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Contact = lazy(() => import('../pages/Contact'));
const Login = lazy(() => import('../pages/Login'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route
          path="/register"
          element={<RestrictedRoute redirectTo="/contacts" component={<Register />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/contacts" component={<Login />} />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/login" component={<Contact />} />}
        />
      </Route>
      <Route path="*" element={<ErrorPage404 />} />
    </Routes>
  );
};

export default App;
