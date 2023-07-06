import { Card, Table, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { getErrorLog } from '../../services/data';
import moment from 'moment';

const colums = [
  {
      title: '_id',
      key: '_id',
      align: 'center', 
      render: (r, v) => {
        return r._id
      }
  },
  {
      title:'appId',
      dataIndex:'appId',
      width: 120,
      align: 'center',
  },
  {
      title: 'userId',
      key: 'userId',
      width: 120,
      align: 'center',
      render: (r, v) => {
        return r.userId
      }
  },
  {
      title:'页面',
      dataIndex:'currentPage',
      align: 'center',
  },
  {
      title:'报错信息',
      dataIndex:'errMsg',
      align: 'center',
  },
  {
    title:'错误类型',
    dataIndex:'errorType',
    align: 'center',
    width: 120,
  },
  {
    title:'ua',
    dataIndex:'ua',
    align: 'center',
  },
  {
    title:'时间',
    dataIndex:'createTime',
    align: 'center',
    width: 140,
    render: v => {
      return moment(v).format('YYYY-MM-DD HH:mm:ss')
    }
  }
];

function Index() {
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getData(1);
  }, []);

  const getData = (page) => {
    getErrorLog(page).then(data => {
      setList(data?.data);
      setTotal(data?.total);
    })
  }

  return (
    <Card 
      title="错误日志" 
      extra={
        <Button type='primary' onClick={() => getData(1)}>刷新</Button>
      }
    >
      <Table
        rowKey="_id" 
        columns={colums} 
        pagination={{ pageSize: 10, total }}
        onChange={(page) => {
          getData(page.current);
        }}
        scroll={{x: 1600}}
        bordered 
        dataSource={list}
      />
    </Card>
  );
}


export default Index;
