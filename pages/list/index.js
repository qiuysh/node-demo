import React, { useState, useEffect } from "react";
import BaseLayout from '../../components/base'
import { Table, message, PageHeader } from 'antd';
import { getUsers } from '../../services';

const initialState = {
  params: {
    page: 1,
    size: 20
  },
  data: {}
};

const columns = [
  {
    title: '账号',
    dataIndex: 'name',
    key: 'id'
  },
  {
    title: '昵称',
    dataIndex: 'nick',
  },
  {
    title: '手机',
    dataIndex: 'phone',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
  },
  {
    title: '操作',
    width: 120,
    render: (text, record) => {
      return (<div>
        <a>编辑</a>&nbsp;&nbsp;
        <a>删除</a>
      </div>)
    }
  },
];

export default () => {
  
  const [state, setState] = useState(initialState);

  useEffect(() => {
    fetchData()
  }, []);

  async function fetchData() {
    const { params } = state;
    const { result, result_message, data } = await getUsers(params);
    if (!result) {
      message.error(result_message);
    }
    setState({
      data
    })
  }

  const { data={}, params={} } = state;

  const pagination ={
    pageSize: params.size,  
    current: params.page, 
    total: data.count
  };

  return (
    <BaseLayout navKey="list">
      <PageHeader title="表格"
        className="page"
      >
        <Table 
          rowKey="id"
          columns={columns} 
          dataSource={data.rows} 
          pagination={pagination} 
        />
      </PageHeader>
    </BaseLayout>
  )
}



  