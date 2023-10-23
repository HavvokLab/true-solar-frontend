import "./App.css";
import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import AuthenContext from "./utils/useAuthentication";
import Login from "./views/login";
import SummaryDashboard from "./views/summaryDashboard";
import AlarmDashboard from "./views/alarmDashboard";
import ReportDashboard from "./views/reportDashboard";
import MonthlyProduction from "./views/monthlyProduction";
import ConfigWeb from "./views/configWeb";
import Log from "./views/log";
import PageNotFound from "./views/pageNotFound";
import ConfigPerformanceAlarm from "./views/configPerformanceAlarm";
import ConfigProvince from "./views/configProvince";
import ConfigArea from "./views/configArea";
import Loading from "./components/Loading";

const PublicRoute = ({
  component: Component,
  authUser,
  setIsLoading,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !authUser ? (
          <Component {...props} setIsLoading={setIsLoading} />
        ) : (
          <Redirect
            to={{
              pathname: "/dashboard/summary",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const PrivateRoute = ({
  component: Component,
  authUser,
  setIsLoading,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authUser ? (
          <Component {...props} setIsLoading={setIsLoading} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

function App() {
  const { isAuthenticated, setIsLoading } = useContext(AuthenContext);
  return (
    <Router>
      <Loading />
      <Switch>
        <Redirect exact from="/" to="/login" />
        <PublicRoute
          path="/login"
          authUser={isAuthenticated}
          component={Login}
          setIsLoading={setIsLoading}
        />
        <PrivateRoute
          path="/dashboard/summary"
          authUser={isAuthenticated}
          component={SummaryDashboard}
        />
        <PrivateRoute
          path="/dashboard/alarm"
          authUser={isAuthenticated}
          component={AlarmDashboard}
        />
        <PrivateRoute
          path="/dashboard/report"
          authUser={isAuthenticated}
          component={ReportDashboard}
        />
        <PrivateRoute
          path="/dashboard/monthlyProduction"
          authUser={isAuthenticated}
          component={MonthlyProduction}
        />
        <Redirect exact from="/dashboard" to="/dashboard/summary" />
        <Redirect exact from="/config" to="/config/web" />
        <PrivateRoute
          path="/config/web"
          authUser={isAuthenticated}
          component={ConfigWeb}
        />
        <PrivateRoute
          path="/config/performanceAlarm"
          authUser={isAuthenticated}
          component={ConfigPerformanceAlarm}
          setIsLoading={setIsLoading}
        />
        <PrivateRoute
          path="/config/province"
          authUser={isAuthenticated}
          component={ConfigProvince}
          setIsLoading={setIsLoading}
        />
        <PrivateRoute
          path="/config/area"
          authUser={isAuthenticated}
          component={ConfigArea}
          setIsLoading={setIsLoading}
        />
        <PrivateRoute
          path="/log"
          authUser={isAuthenticated}
          component={Log}
          setIsLoading={setIsLoading}
        />
        <Route key="404" path="/404" render={(props) => <PageNotFound />} />
        <Redirect from="*" to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
