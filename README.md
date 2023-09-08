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

1. 백엔드 서버 실행 ( !필수! )

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
3. 입력 방법
   - input을 클릭하여 원하는 키워드를 작성한다.
   - input 안에 있는 돋보기 버튼을 클릭하면 '최근 검색어'로 지정된다. ( 엔터 불가능 )
   - 방향키(↑, ↓)를 통해 결과값을 움직일 수 있으며, 엔터를 누르면 해당하는 text가 input의 value로 지정된다.
   - esc를 누르면 결과창이 닫힌다.

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

**1. 검색창 컴포넌트 설계**
  - MainPage.tsx
    - 아래에서 설명할 SearchInput과 SearchResults를 포함하고 있는 페이지이다.
    - 해당 페이지에서 최근 검색어 캐시를 확인하며, 디바운스를 사용해 결과값을 호출한다.
  - SearchInput.tsx
    - 사용자의 입력값을 value에 저장시킨다.
    - 키보드의 ↑, ↓, enter를 통해 결과값을 이동하면서 선택한다.
  - SearchButton.tsx
    - SearchInput의 하위 button 컴포넌트이다.
    - '최근 검색어'에 저장될 수 있도록 하며, value값을 초기화 시킨다.
  - SearchResults.tsx
    - '추천 검색어'와 '최근 검색어'를 확인할 수 있는 div 컴포넌트이다.
    - 최대 6개의 결과값을 확인할 수 있다.
    - '추천 검색어'가 없다면 '추천 검색어 없음'이란 문구가,
      '최근 검색어'가 없다면 '최근 검색어 없음'이란 문구가 뜬다.
      로딩중이라면 'Loading...'이란 문구가 뜬다.
   - SearchResult.tsx
     - SearchResults의 하위 button 컴포넌트이다.
     - value를 Input창에서 확인할 수 있도록 한다.

---

**2. Input의 매 입력마다 API호출을 방지하기**   
   
-  "**Debounce** 사용"
    ```
    const useDebounce = (callback: () => void) => {
      const timer = useRef<ReturnType<typeof setTimeout>>()

      const dispatchDebounce = () => {
        if (timer.current) {
          clearTimeout(timer.current)
        }

        const newTimer = setTimeout(() => {
          callback()
        }, 750)

        timer.current = newTimer
      }

      return dispatchDebounce
    }
    ```

    - 750ms 후에 callback 함수가 실행되도록 작성했음.
    - callback 함수로는 캐시를 확인하고, api를 호출하는 커스텀 훅을 넣음.
- api 호출 확인은 interceptors를 통해 구현
  ```
  API.interceptors.request.use((config) => {
     console.info('calling api')

     return config
  })
  ```

---

3. **API 로컬 캐싱**   
   - **세션 스토리지** 사용
   - 최근 검색어
     - useRecentStorage 커스텀 훅 제작
       ```
       const useRecentStorage = (key: string, value: string) => {
         const saveRecentResults = () => {
           const recentlyKeywords = sessionStorage.getItem(key)

           if (recentlyKeywords) {
             const keywordsSet = new Set(JSON.parse(recentlyKeywords))

             if (value.length !== 0) {
               if (keywordsSet.has(value)) {
                 keywordsSet.delete(value)
               }

               keywordsSet.add(value)
             }
  
             sessionStorage.setItem(key, JSON.stringify(Array.from(keywordsSet)))
           } else {
             const keywordsSet = new Set([value])

             sessionStorage.setItem(key, JSON.stringify(Array.from(keywordsSet)))
           }
         }

         return saveRecentResults
       }

       export default useRecentStorage
       ```
         - key는 'recentlyKeywords', value는 문자열 배열로 SearchButton을 눌렀을 때 input의 value를 push해줬음.
   - 추천 검색어
     - useRecommendStorage 커스텀 훅 제작
       ```
       import { useState } from 'react'

       import { getSicks } from 'apis/sickApi'
       import { Result } from 'types/search'

       const useRecommendStorage = (keyword: string, setResults: (value: Result[]) => void) => {
         const [loading, setLoading] = useState<boolean>(false)

         const checkCache = () => {
           setLoading(true)

           const cache = sessionStorage.getItem(keyword)

           if (cache) {
             const parseCache = JSON.parse(cache)

             if (parseCache.expireTime < new Date().getTime()) {
               sessionStorage.removeItem(keyword)
             } else {
               setResults(JSON.parse(cache).data)
               setLoading(false)
               return
             }
           }

           getSicks(keyword)
             .then((res) => {
               setResults(res.data)
               sessionStorage.setItem(
                 keyword,
                 JSON.stringify({ data: res.data, expireTime: new Date().getTime() + 1000 * 60 })
               )
             })
             .catch((err) => console.error(err))
             .finally(() => setLoading(false))
         }

         return { checkCache, loading }
       }

       export default useRecommendStorage

       ```
         - api를 호출하기 전, 캐시가 된 keyword인지 확인함.
         - 캐시가 됐다면, 해당 value를 results로 선언함.
         - 캐시가 되지 않았다면 key는 keyword, value는 검색값으로 세션 스토리지에 저장하고, 겁색값을 results로 선언함.

