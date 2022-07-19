import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 40px;
  display: flex;
  place-content: center;
  place-items: center;
`;

const LinkWrap = styled.div`
  width: 620px;
  display: flex;
  place-content: center;
  place-items: center;
  flex-wrap: wrap;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  row-gap: 15px;
`;

const LinkImg = styled.div`
  background: #eae7e7;
  width: 48px;
  height: 48px;
  border-radius: 100%;
`;

const LinkName = styled.div`
  font-family: sans-serif;
  font-size: small;
`;

const ShowMore = styled.div`
  display: absolute;
  width: 22px;
  height: 22px;
  text-align: center;
  border-radius: 100%;
  right: 20px;
  &:hover {
    cursor: pointer;
    background: #bab8b8;
  }
`;

const LinkBox = styled.div`
  padding: 5px;
  width: 110px;
  height: 110px;
  &:hover {
    cursor: pointer;
    background: #e2dfdf;
  }
  position: relative;
`;

export default function Link() {
  const linksName = [
    "Google",
    "Naver",
    "youtube",
    "GitHub",
    "Koreatech",
    "Code",
    "Daum",
    "Blog",
    "NomadCoder",
    "Netflix",
  ];
  return (
    <Container>
      <LinkWrap>
        {linksName.map((name) => (
          <LinkBox>
            <ShowMore>⁝</ShowMore>
            <Links>
              <LinkImg />
              <LinkName>{name}</LinkName>
            </Links>
          </LinkBox>
        ))}
      </LinkWrap>
    </Container>
  );
}
