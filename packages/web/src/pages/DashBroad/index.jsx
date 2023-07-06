import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Statistic, Icon, Button } from "antd";
import { getPvUv } from "../../services/data";

const Index = () => {
    const [uv, setUv] = useState(0);

    useEffect(() => {
        handleFetch();
    }, []);

    const handleFetch = () => {
        getPvUv().then((data) => {
            const { uv } = data;
            setUv(uv);
        })
    }

    return (
        <div>
            <Card 
                title="数据汇总" 
                bordered={false} 
                extra={
                    <Button type='primary' onClick={() => handleFetch()}>刷新</Button>
                }
            >
                <Row gutter={8}>
                <Col span={12}>
                    <Card title="UV">
                    <Statistic
                        title="UV"
                        value={uv}
                        prefix={<Icon type="arrow-up" />}
                    />
                    </Card>
                </Col>
                </Row>
            </Card>
        </div>
    );
}

export default Index;
