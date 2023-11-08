import { useExpiredLocalStorage, useTokenLocalStorage } from "@/hooks";
import { authState, kibanaCredentialState } from "@/store";
import {
  Button,
  Group,
  Image,
  Navbar as MavBar,
  ScrollArea,
  Stack,
  createStyles,
  rem,
} from "@mantine/core";
import { IconDeviceDesktopAnalytics, IconServerCog } from "@tabler/icons-react";
import { useResetRecoilState } from "recoil";
import { LinksGroup } from "./NavbarLinkGroup";

const data = [
  {
    label: "Dashboard",
    icon: IconDeviceDesktopAnalytics,
    link: "/dashboard/summary",
    initiallyOpened: true,
    links: [
      { label: "Summary", link: "/dashboard/summary" },
      { label: "Performance Alarm", link: "/dashboard/performance-alarm" },
      { label: "Report", link: "/dashboard/report" },
      { label: "Daily Production", link: "/dashboard/daily-production" },
      { label: "Monthly Production", link: "/dashboard/monthly-production" },
    ],
  },
  {
    label: "Configuration",
    icon: IconServerCog,
    initiallyOpened: true,
    link: "/dashboard/config/performance-alarm",
    links: [
      { label: "Performance Alarm", link: "/dashboard/config/performance-alarm" },
      { label: "Huawei", link: "/dashboard/config/huawei" },
      { label: "KStar", link: "/dashboard/config/kstar" },
      { label: "Solarman", link: "/dashboard/config/solarman" },
      { label: "Growatt", link: "/dashboard/config/growatt" },
      { label: "Province", link: "/dashboard/config/province" },
      { label: "Area", link: "/dashboard/config/area" },
    ],
  },
];

const Navbar = () => {
  const { classes } = useStyles();
  const resetAuth = useResetRecoilState(authState);
  const resetKibanaCredential = useResetRecoilState(kibanaCredentialState);
  const [_token, _setToken, resetToken] = useTokenLocalStorage();
  const [_expiredAt, _setExpiredAt, resetExpiredAt] = useExpiredLocalStorage();

  const handleLogout = () => {
    resetKibanaCredential();
    resetAuth();
    resetExpiredAt();
    resetToken();
  };

  const links = data.map((item) => (
    <LinksGroup
      {...item}
      key={item.label}
    />
  ));

  return (
    <MavBar
      height="100%"
      width={{ sm: 300 }}
      p="md"
      className={classes.navbar}
    >
      <MavBar.Section className={classes.header}>
        <Group position="center">
          <Image
            src="/true-logo.png"
            alt="true-logo"
            width={86}
          />
        </Group>
      </MavBar.Section>

      <MavBar.Section
        grow
        className={classes.links}
        component={ScrollArea}
      >
        <div className={classes.linksInner}>{links}</div>
      </MavBar.Section>

      <MavBar.Section className={classes.footer}>
        <Stack
          px="xs"
          pt="sm"
        >
          <Button
            color="red"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Stack>
      </MavBar.Section>
    </MavBar>
  );
};

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.xs,
    paddingTop: 0,
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export default Navbar;
