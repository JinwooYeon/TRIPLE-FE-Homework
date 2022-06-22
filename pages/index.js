import styled, { keyframes } from "styled-components";
import Awards from "../components/Awards";
import ContentLogo from "../components/ContentLogo";
import Metrics from "../components/Metrics";

export default function Home() {
  return (
    <>
      <SectionContainer>
        <ResponsiveSection>
          {/* 좌측 이미지 */}
          <ConteneLogoContainer>
            <ContentLogo />
          </ConteneLogoContainer>

          {/* 지표 문구 */}
          <MetricsContainer>
            <Metrics />
          </MetricsContainer>

          {/* 수상 내역 */}
          <AwardsContainer>
            <Awards />
          </AwardsContainer>
        </ResponsiveSection>
      </SectionContainer>
    </>
  );
}

// styled-components
// 영역별 등장 애니메이션
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: none;
  }
`;

// 섹션 컨테이너
const SectionContainer = styled.div`
  min-width: 1200px;
  position: relative;
  overflow: hidden;
  background-image: inherit;
  background-repeat: inherit;
  background-attachment: inherit;
  background-origin: inherit;
  background-clip: inherit;
  background-color: inherit;
  background-size: cover;
  background-position: center center;
`;
// 반응형 섹션
const ResponsiveSection = styled.div`
  width: 1040px;
  height: auto;
  margin: 0px auto;
  position: relative;
`;
// 좌측 이미지
const ConteneLogoContainer = styled.div`
  animation: ${fadeInUp} 700ms ease-in-out;
`;
// 지표 문구
const MetricsContainer = styled.div`
  margin-left: 623px;
  padding-top: 150px;
  animation: ${fadeInUp} 700ms ease-in-out 100ms;
`;
// 수상 내역
const AwardsContainer = styled.div`
  margin: 50px 0px 140px 623px;
  white-space: nowrap;
  animation: ${fadeInUp} 700ms ease-in-out 200ms;
`;
