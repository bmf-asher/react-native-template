# 📱 My React Native Template

커스텀 구조와 설정을 갖춘 React Native 템플릿입니다.  
React Native 프로젝트를 빠르게 시작할 수 있도록 TypeScript, axios, 기본 폴더 구조 등이 포함되어 있습니다.

---

## 🧪 사용법

```bash
npx react-native init MyApp \
  --template git+https://github.com/your-username/my-rn-template.git
```

## 📁 포함된 기본 구조

```
src/
├── components/      # UI 컴포넌트
├── config/          # 앱 설정, 환경 변수, 초기화 관련 파일
├── constants/       # 앱 전역 상수 (문자열, 숫자 등)
├── data/
│   ├── api/         # API 클라이언트 (axios, interceptors)
│   ├── services/    # 유즈케이스 / 도메인 로직
│   ├── models/      # zod 기반 응답 스키마
│   ├── type/        # enum 및 공통 타입 정의
├── hooks/           # 커스텀 훅
├── navigation/      # React Navigation 설정 및 라우팅
├── screens/         # 화면 단위 컴포넌트
├── theme/           # 색상, 폰트, 스타일 등 테마 설정
├── translations/    # 다국어(i18n) 리소스 및 설정
```

## ⚙️ 포함된 설정

```
✅ TypeScript
✅ React Navigation
✅ Axios + Interceptor
✅ zod (런타임 스키마 검증)
✅ theme(light, dark)
✅ i18n
✅ ESLint + Prettier
✅ .xcode.env 기반 환경변수 분리
```
