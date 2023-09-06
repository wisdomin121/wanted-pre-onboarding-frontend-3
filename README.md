# 원티드 프리온보딩 인턴십 프론트엔드 - 3주차 과제

원티드 프리온보딩 인턴십 프론드엔드에서 3주차 과제로 진행한  
**[한국임상정보](https://clinicaltrialskorea.com/)의 검색 및 캐싱 기능을 클론 구현**하여 웹사이트를 구축하는 프로젝트 입니다 :)

## 개발 환경

### Developement

<img src="https://img.shields.io/badge/Node.js v18 (LTS)-grey?style=for-the-badge&logo=nodedotjs"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"/>

### Convention

<img src="https://img.shields.io/badge/husky-brown?style=for-the-badge&logo=npm"> <img src="https://img.shields.io/badge/lint staged-white?style=for-the-badge&logo=npm"> <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint"> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white">

### Network & Route

<img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/>

### Styling

<img src="https://img.shields.io/badge/styled component-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>

## 프로젝트 실행 방법

1. 백엔드 서버 실행

   - [여기](https://github.com/walking-sunset/assignment-api)에 들어가서 우측 상단의 `Code`버튼 -> `Download ZIP`을 눌러 프로젝트를 다운로드 하시거나,  
     아래의 명령어를 사용해 프로젝트를 clone 해주세요.
     ```
     git clone https://github.com/walking-sunset/assignment-api.git
     ```
   - 프로젝트 다운로드가 끝났다면, 해당 디렉토리로 이동해 프로젝트에 필요한 패키지를 설치해주세요.
     ```
     npm install
     ```
   - 패키지 설치가 끝났다면, 다음 명령어를 사용해 백엔드 서버를 실행시켜주세요 !
     ```
     npm start
     ```

2. 프론트 서버 실행
   - 우측 상단의 `Code`버튼 -> `Download ZIP`을 눌러 프로젝트를 다운로드 하시거나,
     아래의 명령어를 사용해 프로젝트를 clone 해주세요.
     ```
     npm clone https://github.com/wisdomin121/wanted-pre-onboarding-frontend-3.git
     ```
   - 프로젝트 다운로드가 끝났다면, 해당 디렉토리로 이동해 프로젝트에 필요한 패키지를 설치해주세요.
     ```
     npm install
     ```
   - 패키지 설치가 끝났다면, 다음 명령어를 사용해 백엔드 서버를 실행시켜주세요 !
     ```
     npm start
     ```

## 배포 링크 및 데모 영상

배포는 `Vercel`을 사용했습니다 :)  
https://wanted-pre-onboarding-frontend-3.vercel.app/

## 디렉토리 구조

```
📦src
 ┣ 📂apis
 ┣ 📂assets
 ┣ 📂components
 ┣ 📂hooks
 ┣ 📂pages
 ┣ 📂stores
 ┣ 📂styles
 ┣ 📂types
```

## 기능 설명

1. Input의 매 입력마다 API호출을 방지하기

2. 검색창 컴포넌트 설계

3. 키보드로 검색결과 이동

4. API 로컬 캐싱

5. 캐싱의 Expire Time(stale-time) 구현
