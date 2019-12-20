import { Layout, Menu, Icon } from 'antd';
import Link from 'next/link';
const { Sider } = Layout;

export default ({collapsed, activeKey, handleNavClick}) => {
  console.log(activeKey)
  return (
    <Sider trigger={null} 
      collapsible 
      collapsed={collapsed}
    >
      <div className="logo" />
      <Menu theme="dark" 
        onClick={handleNavClick}
        mode="inline" 
        selectedKeys={[activeKey]}
      >
        <Menu.Item key="dashboard">
          <Icon type="dashboard" />
          <span>仪表盘</span>
        </Menu.Item>
        <Menu.Item key="list">
          <Icon type="table" />
          <span>列表</span>
        </Menu.Item>
        <Menu.Item key="form">
          <Icon type="project" />
          <span>表单</span>
        </Menu.Item>
      </Menu>
      <style jsx>{`
        .logo {
          height: 32px;
          background: rgba(255, 255, 255, 0.2);
          margin: 16px;
        }
      `}</style>
    </Sider>
  )
}