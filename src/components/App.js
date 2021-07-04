import React from "react";
import { Layout, Input } from "antd";
import logo from "../logo.svg";
import { SearchBar } from "./SearchBar";
const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <React.Fragment>
      <Layout className="i-layout">
        <Sider className="sider">Sider</Sider>
        <Layout>
          <Header className="header">Aungline Store</Header>
          <Content className="content">
            <SearchBar />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </React.Fragment>
  );
}

export default App;
