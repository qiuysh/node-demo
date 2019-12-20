import React from 'react';
import { Layout } from 'antd';
import Router from 'next/router';
import SiderNav from './siderNav';
import TopNav from './topNav';
const { Content } = Layout;

class BaseLayout extends React.Component {

  state = {
    collapsed: false,
    activeKey: ''
  };

  componentDidMount() {
    const { navKey } = this.props;
    if (navKey) {
      this.setState({
        activeKey: navKey
      });
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  handleNavClick = e => {
    if (e && e.key) {
      this.setState({
        activeKey: e.key
      }, () => {
        Router.push(`/${e.key}`);
      })
    }
  };

  render() {
    const { children } = this.props;
    const { collapsed, activeKey } = this.state;
    return (
      <Layout style={{ height: '100vh'}}>
        <SiderNav 
          collapsed={collapsed} 
          activeKey={activeKey}
          handleNavClick={this.handleNavClick}
        />
        <Layout>
          <TopNav collapsed={collapsed}
            toggle={this.toggle}
          />
          <Content
            style={{
              margin: '24px 16px',
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    )
  }
 }

 export default BaseLayout;