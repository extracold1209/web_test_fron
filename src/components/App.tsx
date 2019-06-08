// nodejs library that concatenates classes
import classNames from 'classnames';
import React from 'react';

// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Row,
} from 'reactstrap';

class App extends React.Component {
  public render() {
    return (
      <>
        <div className='content'>
          <Row>
            <Col xs='12'>
              <Card>
                <CardHeader>
                  <Row>
                    <Col className='text-left' sm='6'>
                      <h5 className='card-category'>Total Shipments</h5>
                      <CardTitle tag='h2'>Performance</CardTitle>
                    </Col>
                    <Col sm='6'>
                      Card Header Content
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  Hello CardBody
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default App;
