import Layout from "./components/Layout";
import "../styles/style.css";
import "../styles/Responsive.css";

function MyApp({ Component, pageProps }) {
      return (
            <Layout>
                  <Component {...pageProps} />
            </Layout>
      );
}

export default MyApp;
