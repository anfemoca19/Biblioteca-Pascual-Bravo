import Header from "../../components/Header/header";
import Layout from "../../components/Layout/Layout";
import Navbar from "../../components/Navbar/navbar";

export default function Home() {
  return (
    <>
      <Header />
      <Layout navBar={<Navbar />}></Layout>
    </>
  );
}
