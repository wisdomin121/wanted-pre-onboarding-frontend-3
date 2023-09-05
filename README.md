# 프리온보딩 7팀 컨벤션

## 목차

- [브랜치 설정](#브랜치-설정)
- [프로젝트 자동화](#프로젝트-자동화)
- [커밋 메시지](#커밋-메시지)
- [브랜치 명](#브랜치-명)
- [Issue](#issue)
- [Pull Request](#pull-request)
- [Merge](#merge)
- [디렉토리 구조](#디렉토리-구조)
- [변수, 함수, 컴포넌트명칭](#변수-함수-컴포넌트명칭)
- [Github Actions](#github-actions)
- [Windows에서 Github Desktop 사용 시](#windows에서-github-desktop-사용-시)

## 브랜치 설정

> 해당 프로젝트의 Settings -> Branches로 이동합니다.

![1](https://github.com/wanted-pre-onboarding-team-12th-7/cooperative-coding-convention/assets/93248349/36d85772-daa1-4859-a984-a9dc4dc4b0b6)

> Add branch protection rule 버튼을 누른 후, 다음과 같이 설정합니다.

![2](https://github.com/wanted-pre-onboarding-team-12th-7/cooperative-coding-convention/assets/93248349/ae63a802-f225-4419-a35d-dfe64f3e9bf3)

![3](https://github.com/wanted-pre-onboarding-team-12th-7/cooperative-coding-convention/assets/93248349/88b686fc-b532-40c8-92a5-048d9e267f8d)

![4](https://github.com/wanted-pre-onboarding-team-12th-7/cooperative-coding-convention/assets/93248349/844bd461-4c57-49b4-87c3-66d0af2f19f8)

## 프로젝트 자동화

> [원활한 자동화](#github-actions)를 위해 다음과 같은 설정을 해주세요!

> 해당 프로젝트의 Settings -> Secrets and variables -> Actions로 이동합니다.

![1](https://github.com/wanted-pre-onboarding-team-12th-7/cooperative-coding-convention/assets/93248349/bdfdba69-ba52-43f8-b0b6-403f486d2e8e)

> New repository secret 버튼을 눌러 발급받은 토큰을 입력후, Add secret 버튼을 눌러 줍니다.

![2](https://github.com/wanted-pre-onboarding-team-12th-7/cooperative-coding-convention/assets/93248349/c4a089b2-caf1-4adf-91b7-fe0b500b858e)

```
Name: TOKEN

Secret: 발급받은 토큰
```

> 필요한 토큰의 권한은 다음과 같습니다!

![repo](https://github.com/wanted-pre-onboarding-team-12th-7/cooperative-coding-convention/assets/93248349/c0b9ed15-e964-47fa-8844-a941e1d735ff)
![project](https://github.com/wanted-pre-onboarding-team-12th-7/cooperative-coding-convention/assets/93248349/8d9353d9-4950-452a-8e87-ee2c7ef92593)

> 그 다음, Variables 탭으로 이동하여 다음과 같이 Repository variables를 추가해 주세요!

![스크린샷 2023-09-02 오전 11 52 56](https://github.com/wanted-pre-onboarding-team-12th-7/cooperative-coding-convention/assets/93248349/65b5b343-485f-40cf-a964-367918888cc5)

```
Name: PROJECT_URL

Value: https://github.com/orgs/wanted-pre-onboarding-team-12th-7/projects/프로젝트번호
```

```
Name: REVIEWERS

Value: wisdomin121, anyl92, SeungrokYoon, 5unk3n, salmontaker, JangHyunjeong
```

## 커밋 메시지

> 모든 커밋 메시지는 `prefix: 메시지`의 형식에 따라 작성해 주세요!

```
feat: Todo 리스트 구현
```

| prefix   | 설명                                                  |
| -------- | ----------------------------------------------------- |
| feat     | 새로운 기능을 추가, 기존 기능을 수정                  |
| refactor | 리팩토링                                              |
| fix      | 버그 수정                                             |
| style    | 기능에는 영향을 주지 않는 CSS, 레이아웃 개발          |
| config   | 환경설정, 환경변수, 패키지 인스톨                     |
| docs     | README.md등의 문서수정                                |
| chore    | 불필요한 파일 삭제, 파일 디렉토리 이동 등의 잡다한 일 |

## 브랜치 명

> [커밋 메시지](#커밋-메시지)의 prefix를 동일하게 사용합니다!

> 브랜치 명은 `prefix/#이슈번호-브랜치이름`으로 작성해 주세요!

```
feat/#1-todo-list
```

## Issue

> 이슈 작성시 연관된 브랜치를 연결해 주세요!

> Asignee, Project 연결은 [Github Actions](#github-actions)가 자동으로 처리 해줄거에요!

![브랜치 연결](https://github.com/wanted-pre-onboarding-team-12th-7/cooperative-coding-convention/assets/93248349/8d417643-2a67-4114-8157-c08f655664c8)

## Pull Request

> [커밋 메시지](#커밋-메시지)의 prefix를 동일하게 사용합니다!

> PR 작성시 `prefix: #이슈번호 제목`의 형식을 지켜주세요! `prefix`에 `대문자는 사용하지 않습니다!`

> Asignee, Reviewers, Project 연결은 [Github Actions](#github-actions)가 자동으로 처리 해줄거에요!

![PR 작성](https://github.com/wanted-pre-onboarding-team-12th-7/cooperative-coding-convention/assets/93248349/36a53be2-a6c8-4bed-abcc-f36d15b0529d)

> 새로운 PR이 올라왔을 때, 되도록이면 3시간 안에 코드리뷰를 해주세요!

![PR 알림](https://github.com/wanted-pre-onboarding-team-12th-7/cooperative-coding-convention/assets/93248349/8674b168-17d9-452f-86f9-f28ef1f02c6c)

> 다른 사람의 PR이 main에 merge되었을 때, 반드시 rebase하도록 해요!

```shell
# 작업중인 브랜치에서...

git rebase origin/main
git push -f
```

## Merge

> merge전에 rebase, 꼭 잊지 말도록 해요!

```shell
# merge할 브랜치에서...

git rebase origin/main
git push -f
```

## 디렉토리 구조

> 이 외에도 추가하고 싶은 요소가 있다면, 모두와 의견을 나눠봐요!

```
src/
├── apis/
│   ├── instance.ts
│   └── todo.ts
├── assets/
│   └── 이미지, 아이콘등의 리소스 파일
├── components/
│   ├── common/
│   │   └── 공통 컴포넌트
│   └── 일반 UI 컴포넌트/
│       └── 컴포넌트/
│           ├── 컴포넌트명.tsx
│           ├── 컴포넌트명.styled.tsx
│           └── types.ts
├── hooks/
│   └── 커스텀 훅
├── pages/
│   ├── HomePage
│   └── TodoPage
├── store/
│   └── 전역으로 관리하는 데이터
└── styles/
    ├── base/
    │   ├── DefaultTheme.ts
    │   └── GlobalStyles.ts
    └── constant/
        ├── colors.ts
        ├── flex.ts
        └── fontSize.ts
```

## 변수, 함수, 컴포넌트명칭

> 변수와 함수는 반드시 camelCase로 작성해 주세요!

```js
// snake_case나 PascalCase로 변수와 함수를 작성하지 말아주세요!

const is_correct_var_name = false

const IsCorrectVarName = false
```

```js
// 다음과 같이 camelCase를 사용하도록 해요!

const isCorrectVarName = true
```

> 컴포넌트는 PascalCase + function 키워드로 작성해 주세요!

```js
// 컴포넌트라는 것을 알아보기 쉽도록 function 키워드를 사용하도록 해요!

function TodoList() {
    ...
}
```

> 함수는 동사로 시작해요!

```js
// 컴포넌트와의 구분을 위해 Arrow Function 사용을 권장드려요!

const getTodo = () => {
    ...
}

// 단, 커스텀 hook 작성시에만 use라는 키워드를 사용해 주세요!

const useTodo = () => {
    const [todoList, setTodoList] = useState([])
    ...
}
```

## Github Actions

> 이슈와 PR 작성시의 피로도를 줄이기 위해, 다음과 같이 자동화를 했어요!

> 이슈와 PR 작성 이외의 작동 조건을 알고싶다면 [이 문서](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows)를 참고해 주세요!

```yml
# .github/workflows/main.yml

on:
  issues:
    types: [opened]
  pull_request:
    types: [opened, ready_for_review]

jobs:
  assign:
    runs-on: ubuntu-latest
    steps:
      - if: ${{ github.event.issue }}
        uses: actions-cool/issues-helper@v3
        with:
          actions: 'add-assignees'
          assignees: ${{ github.event.issue.user.login }}
          token: ${{ secrets.TOKEN }}

      - if: ${{ github.event.pull_request }}
        uses: hkusu/review-assign-action@v1
        with:
          assignees: ${{ github.event.pull_request.user.login }}
          reviewers: ${{ vars.REVIEWERS }}
          github-token: ${{ secrets.TOKEN }}

  project:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/add-to-project@main
        with:
          project-url: ${{ vars.PROJECT_URL }}
          github-token: ${{ secrets.TOKEN }}
```

## Windows에서 Github Desktop 사용 시

> Windows 버전 [Github Desktop](https://desktop.github.com/)에 내장된 Git에는 [cygpath](https://cygwin.com/cygwin-ug-net/cygpath.html)가 포함되어 있지않아, pre-commit시 다음과 같은 에러가 발생할 수 있습니다.

![Error](https://github.com/wanted-pre-onboarding-team-12th-7/cooperative-coding-convention/assets/93248349/e74940a4-5290-40fe-be92-d6fdeb072288)

> 이 경우, git이 설치된 경로/usr/bin/cygpath.exe를 GitHub Desktop이 설치된 경로/bin 에 복사하면 해결할 수 있습니다.

![1](https://github.com/wanted-pre-onboarding-team-12th-7/cooperative-coding-convention/assets/93248349/28b33067-d074-4bc7-bb4e-e320e8afd51d)

![2](https://github.com/wanted-pre-onboarding-team-12th-7/cooperative-coding-convention/assets/93248349/53c32db5-005a-464d-af81-ef9067fb0173)
