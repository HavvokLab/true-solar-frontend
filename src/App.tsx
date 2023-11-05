import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import Routes from "./routes";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";

const client = new QueryClient();

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <MantineProvider
          theme={theme}
          withCSSVariables
          withGlobalStyles
          withNormalizeCSS
        >
          <ModalsProvider>
            <Routes />
            <Notifications position="top-right" />
          </ModalsProvider>
        </MantineProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
