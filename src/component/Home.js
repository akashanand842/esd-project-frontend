import React from "react"
import {
    Form,
    Input,
    Button,
    Cascader,
    Divider,
    Row,
    Typography,
    Layout,
    message,
    Modal,
  } from "antd";
  const { Title } = Typography;
  const { Header, Content, Footer, Sider } = Layout;

function Home(props)
{
      return(
        <Layout style={{ minHeight: "100vh",display: 'flex',justifyContent: 'center',textAlign:'center',backgroundColor:"white",backgroundRepeat:'no-repeat'}}>
          <Content>
            <div>
              <Row justify="center" align="bottom">
                  <Title className="center_title" level={3} style={{marginTop:'10px',fontSize:'50px'}}>
                      Course Lists
                  </Title>
                  <li> </li>

              </Row>
            </div>
          </Content>
        </Layout>
    );
}
export default Home;
