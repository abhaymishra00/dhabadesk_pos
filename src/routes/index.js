import { Navigate, useRoutes } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
// config
import MainLayout from '../layouts/MainLayout';
import { DashboardPage, OrderPenalPage, ReportPage, SignInPage } from './pages';
import GuestLayout from 'src/layouts/GuestLayout';
import OrderPanelLayout from 'src/layouts/OrderPanelLayout';
// import DashboardPage from 'src/pages/DashboardPage';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <Outlet />
        </MainLayout>
      ),
      children: [
        {
          index: true,
          element: <DashboardPage />,
        },

        {
          path: 'reports',
          element: <ReportPage />,
        },
        {
          path: 'customers',
          element: <ReportPage />,
        },
      ],
    },
    {
      path: 'order-panel',
      element: (
        <OrderPanelLayout>
          <OrderPenalPage />
        </OrderPanelLayout>
      ),
    },
    {
      path: 'auth',
      element: (
        <GuestLayout>
          <Outlet />
        </GuestLayout>
      ),
      children: [
        { index: true, element: <Navigate to="/auth/sign-in" replace /> },
        {
          path: 'sign-in',
          element: <SignInPage />,
        },
      ],
    },

    // No match 404
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
