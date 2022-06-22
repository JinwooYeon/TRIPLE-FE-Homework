import styled from "styled-components";

export default function Awards() {
  return (
    <>
      {/* 수상 내역 */}
      <AwardItem url="/play-store2x.png">
        2018 구글 플레이스토어<br></br>올해의 앱 최우수상 수상
      </AwardItem>
      <AwardItem url="/badge-apple4x.png">
        2018 애플 앱스토어<br></br>오늘의 여행앱 선정
      </AwardItem>
    </>
  );
}

// styled-components
const AwardItem = styled.div`
  background-size: 54px 54px;
  height: 54px;
  padding: 5px 0px 5px 62px;
  font-size: 14px;
  line-height: 22px;
  margin-right: 39px;
  display: inline-block;
  font-family: sans-serif;
  background-image: ${(props) => `url(${props.url})`};
  background-position: left top;
  background-repeat: no-repeat;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;
`;
