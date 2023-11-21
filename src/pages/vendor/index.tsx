import {
  Box,
  Divider,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Title,
  createStyles,
} from "@mantine/core";

const brandList = [
  {
    name: "Growatt",
    imgUrl: "https://raw.githubusercontent.com/PLCHome/growatt/HEAD/docs/glogo.png",
    url: "https://server.growatt.com/login",
  },
  {
    name: "KStar",
    imgUrl: "https://www.simba.com.ng/wp-content/uploads/2020/05/Asset-1.png",
    url: "https://solar.kstar.com/",
  },
  {
    name: "INVT",
    imgUrl: "https://www.invt.com/Public/Home/default/images/logo.png",
    url: "https://pro.solarmanpv.com/login",
  },
  {
    name: "HUAWEI",
    imgUrl: "https://www.huawei.com/-/media/corporate/images/home/logo/new-logo.png",
    url: "https://sg5.fusionsolar.huawei.com/",
  },
];

const VendorPage = () => {
  const { classes } = useStyles();

  return (
    <Paper
      w="100%"
      shadow="md"
      withBorder
    >
      <Stack spacing={0}>
        <Group
          px="md"
          py="sm"
          position="apart"
          align="center"
        >
          <Title fw={700}>Vendors</Title>
        </Group>

        <Divider />

        <SimpleGrid
          cols={4}
          spacing="sm"
          px="sm"
          py="md"
        >
          {brandList.map((item, key) => (
            <Paper
              key={key}
              shadow="md"
              p="md"
              className={classes.wrap}
              onClick={() => {
                window.open(item.url, "_blank");
              }}
            >
              <Stack
                h="100%"
                align="center"
                justify="end"
              >
                <Box className={classes.imgBox}>
                  <Image
                    src={item.imgUrl}
                    width="100%"
                  />
                </Box>

                <Title fz="xl">{item.name}</Title>
              </Stack>
            </Paper>
          ))}
        </SimpleGrid>
      </Stack>
    </Paper>
  );
};

const useStyles = createStyles(() => ({
  wrap: {
    userSelect: "none",
    cursor: "pointer",
  },
  imgBox: {
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
}));

export default VendorPage;
