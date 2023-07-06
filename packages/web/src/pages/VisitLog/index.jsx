import { Card, Table, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { getVisitLog } from '../../services/data';
import moment from 'moment';

const colums=[
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
    align: 'center',
    width: 120
  },
  {
    title: 'userId',
    key: 'userId',
    align: 'center',
    width: 120,
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
    title:'停留时间(s)',
    dataIndex:'stayTime',
    align: 'center',
    render: (v) => {
      return v && v / 1000
    }
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
    getVisitLog(page).then(data => {
      setList(data?.data);
      setTotal(data?.total);
    })
  }

  return (
    <Card title="访问日志" extra={<Button type='primary' onClick={() => getData(1)}>刷新</Button>}>
      <Table 
        columns={colums} 
        bordered 
        pagination={{ pageSize: 10, total }}
        onChange={(page) => {
          getData(page.current);
        }}
        scroll={{x: 1600}}
        dataSource={list}
      />
    </Card>
  );
}

export default Index;
