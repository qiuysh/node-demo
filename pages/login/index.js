import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { login } from '../../services';
import Router from 'next/router';
import './style.less';

class LoginForm extends React.Component {

  async fetchData(params) {
    const { result, result_message } = await login(params);
    if (!result) {
      return message.error(result_message);
    }
    Router.push('/dashboard')
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        return console.log('Received values of form: ', values);
      }
      this.fetchData(values)
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-wrapper">
        <div className="login-form">
          <h1>橘猫</h1>
          <Form>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入用户账号!' }],
              })(
                <Input
                  size="large"
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="用户"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入用户密码!' }],
              })(
                <Input
                  size="large"
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="密码"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {/* {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>记住我</Checkbox>)} */}
              <Checkbox>记住我</Checkbox>
              <Button type="primary" 
                size="large"
                onClick={this.handleSubmit} 
                className="login-form-button"
              >
                登&nbsp;录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

LoginForm = Form.create()(LoginForm);

export default LoginForm; 
