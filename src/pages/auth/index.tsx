import { loginAPI } from "@/api";
import { useExpiredLocalStorage, useTokenLocalStorage } from "@/hooks";
import { authState } from "@/store";
import { LoginRequest } from "@/types";
import {
  Button,
  Center,
  Container,
  Image,
  Paper,
  PasswordInput,
  Stack,
  TextInput,
  Title,
  createStyles,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMutation } from "react-query";
import { useSetRecoilState } from "recoil";

const AuthPage = () => {
  const { classes } = useStyles();
  const setAuth = useSetRecoilState(authState)
  const [_token, setToken] = useTokenLocalStorage();
  const [_expiredAt, setExpiredAt] = useExpiredLocalStorage();
  const form = useForm<LoginRequest>({
    validate: {
      username: (value) => (!value ? "Username is required" : undefined),
      password: (value) => (!value ? "Password is required" : undefined),
    },
  });

  const { mutateAsync, isLoading } = useMutation(loginAPI, {
    onSuccess: ({ data }) => {
      const result = data.result
      if (data.success && result) {
        setToken(result.access_token);
        setExpiredAt(result.expired_at);
        setAuth(true)
      }
    },
  });

  const onSubmit = async (fields: LoginRequest) => await mutateAsync(fields);

  return (
    <Container h="100vh">
      <Center h="100%">
        <Paper
          shadow="md"
          withBorder
          w="100%"
          maw={500}
        >
          <Stack
            justify="center"
            align="Center"
            px="md"
            py="xl"
          >
            <Stack
              align="center"
              justify="center"
              spacing={0}
            >
              <Image
                src="/true-logo.png"
                alt="true-logo"
              />

              <Title
                align="center"
                color="dimmed"
              >
                True Solar Monitoring
              </Title>
            </Stack>

            <form
              className={classes.form}
              onSubmit={form.onSubmit(onSubmit)}
            >
              <Stack>
                <TextInput
                  label="Username"
                  placeholder="Admin"
                  {...form.getInputProps("username")}
                />

                <PasswordInput
                  label="Password"
                  placeholder="************"
                  {...form.getInputProps("password")}
                />

                <Button
                  type="submit"
                  loading={isLoading}
                >
                  Login
                </Button>
              </Stack>
            </form>
          </Stack>
        </Paper>
      </Center>
    </Container>
  );
};

const useStyles = createStyles(() => ({
  form: {
    width: "100%",
  },
  title: {},
}));

export default AuthPage;
