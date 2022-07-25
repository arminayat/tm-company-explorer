import { Spin } from 'antd';
import React, { ReactNode } from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes as AppRoutes,
} from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import withSuspense from '../helpers/withSuspense';

const CompanyDetailsPage = React.lazy(() => import('../pages/CompanyDetails'));
const CompanyListPage = React.lazy(() => import('../pages/CompanyList'));

const Routes = () => (
  <Router>
    <AppRoutes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={withSuspense(<CompanyListPage />)} />
        <Route path="companies">
          <Route index element={withSuspense(<CompanyListPage />)} />
          <Route path=":id" element={withSuspense(<CompanyDetailsPage />)} />
        </Route>
        <Route path="*" element={<Navigate to="/companies" replace />} />
      </Route>
    </AppRoutes>
  </Router>
);

export default Routes;