---

4. **캐싱의 Expire Time(stale-time) 구현**
   - 추천 검색어를 세션 스토리지에 저장할 때 value에 expireTime을 포함시켜 저장함.
     ```
     sessionStorage.setItem(
       keyword,
       JSON.stringify({ data: res.data, expireTime: newDate().getTime() + 1000 * 60 })
     )
     ```
   - 캐시가 됐는지 확인할 때, expireTime을 초과했다면 해당 keyword의 세션스토리지 값을 삭제하고, 다시 api 호출을 실행함.
     ```
     if (cache) {
        const parseCache = JSON.parse(cache)

        if (parseCache.expireTime < new Date().getTime()) {
           sessionStorage.removeItem(keyword)
        } else {
           ...
        }
     }
     ```
---

5. **키보드로 검색결과 이동**
   - useChangeFocus 커스텀 훅 제작
     - focus되고 있는 결과값의 인덱스(=focusIdx)를 반환하는 훅
     - ↑, ↓ : 결과값 이동
     - Enter : 결과값 선택
     - ESC : 결과창 닫기

     ```
     const useChangeFocus = (setIsFocus: React.Dispatch<React.SetStateAction<boolean>>) => {
       const { setValue, results, focusIdx, setFocusIdx } = useSearchStore()

       const RESULTS_LENGTH = results.length

       const changeIdxNum = (e: React.KeyboardEvent<HTMLInputElement>) => {
         if (e.key === 'ArrowDown') {
           RESULTS_LENGTH > 0 && RESULTS_LENGTH < RESULTS_MAX_LENGTH
             ? setFocusIdx((focusIdx + 1) % RESULTS_LENGTH)
             : setFocusIdx((focusIdx + 1) % RESULTS_MAX_LENGTH)
         }
         if (e.key === 'ArrowUp') {
           RESULTS_LENGTH > 0 && RESULTS_LENGTH < RESULTS_MAX_LENGTH
             ? setFocusIdx((focusIdx - 1 + RESULTS_LENGTH) % RESULTS_LENGTH)
             : setFocusIdx((focusIdx - 1 + RESULTS_MAX_LENGTH) % RESULTS_MAX_LENGTH)
         }
         if (e.key === 'Escape') {
           setFocusIdx(-1)
           setIsFocus(false)
         }
         if (e.key === 'Enter') {
           RESULTS_LENGTH > 0 && focusIdx >= 0 && setValue(results[focusIdx]['sickNm'])
           setFocusIdx(-1)
         }
       }

       return changeIdxNum
     }
     ```
   - focus가 되고 있다면 배경색을 hover일 때와 동일할 수 있도록 작성함.
     ```
     ${({ $isResultFocus }) => $isResultFocus && `background-color: #f9f7f2`}
     ```

## 실행 결과 영상

2. Input의 매 입력마다 API호출을 방지하기   
https://github.com/wisdomin121/wanted-pre-onboarding-frontend-3/assets/46989954/b96102fc-2245-4ad4-b9f6-ba1480041bea


3. API 로컬 캐싱 / 4. 캐싱의 Expire Time(stale-time) 구현   
https://github.com/wisdomin121/wanted-pre-onboarding-frontend-3/assets/46989954/ac3c5d40-525c-4ec6-a35e-817fbf2a7a98

5. 키보드로 검색결과 이동   
https://github.com/wisdomin121/wanted-pre-onboarding-frontend-3/assets/46989954/290491f8-c68d-43e7-ae47-edac2df0e86e
