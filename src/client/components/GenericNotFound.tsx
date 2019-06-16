import { History as ReactRouterHistory } from 'history';
import React from 'react';
import { Button, Container, Jumbotron, Row } from 'reactstrap';

const style = {
    height: 'calc(100vh - 90px - 60px)',
    display: 'flex',
    alignItems: 'center',
};

export default ({ history }: { history: ReactRouterHistory }) => {
    return (
        <div className='content'>
            <Jumbotron className='bg-white' style={style}>
                <Container>
                    <Row>
                        <h1 className='display-3 mx-auto text-dark'>Not Found</h1>
                    </Row>
                    <Row>
                        <Button className='mx-auto' color='success' onClick={() => {
                            history.goBack();
                        }}>
                            Go Back
                </Button>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
    );
};
