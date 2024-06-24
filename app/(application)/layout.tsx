import Header from "@/components/header";
import BackgroundSvg from "@/components/UI/background-svg";

const ApplicationLayout = function ({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BackgroundSvg />
      <Header />
      {children}
    </>
  );
};

export default ApplicationLayout;
