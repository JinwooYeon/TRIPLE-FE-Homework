import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function Metrics() {
  // useState
  // 시작하는 숫자
  const [num, setNum] = useState({
    user: 0,
    review: 0,
    save: 0,
  });

  // useRef
  // 애니메이션 속도 참조 숫자
  const ms = useRef(0);

  // 상수
  // 도달해야할 숫자
  const endNum = {
    user: 350,
    review: 21,
    save: 650,
  };

  // useEffect
  useEffect(() => {
    // 숫자가 올라가는 애니메이션
    const counter = setInterval(() => {
      // 10ms 마다 함수 호출
      ms.current += 10;

      // 1000ms에 (endNum - 5) 도달
      let cal = ms.current / 1000;
      let calNum = {
        user: Math.floor((endNum.user - 5) * cal),
        review: Math.floor((endNum.review - 5) * cal),
        save: Math.floor((endNum.save - 5) * cal),
      };

      // 증가 속도 느려지는 효과
      if (ms.current > 1000) {
        calNum = {
          user: endNum.user - 4,
          review: endNum.review - 4,
          save: endNum.save - 4,
        };
        if (ms.current > 1100) {
          calNum = {
            user: endNum.user - 3,
            review: endNum.review - 3,
            save: endNum.save - 3,
          };
          if (ms.current > 1200) {
            calNum = {
              user: endNum.user - 2,
              review: endNum.review - 2,
              save: endNum.save - 2,
            };
            if (ms.current > 1500) {
              calNum = {
                user: endNum.user - 1,
                review: endNum.review - 1,
                save: endNum.save - 1,
              };
              if (ms.current >= 2000) {
                calNum = {
                  user: endNum.user,
                  review: endNum.review,
                  save: endNum.save,
                };
              }
            }
          }
        }
      }

      // state 값 변경
      setNum(calNum);

      // 2000ms 후 종료
      if (ms.current === 2000) clearInterval(counter);
    }, 10);
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
