import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import axios from "axios";

import AuthenContext from "../utils/useAuthentication";
import logoImg from "../assets/images/true-logo.png";
import { useForm, Form } from "../components/useForm";
import Controls from "../components/controls/Controls";
import { api } from "../services";
import { failedOnLoginDialog } from "../utils/dialog";

const initialFValues = {
  username: "",
  password: "",
};

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.bgColor,
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    padding: "20px 20px 30px 20px",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: theme.palette.white,
    [theme.breakpoints.up("md")]: {
      padding: "40px 30px 30px 30px",
    },
  },
  logo: {
    margin: "auto",
    width: "50%",
    // padding: "10px 0 20px 0",
    padding: 0,
    [theme.breakpoints.up("sm")]: {
      width: "30%",
    },
    [theme.breakpoints.up("md")]: {
      // padding: "0 0 20px 0",
      // padding: 0,
      width: "50%",
    },
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "15px",
  },
  title: {
    textAlign: "center",
    margin: 0,
    color: "grey",
    fontSize: "18px",
    [theme.breakpoints.up("md")]: {
      fontSize: "24px",
    },
  },
}));
const Login = (props) => {
  const { login: loginFn } = useContext(AuthenContext);
  // console.log(props);
  const classes = useStyles();

  const validate = (fieldValues = values) => {
    // console.log('fieldValues', fieldValues);
    // console.log('values', values);
    let temp = { ...errors };
    if ("username" in fieldValues) {
      temp.username = fieldValues.username
        ? ""
        : "This username field is required.";
    }

    if ("password" in fieldValues) {
      temp.password = fieldValues.password
        ? ""
        : "This password field is required.";
    }

    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const {
    values,
    // setValues,
    errors,
    setErrors,
    handleInputChange,
    // resetForm
  } = useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      props.setIsLoading(true);
      // console.log("SubmitForm", values);
      const options = {
        method: "post",
        url: `${process.env.REACT_APP_API}/login`,
        data: values,
      };
      api(options)
        .then( async(res) => {
          loginFn(res.data);
          const kauth_option = {
            method: "get",
            url: `${process.env.REACT_APP_API}/kibana_auth`,
          };
          const kibana_login_sec_1 = await api(kauth_option)
            .then( async (kibana_res) => {
              const kibana_options = {
                method: "POST",
                url: "/k/internal/security/login",
                withCredentials: true,
                headers: { "Content-Type": "application/json", "kbn-xsrf": "true" },
                data: {
                  providerType: "basic",
                  providerName: "basic",
                  currentURL: "/k/login?next=%2F",
                  params: { username: kibana_res.data.data.username, password: kibana_res.data.data.password },
                },
              };
              const kibana_login_sec_2 = await axios.request(kibana_options);
            })
          props.setIsLoading(false);
          props.history.push("/dashboard");
        })
        .catch((err) => {
          props.setIsLoading(false);
          failedOnLoginDialog();
        });
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <div className={classes.container}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={10} sm={8} md={6} lg={5} xl={4}>
            <div className={classes.content}>
              <div className={classes.titleContainer}>
                <img src={logoImg} alt="logoImg" className={classes.logo} />
                <h2 className={classes.title}>True Solar Cell Monitoring</h2>
              </div>
              <Controls.Input
                name="username"
                label="Username"
                value={values.username}
                onChange={handleInputChange}
                error={errors.username}
              />
              <Controls.InputPassword
                label="Password"
                name="password"
                value={values.password}
                onChange={handleInputChange}
                error={errors.password}
              />
              <Controls.Button type="submit" text="Submit" />
            </div>
          </Grid>
        </Grid>
      </div>
    </Form>
  );
};

export default Login;
