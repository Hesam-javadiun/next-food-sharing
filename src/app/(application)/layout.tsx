import Header from "@/src/components/header";
import BackgroundSvg from "@/src/components/UI/background-svg";

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
