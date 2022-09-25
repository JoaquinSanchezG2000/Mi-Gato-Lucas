import Navbar from "../../components/Navbar";
import Carrusel from "../../components/Carrusel";
import Footer from "../../components/Footer";
import Catalogo from "../../components/Catalogo";
import Layout from "../../components/Wrappers/Layout";

const index = () => {
  return (
    <Layout>
      <Carrusel />
      <Catalogo />
    </Layout>
  );
};
export default index;
