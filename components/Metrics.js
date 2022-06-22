import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Metrics() {
  // useState
  const [num, setNum] = useState({
    user: 0,
    review: 0,
    save: 0,
  });

  // 상수
  const endNum = {
    user: 350,
    review: 21,
    save: 650,
  };

  // 함수 - 숫자가 올라가는 애니메이션
  function animate() {
    let startTime = null;
    let tmp = 0;

    // 반복할 애니메이션 프레임
    const step = (currentTime) => {
      tmp += 1;
      if (!startTime) {
        startTime = currentTime;
      }

      // 증가 속도 느려지는 효과
      let cal = Math.sqrt(122) / Math.sqrt(tmp);
      const progress = Math.min(((currentTime - startTime) / 2000) * cal, 1);

      // state 값 변경
      setNum({
        user: Math.floor(progress * endNum.user),
        review: Math.floor(progress * endNum.review),
        save: Math.floor(progress * endNum.save),
      });

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        window.cancelAnimationFrame(window.requestAnimationFrame(step));
      }
    };

    window.requestAnimationFrame(step);
  }

  // useEffect
  useEffect(() => {
    animate();
  }, []);

  return (
    <>
      {/* 지표 문구 */}
      <MetricItem>
        <strong>
          <span>{num.user}</span>만 명
        </strong>
        의 사용자
      </MetricItem>
      <MetricItem>
        <strong>
          <span>{num.review}</span>만 개
        </strong>
        의 리뷰
      </MetricItem>
      <MetricItem>
        <strong>
          <span>{num.save}</span>만 개
        </strong>
        의 저장
      </MetricItem>
    </>
  );
}

// styled-components
const MetricItem = styled.div`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  color: rgb(58, 58, 58);
  font-family: sans-serif;
`;
