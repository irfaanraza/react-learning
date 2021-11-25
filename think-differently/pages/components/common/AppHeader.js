import { Layout, Row, Col } from "antd";

const { Header, Content, Footer } = Layout;

export const AppHeader = () => {
      return (
            <Layout>
                  <Row>
                        <Col>Logo</Col>
                        <Col>Menu </Col>
                  </Row>
            </Layout>
      );
};
