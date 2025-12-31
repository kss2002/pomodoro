# 뽀모도로 타이머 ⏱️

집중력을 높이고 효율적인 시간 관리를 돕기 위한 웹 기반 뽀모도로 타이머입니다. React와 Tailwind CSS를 활용하여 개발되었으며, 직관적인 UI와 사용자 친화적인 기능을 제공합니다.

### 📝 프로젝트 개요 (Project Overview)

- **목표:** 공부나 작업에 몰입할 수 있도록 돕는 뽀모도로 테크닉 기반의 타이머 서비스 구현
- **주요 가치:** 직관적인 UI/UX, 끊김 없는 사용 경험(데이터 저장), 반응형 디자인

### ✨ 주요 기능 (Key Features)

### 1. 뽀모도로 사이클 (Pomodoro Cycle)

- **집중 시간 (Work):** 25분
- **짧은 휴식 (Short Break):** 5분
- **긴 휴식 (Long Break):** 20분 (4번의 집중 사이클 완료 후)
- 사이클 전환 시 **진동**과 **알림음**으로 사용자에게 알림 (On/Off 가능)

### 2. 사용자 편의성 (User Experience)

- **자동 전환:** 타이머 종료 시 다음 단계(휴식 또는 집중)로 자동 전환되며 알림이 발생합니다.
- **상태 저장 (Persistence):** 브라우저의 `localStorage`를 사용하여 새로고침 후에도 진행 상황(남은 시간, 사이클 수 등)이 유지됩니다.
- **반응형 디자인 (Responsive):** PC, 태블릿, 모바일 등 다양한 디바이스 환경을 지원합니다.

### 3. 컨트롤 기능 (Controls)

- **시작/일시정지:** 타이머를 언제든지 멈추거나 재개할 수 있습니다.
- **리셋 (Reset):** 진행 중인 모든 사이클을 초기화하고 처음 상태로 되돌립니다.
- **설정 (Settings):** 소리 및 진동 알림을 켜거나 끌 수 있습니다.

### 🛠 기술 스택 (Tech Stack)

| Category             | Technology                                    |
| -------------------- | --------------------------------------------- |
| **Framework**        | [React 19](https://react.dev/) (Vite)         |
| **Language**         | [TypeScript](https://www.typescriptlang.org/) |
| **Styling**          | [Tailwind CSS v4](https://tailwindcss.com/)   |
| **State Management** | [Zustand](https://zustand-demo.pmnd.rs/)      |
| **Routing**          | [React Router DOM](https://reactrouter.com/)  |
| **Icons**            | [Lucide React](https://lucide.dev/)           |
| **Package Manager**  | [Yarn](https://yarnpkg.com/)                  |

### 📂 프로젝트 구조 (Project Structure)

```
src/
├── components/     # 재사용 가능한 UI 컴포넌트 (Timer, ControlButtons 등)
├── hooks/          # 커스텀 훅 (비즈니스 로직 분리: usePomodoro 등)
├── layout/         # 레이아웃 컴포넌트
├── pages/          # 페이지 단위 컴포넌트 (Home, Desc, NotFound)
├── routes/         # 라우팅 설정
├── stores/         # 전역 상태 관리 (Zustand: pomodoroStore)
├── types/          # TypeScript 타입 정의
└── utils/          # 유틸리티 함수 (notification, timer 등)
```

### 🚀 시작하기 (Getting Started)

프로젝트를 로컬 환경에서 실행하려면 다음 단계를 따르세요.

### 1. 레포지토리 클론 (Clone)

```bash
git clone https://github.com/kss2002/pomodoro.git
cd pomodoro
```

### 2. 패키지 설치 (Install Dependencies)

```bash
yarn install
```

### 3. 개발 서버 실행 (Run Dev Server)

```bash
yarn dev
```

브라우저에서 `http://localhost:5173`으로 접속하여 확인합니다.

### 💬 피드백 (Feedback)

서비스 이용 중 버그를 발견하거나 개선 사항이 있다면 아래 링크를 통해 의견을 남겨주세요.

- [네이버 폼 피드백 바로가기](https://naver.me/FPUpoxRk)

### 📜 라이선스 (License)

이 프로젝트는 [MIT LICENSE](https://github.com/kss2002/pomodoro/blob/main/) 를 따릅니다.
