import { Icon, Menu, Dropdown, Avatar, message } from 'antd';
import Router from 'next/router';
import { logout } from '../services';


export default ({ collapsed, toggle }) => (
  <div style={{ display: 'inline-block', float: 'right'}}>
    <Dropdown overlay={(<Menu>
        <Menu.Item>
          <a >
            个人中心
          </a>
        </Menu.Item>
        <Menu.Item>
          <a >
            系统设置
          </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <a onClick={doLogout}>
            退出登录
          </a>
        </Menu.Item>
      </Menu>)}
    >
      <div><Avatar icon="user" />&nbsp;admin</div>
    </Dropdown>
  </div>
)

async function doLogout () {
  const { result, result_message } = await logout();
  if (!result) {
    return message.error(result_message);
  }
  Router.push('/login');
}