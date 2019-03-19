import React from 'react';
import styled from 'styled-components';
import { bp } from '../../styles/theme';
import { GlobalStyle } from "../../styles/global";
import Dogs from '../dogs';

const Container = () => {
  return (
    <Main className="gds-layout__container">
      <GlobalStyle/>
      <Dogs/>
    </Main>
  );
};

const Main = styled.main`
  padding: 45px 0;
  
  ${bp.tablet`
    padding: 90px 0;
  `}
`;

export default Container;
