import React from "react";
import styled from "styled-components";

const HeaderWrap = styled.div`
  display: grid;
  grid-template-columns: 17fr 1fr 1fr 1fr 1fr;
  height: 47px;
  place-items: center;
  padding: 8px;
`;

const HeaderMenu = styled.a`
  font-size: 13px;
  font-family: sans-serif;
  text-decoration: none;
  color: rgb(102 99 99);
`;

const Profile = styled.div`
  background: #6262b2;
  height: 30px;
  width: 30px;
  border-radius: 100%;
  display: flex;
  place-items: center;
  place-content: center;
  font-family: sans-serif;
  color: white;
`;

export default function Header() {
  return (
    <HeaderWrap>
      <div />
      <HeaderMenu href="#">Gmail</HeaderMenu>
      <HeaderMenu href="#">image</HeaderMenu>
      <HeaderMenu href="#">App</HeaderMenu>
      <Profile>
        <div>H</div>
      </Profile>
    </HeaderWrap>
  );
}
