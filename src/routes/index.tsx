import { getKibanaCredentialAPI } from "@/api";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { useExpiredLocalStorage, useTokenLocalStorage } from "@/hooks";
import AuthPage from "@/pages/auth";
import PerformanceAlarmConfigPage from "@/pages/config/performance-alarm";
import PerformanceAlarmPage from "@/pages/dashboard/performance-alarm";
import ReportPage from "@/pages/dashboard/report";
import SummaryPage from "@/pages/dashboard/summary";
import { authState, kibanaCredentialState } from "@/store";
import axios, { AxiosRequestConfig } from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import {
  Navigate,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

interface ICustomRoute {
  auth: boolean;
  redirectPath: string;
  children: JSX.Element;
}

const AuthRoute = ({ auth, redirectPath, children }: ICustomRoute) => {
  if (!auth) {
    return children;
  }

  return (
    <Navigate
      to={redirectPath}
      replace
    />
  );
};

const ProtectRoute = ({ auth, redirectPath, children }: ICustomRoute) => {
  if (auth) {
    return children;
  }

  return (
    <Navigate
      to={redirectPath}
      replace
    />
  );
};

const Routes = () => {
  const [auth, setAuth] = useRecoilState(authState);
  const [kibanaCredential, setKibanaCredential] = useRecoilState(kibanaCredentialState);

  useQuery(["kibana-credential"], getKibanaCredentialAPI, {
    onSuccess: ({ data }) => {
      const result = data.result;
      if (data.success && result) {
        setAuth(true);
        setKibanaCredential(result);
      }
    },
  });

  const kibanaLogin = async () => {
    if (!kibanaCredential) return;

    try {
      const config: AxiosRequestConfig = {
        method: "POST",
        url: "/k/internal/security/login",
        withCredentials: true,
        headers: {
          "kbn-xsrf": "true",
          "Content-Type": "application/json",
        },
        data: {
          providerType: "basic",
          providerName: "basic",
          currentURL: "/k/login?next=%2F",
          params: {
            username: kibanaCredential.username,
            password: kibanaCredential.password,
          },
        },
      };

      await axios.request(config);
    } catch (err) {
      console.error(err);
    }
  };

  console.log("kibanaCredential", kibanaCredential);

  useEffect(() => {
    const controller = new AbortController();
    kibanaLogin();
    return () => controller.abort();
  }, [kibanaCredential]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route
          index
          element={<Navigate to="/login" />}
        />

        <Route
          path="dashboard"
          element={
            <ProtectRoute
              auth={auth}
              redirectPath="/login"
            >
              <DashboardLayout />
            </ProtectRoute>
          }
        >
          <Route
            index
            element={<Navigate to="/dashboard/summary" />}
          />

          <Route
            path="summary"
            element={<SummaryPage />}
          />

          <Route
            path="performance-alarm"
            element={<PerformanceAlarmPage />}
          />

          <Route
            path="report"
            element={<ReportPage />}
          />

          <Route
            path="config"
            element={<Outlet />}
          >
            <Route
              path="performance-alarm"
              element={<PerformanceAlarmConfigPage />}
            />
          </Route>
        </Route>

        <Route
          path="login"
          element={
            <AuthRoute
              auth={auth}
              redirectPath="/dashboard/summary"
            >
              <AuthPage />
            </AuthRoute>
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default Routes;
