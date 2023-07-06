import { Card, Table, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { getUserAction } from '../../services/data';
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
        width: 120,
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
        title: '行为类型',
        key: 'actionType',
        width: 120,
        align: 'center',
        render: (r, v) => {
            return r.actionType
        }
    },
    {
        title:'页面',
        dataIndex:'currentPage',
        align: 'center',
    },
    {
        title:'上报数据',
        dataIndex:'data',
        align: 'center',
    },
    {
        title:'ua',
        dataIndex:'ua',
        align: 'center',
    },
    {
        title:'时间',
        dataIndex:'createTime',
        width: 140,
        align: 'center',
        render: v => {
            return moment(v).format('YYYY-MM-DD HH:mm:ss')
        }
    }
];

function Index(){
    const [list, setList] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        getData(1);
    }, []);

    const getData = (page) => {
        getUserAction(page).then(data => {
            setList(data?.data);
            setTotal(data?.total);
        })
    }

    return (
        <Card 
            title="埋点数据"
            extra={
                <Button type='primary' onClick={() => getData(1)}>刷新</Button>
            }
        >
            <Table 
                rowKey="_id" 
                columns={colums} 
                scroll={{x: 1600}}
                pagination={{ pageSize: 10, total }}
                onChange={(page) => {
                  getData(page.current);
                }}
                bordered 
                dataSource={list}
            />
        </Card>
    );
    }


export default Index;
