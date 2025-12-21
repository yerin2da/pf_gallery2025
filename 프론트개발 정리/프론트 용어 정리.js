const apiKey = process.env.REACT_APP_API_BASE_URL;
const url = `${apiKey}/Trade/realExchange`
console.log("API URL:", url);  // API URL이 정확한지 확인

export default function SliderComponent() {

    const [tdata, setTdata] = useState([]);

    // 데이터 가져오기
    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await axios.get(url);
                console.log("실시간 환율 받은 데이터:", data);  // 데이터를 콘솔에 출력

                if (data.result === "success") {
                    setTdata(data.code);
                } else {
                    console.log(data.msg || "실패");
                }
            } catch (error) {
                console.error("API 요청 에러:", error);
            }
        };

        fetchData(); // 데이터 가져오기 함수 호출
    }, []);
}
//RESTful api = HTTP 메서드를 이용해서 서버와 데이터를 주고받는 표준 방식, HTTP 메서드(get, post, put, delete)
//async = 비동기
//await = 비동기 끝날 때까지 기다리기
//try-catch = 에러를 잡아서 프로그램이 멈추지 않게 해줌
//axios = api 통신으로 데이터 보내고 받을 수 있는 거
//useEffect
// -상태가 바뀔 때마다 반복 실행, 화면 재렌더링 할때마다 실행
// -[]: 상태(state)가 바뀌어도 실행되지 않음, 맨처음 한번만 실행
// -[값]: 값이 변경될 떄마다 실행


group.map((item, index) => {
    return (
        <LiveCurrency
            key={index}
            name={item.name}
            code={item.code}
            exchange={item.exchange}
            updown={item.updown}
            point={item.point}
        />
    );
})
//키값-각 항목을 고유하게 식별하는 값
//========================================

const [currencyData, setCurrencyData] = useRecoilState(currencyAtom);//화폐 옵션 선택
const {selC1, selC2, count} = currencyData;//필요한 값을 꺼내 씀
export const currencyAtom = atom({//화폐 옵션 선택
    key: 'currencyAtom',
    default: {
        selC1: "ESA",
        selC2: null,
        count: {},
        isoCode: null,
        trade_currency_type_idx: [],
        curency_count: [],
    },
});
//atom = 상태 저장소, 전역에 공유 가능
//recoil = 상태관리, 컴포넌트끼리 상태를 쉽게 공유 가능
//         atom을 컴포넌트에서 읽고 쓰도록 연결

//========================================

//1. 서버실행환경 node.js = 브라우저가 아닌 서버에서 js를 실행할 수 있게 해줌(npm 실행, 개발 서버 제공)
//2. npm = 패키지 설치, 빌드 등(npm start, npm install____)
//3. pm2 = 서버가 꺼지지 않게 유지
//4. aws ec2 = 백엔드 서버 (댓글 데이터를 DB에 저장, 불러오기 API 제공)
//5. api 테스트 = 포스트맨
//웹팩 = 리액트 코드를 서버가 이해하는 코드로 변환, 여러 js/css를 하나로 묶어줌, 로딩속도개선, 유지보수성 강화
//핫리로딩 = 브라우저를 새로고침하지 않고도 변경된 부분만 즉시 반영해주는 기능
//데이터 우선순위 렌더링 위해 프리올리티 씀
//웹표준 = 웹사이트 만들때 모든 브라우저와 기기에서 동일하게 동작하도록 하는 것-시맨틱태그, 장애인 접근성, 검색엔진최적화(SEO, 상위에 노출) 등
//검색엔진 최적화 = <meta name="description" content="사용자 몰입을 극대화한 웹 시리즈 뷰어입니다.">
//검색 키워드 = <meta name="keywords" content="웹, 인터랙션, 뷰어, 웹표준"/>
//접근성 = 신체적 제약이 있는 사람을 포함해서 누구나 웹사이트를 차별없이 이용할 수 있도록 보장하는 것입니다
        //ex) a태그-title/이미지-alt태그(대체 텍스트 제공), 명확한 대비 등

