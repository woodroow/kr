import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  padding: 0;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;

export default ({ children }) => (
  <Container>
    <Div>
      <Row>
        <Col sm='12' md={{ size: 4, offset: 4 }}>{children}</Col>
      </Row>
    </Div>
  </Container>
);
