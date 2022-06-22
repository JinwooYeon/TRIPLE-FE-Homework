import styled from "styled-components";

export default function ContentLogo() {
  return (
    <>
      {/* 좌측 이미지 */}
      <ContentLogoItem>2019년 2월 기준</ContentLogoItem>
    </>
  );
}

// styled-components
const ContentLogoItem = styled.div`
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  background-size: 400px 338px;
  padding-top: 280px;
  font-size: 15px;
  box-sizing: border-box;
  background-image: url("/triple2x.png");
  background-repeat: no-repeat;
  text-align: center;
  font-family: sans-serif;
  color: rgba(58, 58, 58, 0.7);
`;
