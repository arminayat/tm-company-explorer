import React from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes as AppRoutes,
} from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import CompanyDetails from '../pages/CompanyDetails';
import CompanyListPage from '../pages/CompanyList';

const Routes = () => (
  <Router>
    <AppRoutes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<CompanyListPage />} />
        <Route path="companies">
          <Route index element={<CompanyListPage />} />
          <Route path=":id" element={<CompanyDetails />} />
        </Route>
        <Route path="*" element={<Navigate to="/companies" replace />} />
      </Route>
    </AppRoutes>
  </Router>
);

export default Routes;
