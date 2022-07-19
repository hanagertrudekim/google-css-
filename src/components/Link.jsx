import React from "react";
import * as S from "./Link.style";

export default function Link() {
  const linksName = [
    "Google",
    "Naver",
    "youtube",
    "GitHub",
    "Koreatech",
    "Code",
    "Daum",
    "Netflix",
    "NomadCoder",
  ];
  let width = 680;
  let num = linksName.length;
  if (num > 5) {
    width = (num / 2) * 140;
  }

  return (
    <S.Container>
      <S.LinkWrap width={width}>
        {linksName.map((name) => (
          <S.LinkBox>
            <S.ShowMore>⁝</S.ShowMore>
            <S.Links>
              <S.LinkImg />
              <S.LinkName>{name}</S.LinkName>
            </S.Links>
          </S.LinkBox>
        ))}
      </S.LinkWrap>
    </S.Container>
  );
}
