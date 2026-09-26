# V39rr Hotfix 배포 순서

1. 이 ZIP의 파일을 GitHub 저장소에 올린다. 기존 `src/worker.js`, `public/index.html`, `package.json`, `README.md` 등을 교체한다.
2. Cloudflare Workers 프로젝트에서 다시 배포한다.
3. 배포 후 `https://배포주소/api/health`를 브라우저에서 연다.
4. 다음과 같은 JSON이 보이면 API Worker가 살아 있는 것이다.

```json
{"ok":true,"service":"lite-paragraph-summarizer","version":"39.1.0"}
```

5. 그 다음 기사 본문을 붙여 넣어 `요약하기`를 실행한다.

`/api/health`가 정상인데 `/api/summarize`만 실패하면 브라우저 개발자도구 Console/Network에서 해당 요청의 상태와 응답을 확인한다.
