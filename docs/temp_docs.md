### Project Name: 뽀모도로 타이머

```
1. Project Overview
*Goal:* React와 Tailwind CSS를 사용하여 뽀모도로 타이머를 구현한다.
*Target User:* 공부나 작업에 집중하기 위한 사람들
*Key Value:* 직관적인 UI/UX , 로컬 스토리지 데이터 지속성.

2. Tech Stack
*Framework:* React (Vite)
*Styling:* Tailwind CSS
*Icons:* Lucide React
*State Management:* Zustand

PRD >
(25분은 공부시간이며 5분은 쉬는 시간입니다.)
1. 사이트에 들어오면 바로 뽀모도로 타이머가 (시계 모양) 존재.
2. 시작 누르면 25분 동안 시계가 돌아가고, 25분이 끝나면 "진동" 이랑 "짧은 알림소리"를 낸다.
3. 그와 동시에 5분 동안의 쉬는 시간 타이머가 돌아간다.
4. 5분이 끝나면 "진동"이랑 "짧은 알림소리"를 내면서 다시, 25분이 돌아간다.
5. 위의 행동을 4번 반복할시에, 20분 동안의 쉬는 시간 타이머가 돌아간다.
6. 20분이 끝나면 "진동"이랑 "짧은 알림소리"를 내면서 다시 25분이 돌아간다.
7. 사용자가 "리셋 버튼"이나 "정지 버튼" 을 누르기 전까지는 무한히 계속된다.

리셋 버튼: 말 그대로 다시 모든 것을 초기화하고 처음 "2번" 상태로 시작함.
정지 버튼: 타이머가 정지함. (공부시간이든 쉬든시간이든 상관 없음)

여기에 공부시간 타이머의 시계 색깔이랑 쉬는시간 타이머의 시계 색깔은 다르다. 본인이 원한다면 "진동"이랑 "짧은 알림소리"는 on/off할 수 있음.
(진동이랑 소리는 pc에서도, 태블릿에서도, 핸드폰에서도 발생됨)

페이지는
Home.tsx (메인 화면이다. 타이머와 버튼이 있다.)
Desc.tsx (뽀모도로 타이머가 무엇인지를 설명함.)
NotFound.tsx (404가 뜨면 나오는 페이지.)

전역 버튼 > Btn.tsx

Btn.tsx: 버튼 ui는 하나만 보이지만, 버튼을 누르면 애니메이션이 일어나면서 버튼이 여러개로 분기된다. 분기된 버튼을 누르면 다시 하나로 모인다.
분기되는 버튼: (home으로 돌아가는 버튼,Desc으로 이동하는 버튼, 네이버 폼으로 이동시키는 버튼)

모바일 반응형 지원

모든 데이터는 `localStorage`에 저장되어 새로고침 후에도 유지되어야 함.
```

규칙입니다.

```
Coding Rules & Guidelines

1. General Principles
*KISS (Keep It Simple, Stupid):* 과도한 추상화를 피하고 명확한 코드를 작성하라.
*DRY (Don't Repeat Yourself):* 반복되는 로직은 커스텀 훅(`hooks/`)이나 유틸리티 함수(`utils/`)로 분리하라.
*Frontend Design Guideline:* docs의 toss-frontend-rules.md를 참고하라

2. File Structure
`/src/components`: UI 컴포넌트 (e.g., `Column.tsx`, `TaskCard.tsx`)
`/src/hooks`: 로직 분리 (e.g., `useKanban.ts`, `useTheme.ts`)
`/src/types`: TypeScript 인터페이스 정의 (e.g., `types.ts`)
*Rule:* 하나의 파일에는 하나의 컴포넌트만 존재해야 한다. (100줄이 넘어가면 분리를 고려할 것)

3. Naming Conventions
*Components:* PascalCase (e.g., `TaskCard`)
*Functions/Variables:* camelCase (e.g., `handleDragEnd`, `isLoading`)
*Types/Interfaces:* PascalCase with explicit naming (e.g., `Task`, `ColumnStatus`)

4. Styling (Tailwind CSS)
인라인 스타일(`style={{}}`) 사용 금지. 동적 스타일링도 Tailwind 유틸리티 클래스 조합(`clsx` or `tailwind-merge`)을 사용할 것.
색상은 하드코딩하지 말고 Tailwind의 시맨틱 컬러(bg-primary, text-muted 등)나 기본 팔레트를 활용할 것.

5. State Management & Logic
`useEffect` 사용을 최소화하고 이벤트 핸들러 내에서 로직을 처리하라.
비즈니스 로직은 UI 컴포넌트 내부에 두지 말고 `hooks`로 분리하라.
```
