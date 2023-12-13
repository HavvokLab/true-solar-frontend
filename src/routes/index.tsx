import { getKibanaCredentialAPI } from "@/api";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { useExpiredLocalStorage } from "@/hooks";
import AuthPage from "@/pages/auth";
import AreaConfigPage from "@/pages/config/area";
import GrowattConfigPage from "@/pages/config/growatt";
import HuaweiConfigPage from "@/pages/config/huawei";
import KstarConfigPage from "@/pages/config/kstar";
import PerformanceAlarmConfigPage from "@/pages/config/performance-alarm";
import ProvinceConfigPage from "@/pages/config/province";
import SolarmanConfigPage from "@/pages/config/solarman";
import AlarmPage from "@/pages/dashboard/alarm";
import DailyProductionPage from "@/pages/dashboard/daily-production";
import DataMonitoringPage from "@/pages/dashboard/data-monitoring";
import MonthlyProductionPage from "@/pages/dashboard/monthly-production";
import PerformanceAlarmPage from "@/pages/dashboard/performance-alarm";
import PlantPage from "@/pages/dashboard/plant";
import ReportPage from "@/pages/dashboard/report";
import SummaryPage from "@/pages/dashboard/summary";
import NotFoundPage from "@/pages/not-found";
import VendorPage from "@/pages/vendor";
import { authState } from "@/store";
import { notifications } from "@mantine/notifications";
import axios, { AxiosRequestConfig } from "axios";
import { useEffect } from "react";
import {
  Navigate,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { useRecoilState } from "recoil";

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
  const [expired] = useExpiredLocalStorage();

  const autoLogin = () => {
    if (!expired) return;

    const expiredTime = new Date(expired).getTime();
    if (Date.now() >= expiredTime) return;

    try {
      getKibanaCredentialAPI()
        .then(async ({ data }) => {
          const kibanaResult = data.result;
          if (data.success && kibanaResult) {
            const config: AxiosRequestConfig = {
              baseURL: "https://truesolar.truecorp.co.th",
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
                  username: kibanaResult.username,
                  password: kibanaResult.password,
                },
              },
            };

            await axios.request(config);
            setAuth(true);
          }
        })
        .catch(() => {
          notifications.show({
            title: "Failure",
            message: "Login failed, please sign in again.",
            color: "red",
          });
        });
    } catch (err) {
      notifications.show({
        title: "Failure",
        message: "Login failed, please sign in again.",
        color: "red",
      });
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    autoLogin();
    return () => controller.abort();
  }, [expired]);

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
            path="daily-production"
            element={<DailyProductionPage />}
          />

          <Route
            path="monthly-production"
            element={<MonthlyProductionPage />}
          />

          <Route
            path="data-monitoring"
            element={<DataMonitoringPage />}
          />

          <Route
            path="alarm"
            element={<AlarmPage />}
          />

          <Route
            path="plants"
            element={<PlantPage />}
          />

          <Route
            path="vendors"
            element={<VendorPage />}
          />

          <Route
            path="config"
            element={<Outlet />}
          >
            <Route
              path="performance-alarm"
              element={<PerformanceAlarmConfigPage />}
            />

            <Route
              path="huawei"
              element={<HuaweiConfigPage />}
            />

            <Route
              path="kstar"
              element={<KstarConfigPage />}
            />

            <Route
              path="solarman"
              element={<SolarmanConfigPage />}
            />

            <Route
              path="growatt"
              element={<GrowattConfigPage />}
            />

            <Route
              path="province"
              element={<ProvinceConfigPage />}
            />

            <Route
              path="area"
              element={<AreaConfigPage />}
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

        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default Routes;
