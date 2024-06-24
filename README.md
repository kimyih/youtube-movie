## 유튜브 데이터를 활용한 🎬 MOVIE 영상 정보 검색 사이트

### 📑 제작 의도
- 상황에 맞게 영화를 보는 것을 좋아하기 때문에 영화에 대한 정보를 api 로 가져오고 싶었고, 사이트를 통해 사람들에게 영화를 추천하고 싶었다 

### 🏷️ 사용한 기술 & 스택

- React : 수집한 JSON파일의 데이터를 React로 웹사이트에 연동 및 scss로 전체적인 레이아웃 디자인 진행
- Youtube : 채널정보를 통해 API자료 수
- Vercel : 완성한 결과물을 다른 사람들도 볼 수 있게 Vercel에서 웹사이트로 링크화함

### 👍 주요 기능

- Tea 카테고리별 해당 키워드와 관련된 영상 확인 가능
- 검색 기능을 통해 Tea외 영상들도 검색해서 볼 수 있음
- 해당 영상의 채널정보 및 채널에 올라간 영상들도 한번에 볼 수 있

### ✨사이트 프리뷰

#### [홈화면]

![image](https://github.com/kimyih/youtube-movie/assets/163376151/b2545a6d-42f1-4600-afd0-e3358bdbe222)

![image](https://github.com/kimyih/youtube-movie/assets/163376151/b9268676-ce28-4544-9c8f-0df277594a0c)


- 홈 화면은 Aside 구조로 레이아웃을 만들었으며, 좌측은 메뉴탭이 있고 우측엔 메인 정보들을 확인 할 수 있음
- 영화 배급사 랭킹을 크롤링하여 현재 인기 상영 중인 영화를 슬라이드 방식으로 표현 
  
#### [메뉴탭 & 영상 목록]

![image](https://github.com/kimyih/youtube-movie/assets/163376151/8997f811-1c41-458a-947e-ac5f5cee66a6)
![image](https://github.com/kimyih/youtube-movie/assets/163376151/2dfeb472-3eed-4395-b0f4-09ecc0b1852d)


- 메뉴탭에 다양한 영화 장르들을 보여주며 선택할 수 있게 함
- 영화 장르를 클릭하면 해당하는 키워드에 검색이 됨
- 영상 하단에 있는 유튜터 글씨를 클릭하면 해당 유튜브 채널로 이동

#### [추천탭]

![image](https://github.com/kimyih/youtube-movie/assets/163376151/1546e9e2-a005-439a-a38f-80eba14d9365)
![image](https://github.com/kimyih/youtube-movie/assets/163376151/0f7a5b99-ae01-433a-96ed-527c67d72f93)

- 각 장르의 나만의 추천 영화를 10개씩 보여주며 포스터를 hover 하면 이미지가 카드 형태로 뒤집어지면서 영화 정보를 알 수 있음 




### 🛠️ 필요한 라이브러리 설치 순서

````bash
- react 설치 `npx create-react-app 폴더이름` : 폴더를 생략하고 싶으면 app . 으로 설치
- react-router-dom 설치 `npm install react-router-dom` : 주소 설정을 위한 라이브러리
- axios 설치 `npm install axios` : API라이브러리
- react icon 설치 `npm install react-icons` : 리액트에 필요한 아이콘
- react-player 설치 `npm install react-player` : 유튜브 영상 재생
- sass 설치 `npm install sass` : CSS 라이브러리
- react-helmet-async 설치 `npm install react-helmet-async` : SEO
- swiper 설치 `npm install swiper` : 이미지 슬라이드
````

- 필요한 라이브러리 한번에 설치할 때

```bash
npm install react-router-dom, axios, react-icons, react-player, sass, react-helmet-async, swiper
npm i react-spinners
npm i react-datepicker
npm i react-toastify
npm i react-modal
```

- src폴더에 폴더 추가 생성

```bash
- assets
- components
- context
- hook
- pages
- utils
````

- 작업 순서

```bash
1. Node.js 설치
   노드 다운로드 페이지(https://nodejs.org/en/download)에서 버전 20을 다운로드 받습니다.  
   설치가 완료되면 터미널에서 node -v를 입력하여 버전을 확인합니다.

2. 프로젝트 폴더 설정
   깃허브에서 youtube-api라는 이름의 새로운 폴더를 생성합니다.  
   이 폴더를 열어서 작업을 진행합니다.

3. 불필요한 파일 제거 및 셋팅
   새로 생성한 youtube-api 폴더 내에는 필요 없는 파일들을 삭제하고, 프로젝트에 필요한 설정을 해줍니다.

4. App.js
   내용 삭제 후 rafce로 입력하기

5. index.js

- assets폴더에 파일 가져온 후 import './assets/scss/style.scss'; 추가하여 스타일 적용시키기

6. App.js 설정 (자동완성 이용하기)

- `<BrowserRouter>, <Suspense>, <Routes>, <Route>`

7. 각 페이지마다 메타 태그 설정

- Main.jsx파일에 `<HelmetProvider>` 태그 및 `<Helmet>` 태그 설정
- pages의 파일에 `<Helmet>` 태그 내용 적용시키기
````

### ⚡ 트러블 슈팅

1. npx create-react-app . 실행 후 에러 발생 시
   -> 만약 경로 설정 관련 에러가 발생한다면, 해당 경로에 들어가 폴더에 npm 초기화 폴더를 만들어준 후 다시 npx create-react-app .을 입력하고 'y'를 눌러줍니다.

2. 다른 사람의 소스를 가져올 경우
   -> 새로운 임의의 파일을 하나 만든 후 git clone 해주기
   -> 노드 모듈은 없기 때문에 해당 cd를 통해 해당 폴더에 들어간 후
   -> `npm i`로 인스톨 해주기
   -> 그래도 안된다면 버전이 맞는지 확인(버전이 다를 경우 충돌)