//css 우선순위
            //1. !important
            //2. 인라인 스타일
            //3. 클래스, 속성[type=''], 가상클래스:hover
            //4. 태그<div>, 가상요소::after
            //5. 전체선택자 *


//=========================================

//사용해본 라이브러리= 리액트, 제이쿼리
//사용해본 프레임워크= 테일윈드, 부트스트랩

//=========================================
//RESTful api = HTTP 메서드를 이용해서 서버와 데이터를 주고받는 표준 방식, HTTP 메서드(get, post, put, delete)
//md5 = 입력 데이터를 고정 길이의 해시값으로 변환하는 해시 함수입니다, 암호화, 로그인할때 해본 적 있습니다.
//async = 비동기
//await = 비동기 끝날 때까지 기다리기
//try-catch = 에러를 잡아서 프로그램이 멈추지 않게 해줌
//axios = api 통신으로 데이터 보내고 받을 수 있는 거
//useEffect
// -상태가 바뀔 때마다 반복 실행, 화면 재렌더링 할때마다 실행
// -[]: 상태(state)가 바뀌어도 실행되지 않음, 맨처음 한번만 실행
// -[값]: 값이 변경될 떄마다 실행

//=========================================

// 전공을 따라간다면, 일본어를 구사하는 직업으로 갔을 것 같은데,
// 제 성향상 초면인 사람에게 살갑게 말을 잘 건내지 못한다 또 말 재주가 좋은 것이 아니다
// 그래서 말로 하는 것보다는 손으로 감각을 익힐 수있는 일이 좋겠다 싶어서 알아보다가 웹퍼블리싱 교육을 받게 되었고
// 잘 맞아서 이 직무에 지원하게 되었다

//=========================================

// 사용한 방식/기술을 먼저 말하기 (REST API, GraphQL, WebSocket 등)
//
// 사용한 도구/라이브러리 명시 (fetch, axios, React Query 등)
//
// 데이터 흐름을 간단히 설명 (요청 → 응답 → 화면 반영)
//
// 본인이 처리한 부분 강조 (에러 처리, 로딩 상태 관리, 토큰 인증 등)
//
// 예시 답변 (REST API + React + Axios)
//
// "백엔드와는 주로 REST API로 통신했습니다.
// Axios를 사용해 비동기 요청을 보내고, 응답 데이터를 상태로 관리했습니다.
//     요청 전 로딩 상태를 표시하고, 응답 실패 시 에러 메시지를 처리하도록 구현했습니다.
//     또한, 로그인 시 발급받은 토큰을 헤더에 포함시켜 인증이 필요한 API를 호출했습니다."
//
// 예시 답변 (실무형: 서버 연동 경험 강조)
//
// "프로젝트에서 서버로부터 JSON 데이터를 받아 화면에 뿌리는 작업을 담당했습니다.
// React에서 useEffect 안에서 API를 호출했고, 성공 시 상태를 업데이트해 UI에 반영했습니다.
//     실패할 경우 재시도 기능과 에러 메시지 출력을 구현했고, 백엔드 팀과 협의해 응답 포맷을 정리한 경험도 있습니다."

// 만약 서버가 처음에 "username" 대신 "user_name"처럼 다른 이름을 쓰거나, 날짜 형식이 일관되지 않으면
// 프론트에서 처리하기 불편할 수 있어요.
//
//     그래서 프론트와 백엔드 팀이 “이 필드 이름은 이렇게, 날짜는 이렇게”처럼 응답 데이터 구조를 맞추는 협의를 하는 걸 의미해요.
//
//     즉, API 설계 협업 경험을 말하는 거예요.
//=========================================

// 크로스브라우징 - 리셋css쓰고, 벤더프리픽스 적용
                            //     display: -webkit-box;   /* Safari, 구형 iOS */
                            //     display: -moz-box;      /* 구형 Firefox */
                            //     display: -ms-flexbox;   /* 구형 IE10 */
                            //     display: -webkit-flex;  /* 구형 Chrome, Safari */
                            //     display: flex;          /* 표준 */

//=========================================

//1. 잰교-1
//2. 에마-1
//3. 퍼포-1