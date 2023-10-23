import AppLayout from "../layout/AppLayout";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Paper from "../components/Paper";

const brandList = [
  {
    name: "Growatt",
    imgUrl:
      "https://raw.githubusercontent.com/PLCHome/growatt/HEAD/docs/glogo.png",
    url: "https://server.growatt.com/login",
  },
  {
    name: "KStar",
    imgUrl: "https://www.simba.com.ng/wp-content/uploads/2020/05/Asset-1.png",
    url: "https://solar.kstar.com/",
  },
  {
    name: "INVT",
    imgUrl: [
      "https://www.invt.com/Public/Home/default/images/logo.png",
      "https://solar-thailand.com/pic/logo-ipanda.png",
    ],
    url: "https://pro.solarmanpv.com/login",
  },
  {
    name: "HUAWEI",
    imgUrl:
      "https://www.huawei.com/-/media/corporate/images/home/logo/new-logo.png",
    url: "https://sg5.fusionsolar.huawei.com/",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
  },
  brandLogoImage: {
    maxWidth: "200px",
    maxHeight: "160px",
    width: "auto",
    height: "auto",
  },
  brandLogoImageContainer: {
    transition: "all 300ms",
    minHeight: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    backgroundColor: "white",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer",
      // transform: 'scale(1.2, 1.2)',
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    },
  },
  spareSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "15px",
  },
  huaweiSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const ConfigWeb = () => {
  const classes = useStyles();
  const renderBrandLogo = (brand) => {
    switch (brand.name) {
      case "INVT": {
        return (
          <div className={classes.spareSection}>
            {brand.imgUrl.map((item, index) => (
              <img
                key={`${brand.name}-${index}`}
                className={classes.brandLogoImage}
                src={item}
                style={{ width: "60%" }}
                alt={`logo-${index}`}
              />
            ))}
          </div>
        );
      }
      case "HUAWEI": {
        return (
          <div className={classes.huaweiSection}>
            <img
              className={classes.brandLogoImage}
              src={brand.imgUrl}
              alt={`logo-${brand.name}`}
              style={{ width: "70%" }}
            />
          </div>
        );
      }
      default:
        return (
          <img
            className={classes.brandLogoImage}
            src={brand.imgUrl}
            alt={`logo-${brand.name}`}
          />
        );
    }
  };
  return (
    <AppLayout>
      <Paper title="Inverter Web Portal">
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {brandList.map((brand, index) => {
            return (
              <Grid key={index} item xs={12} sm={8} md={3} lg={3}>
                <div
                  className={classes.brandLogoImageContainer}
                  onClick={() => window.open(brand.url)}
                >
                  {renderBrandLogo(brand)}
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </AppLayout>
  );
};

export default ConfigWeb;
