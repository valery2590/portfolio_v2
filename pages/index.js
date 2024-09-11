
import InfoTitle from "../components/infoSection/InfoTitle";
import Layout from "../components/layouts/Layout";

// pages/index.js
export default function Home() {

  return (
    <Layout homepage={true}>
      <InfoTitle/>
    </Layout>
  );
}
