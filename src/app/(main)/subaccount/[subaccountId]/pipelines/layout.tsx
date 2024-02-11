import Blurpage from "@/components/global/blur-page";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <Blurpage>{children}</Blurpage>;
};

export default Layout;
