import { Row, Col } from 'antd';
import sidebanner from "../../../public/assets/sidebanner.jpg";

export const WhyYouShouldCare = () => {
    return (
        <div style={{ backgroundColor: '#f8f8f8' }}>
            <Row gutter={15}>
                <Col xs={2} sm={4} md={6} lg={8} xl={12}>
                    <Image
                        src={sidebanner.src}
                        preview={false}
                        className='sidebanner'

                    />
                </Col>
                <Col xs={2} sm={4} md={6} lg={8} xl={12}>
                    <h2>
                        Why You Should Care?

                    </h2>
                    <p>
                        Are you happy with your revenue? Are you happy with your profits?
                        Are your people performing to their potential, everyday?
                        Are you happy with your strategy? Are you executing it, relentlessly?
                        Are you comfortable as leader? Do you sleep well?
                        <br></br>

                        If the answer to all of the questions is yes, then don't call me
                    </p>

                </Col>
            </Row>
            <Row gutter={15}>
                <Col xs={2} sm={4} md={6} lg={8} xl={12}>
                    <h1>Our Blogs</h1>
                    <divider />
                    <h2>
                        Turning Around the Fontera Disaster
                    </h2>
                    <p>
                        A topic close to my heart. Infact It should be close to all our hearts. What ever you may think, New Zealand's future is, you can be sure
                    </p>
                </Col>
                <Col xs={2} sm={4} md={6} lg={8} xl={12}>
                    <divider />
                    <h2>
                        Turning Around the Fontera Disaster
                    </h2>
                    <p>
                        A topic close to my heart. Infact It should be close to all our hearts. What ever you may think, New Zealand's future is, you can be sure
                    </p></Col>
                <Col xs={2} sm={4} md={6} lg={8} xl={12}>
                    <divider />
                    <h2>
                        Turning Around the Fontera Disaster
                    </h2>
                    <p>
                        A topic close to my heart. Infact It should be close to all our hearts. What ever you may think, New Zealand's future is, you can be sure
                    </p></Col>
            </Row>

        </div>
    )
}


