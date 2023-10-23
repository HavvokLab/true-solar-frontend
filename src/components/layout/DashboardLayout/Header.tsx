import { Image, Paper } from "@mantine/core";

const Header = () => {
  return (
    <Paper
      px="md"
      py="xs"
      withBorder
      radius={0}
    >
      <Image
        src="/true-logo.png"
        alt="true-logo"
        width={84}
      />
    </Paper>
  );
};

export default Header;
