import React from 'react';
import styled from 'styled-components/macro';
import Player from '../../components/player/Player';
import NavBar from '../../components/nav-bar/NavBar';
import Devices from '../../consts/Devices';

const HeaderContainer = (props) => {
  return (
    <React.Fragment>
      <NavBar />
    </React.Fragment>
  );
};

export default HeaderContainer;
