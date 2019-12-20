import { Layout, Icon } from 'antd';
import RightBar from './rightBar';
const { Header } = Layout;


export default ({ collapsed, toggle }) => (
  <Header className="clearfix" style={{ background: '#fff', padding: '0 16px' }}>
    <Icon
      className="trigger"
      type={collapsed ? 'menu-unfold' : 'menu-fold'}
      onClick={toggle}
    />
    <RightBar className="fr" />
  </Header>
)