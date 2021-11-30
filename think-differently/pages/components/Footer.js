import { Dropdown, Row, Col } from "antd"

export const Footer = () => {
      return (

            <Row>
                  <Col xs={2} sm={4} md={6} lg={8} xl={12}>
                        <form>
                              <input></input>
                              <Dropdown></Dropdown>
                              <input></input>
                              <input></input>
                              <Button>Send Message </Button>
                        </form>
                  </Col>
                  <Col xs={2} sm={4} md={6} lg={8} xl={12}>
                        <Link>Home</Link>
                        <Link>Our Process </Link>
                        <Link>About Us </Link>
                        <Link>Blog</Link>
                        <Divider />
                        <div>
                              <h1>Contact Details <h1>
                                    <div>
                                          <p>
                                                021431990</p>
                                          <p>irfan.rza65@gmail.com</p>
                                          <address>
                                                Suite A, 1st Floor, Building 6, 331 Rosedale road
                                                Albany, Auckland 0632, New Zealand
                                          </address>
                                    </div>
                              </div>
                                    <div>
                                          <p>
                                                © 2021 Think Differently, All right Reserved
                                          </p>
                                    </div>
                              </Col>
                        </Row>
                        );
                        
}

