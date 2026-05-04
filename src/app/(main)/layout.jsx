import Navebar from "../../components/shared/Navebar";
import Footer from "../../components/shared/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navebar></Navebar>
      {children}
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
