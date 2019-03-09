import React from 'react';
import { Button } from 'reactstrap';
import Section from '../elements/Section';
import LeftBlock from '../elements/LeftBlock';
import H1 from '../elements/H1';
import H4 from '../elements/H4';

export default () => (
  <Section full main>

    <LeftBlock>
      <H1>Successful selling page?</H1>
      <H4>Full range of services to develop a successful site</H4>
      <div>
        <Button color='danger'>To order a site</Button>
        <Button outline>More details</Button>
      </div>
    </LeftBlock>
  </Section>
);
