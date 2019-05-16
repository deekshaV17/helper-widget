import React from 'react';
import styled from 'styled-components';

const StyledLoading = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = () => <StyledLoading>Loading...</StyledLoading>;

export default Loading;
