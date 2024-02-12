import { Suspense, lazy } from 'react';

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

function LoadingScreen() {
  return <div>loading</div>;
}

export const DashboardPage = Loadable(lazy(() => import('../pages/DashboardPage')));
export const ReportPage = Loadable(lazy(() => import('../pages/ReportPage')));
export const OrderPenalPage = Loadable(lazy(() => import('../pages/OrderPenalPage')));
export const SignInPage = Loadable(lazy(() => import('../pages/Login')));
