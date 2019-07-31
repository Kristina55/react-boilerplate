import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import A from './A';

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  background-color: #ffc107;
  letter-spacing: 1px;
`;

const NavHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.6rem;
  font-family: 'Raleway', sans-serif;
  letter-spacing: 2px;
  span {
    color: white;
    text-decoration: none;
    &:hover {
      color: black;
    }
`;

const Links = styled.div`
  font-size: 1.2rem;
  a {
    padding-right: 25px;
    color: white;
    text-decoration: none;
    &:hover {
      color: black;
    }
  }
`;

function Header() {
  return (
    <div>
      <NavBar>
        <NavHeader>
          <A href="/">
            <span>Positively</span>
          </A>
        </NavHeader>
        <Links>
          <NavLink to="/">Motivational Quotes</NavLink>
          <NavLink to="/add">Add Quote</NavLink>
        </Links>
      </NavBar>
    </div>
  );
}

export default Header;
