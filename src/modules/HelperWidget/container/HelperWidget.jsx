import React from 'react';
import Tabs from '../components/Tabs';
import LiveChat from '../components/LiveChat';
import FAQ from '../components/FAQ';
import Mail from '../components/Mail';
import StyledWidget from './Widget.styled';

const HelperWidgetContainer = () => (
  <StyledWidget>
    <Tabs>
      <div label="Live Chat">
        <LiveChat />
      </div>
      <div label="FAQ">
        <FAQ />
      </div>
      <div label="Mail Us">
        <Mail />
      </div>
    </Tabs>
  </StyledWidget>
);

export default HelperWidgetContainer;
