import BaseLayout from '../../components/base';
import { Card, Col, Row, Statistic, Icon } from 'antd';
const { Countdown } = Statistic;

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

function onFinish() {
  console.log('finished!');
}

export default () => (
  <BaseLayout navKey="dashboard">
    <Row gutter={16}>
      <Col span={6}>
        <Card bordered={false}>
          <Statistic
            title="销售额"
            value={51.28}
            precision={2}
            valueStyle={{ color: '#fe0000' }}
            prefix={<Icon type="like" />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card bordered={false}>
          <Statistic
            title="pv"
            value={12.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<Icon type="arrow-up" />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card bordered={false}>
          <Statistic
            title="uv"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f2600' }}
            prefix={<Icon type="arrow-up" />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card bordered={false}>
          <Countdown title="倒计时" 
            value={deadline} 
            onFinish={onFinish} 
          />
        </Card>
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={24}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={12}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={12}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
    <style jsx global>{`
      .ant-row {
        margin-bottom: 16px;
      }
    `}</style>
  </BaseLayout>
)

