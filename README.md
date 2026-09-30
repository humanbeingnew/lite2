## V47

V47 adds short-text candidate selection, numeric preservation, Markdown cleanup, and structural diagnosis protection.

# Lite 문단 요약기 V41

Cloudflare Workers용 초경량 한국어 뉴스/문서 요약기입니다. 외부 AI API 없이 동작하며 원문 약 35%를 목표로 압축합니다. 허용 범위는 30~45%입니다.

## V41 핵심
- 핵심 주장 → 근거/수치 → 영향/결론 구조 보존
- 연속 정보 블록 우선
- 내용이 서로 무관한 비연속 문장을 여러 곳에서 끌어오는 현상 억제
- 원문 순서 복원
- 숫자와 핵심 엔터티 우선 보존
- 중복 문장 제거
- `/api/health` 제공

## 실행
```
npm install
npm test
npm run audit
node mixing-v41.mjs
node stress-v41.mjs
```

`npm test`는 압축률 회귀 테스트를, `npm run audit`는 내용 보존·순서·중복·관련성 검사를 실행합니다.

## 배포
```
npx wrangler deploy
```
