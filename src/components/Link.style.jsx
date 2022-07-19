import styled from "styled-components";

export const Container = styled.div`
  margin-top: 40px;
  display: flex;
  place-content: center;
  place-items: center;
`;

export const LinkWrap = styled.div`
  width: ${(props) => props.width + "px"};
  display: flex;
  place-content: center;
  place-items: center;
  flex-wrap: wrap;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  row-gap: 15px;
  padding-top: 22px;
`;

export const LinkImg = styled.div`
  background: #eae7e7;
  width: 48px;
  height: 48px;
  border-radius: 100%;
`;

export const LinkName = styled.div`
  font-family: sans-serif;
  font-size: small;
`;

export const ShowMore = styled.div`
  position: absolute;
  display: none;
  width: 22px;
  height: 22px;
  text-align: center;
  border-radius: 100%;
  right: 4px;
  transition: 1s;
  &:hover {
    color: black;
    cursor: pointer;
    background: #bab8b8;
  }
`;

export const LinkBox = styled.div`
  padding: 5px;
  width: 110px;
  height: 110px;
  &:hover {
    cursor: pointer;
    background: #e2dfdf;
    ${ShowMore} {
      display: block;
    }
  }
  position: relative;
`;
