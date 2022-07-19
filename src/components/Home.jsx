import React from "react";
import styled from "styled-components";

const Title = styled.div`
  height: 92px;
  width: 100%;
  font-size: 90px;
  font-family: sans-serif;
  font-weight: 550;
  color: #64819b;
  display: flex;
  place-content: center;
  margin-top: 140px;
  margin-bottom: 65px;
`;

const SearchWrap = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const SearchBar = styled.div`
  width: 570px;
  height: 44px;
  display: grid;
  grid-template-columns: 1fr 470px 1fr;
  text-align: center;
  justify-content: center;
  align-content: center;
  border-radius: 100px;
  padding: 2px;
  box-shadow: 0px 0px 5px #979797;
`;

const SearchInput = styled.input`
  height: 100%;
  padding: 0;
  border: none;
  outline: none;
  font-size: 16px;
`;

export default function Home() {
  return (
    <div>
      <Title>Goolgle</Title>
      <SearchWrap>
        <SearchBar>
          <div>🔍</div>
          <SearchInput placeholder="Search Google or type a URL"></SearchInput>
          <div>🎙️</div>
        </SearchBar>
      </SearchWrap>
    </div>
  );
}
