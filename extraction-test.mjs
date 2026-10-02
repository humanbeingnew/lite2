import {extractArticleText} from './src/worker.js';
const body=`첫 번째 본문 문장이다. 중요한 내용과 수치 1500억원이 들어 있다. 이 사업은 시민 생활에 직접 영향을 주며 올해부터 본격적으로 확대된다. 전문가들은 교통 흐름이 개선될 것으로 분석했다.\n\n두 번째 본문이다. 정책은 10개 지역에서 시행된다. 각 지역은 실시간 데이터를 활용하고, 출퇴근 시간대 혼잡을 줄이기 위한 시스템을 함께 운영한다.\n\n세 번째 본문이다. 사업 완료 후 25% 개선될 전망이다. 정부는 연간 비용도 줄어들 것으로 기대하고 있으며, 분기별로 진행 상황을 점검할 계획이다.`;
const html=`<html><body><header>홈 뉴스 검색 로그인</header><main><div class="article-header"><h1>테스트 기사 제목</h1><div>홍길동 기자 2026.10.02</div></div><article class="article-body"><p>${body.split('\\n\\n')[0]}</p><div class="related-news"><p>관련기사 다른 기사 제목</p><p>추천 뉴스 더보기</p></div><p>${body.split('\\n\\n')[1]}</p><figure class="photo"><figcaption>사진 | 뉴시스</figcaption></figure><p>${body.split('\\n\\n')[2]}</p><aside class="comment"><p>댓글 1234</p></aside></article><aside class="sidebar">많이 본 뉴스 1위</aside><div>홍길동 기자 test@example.com</div></main><footer>Copyright 2026</footer></body></html>`;
const out=extractArticleText(html);
const forbidden=['관련기사','추천 뉴스','댓글 1234','많이 본 뉴스','test@example.com','Copyright 2026','홍길동 기자','사진 | 뉴시스'];
for(const x of forbidden) if(out.includes(x)) throw new Error('본문 외 요소가 남음: '+x);
for(const x of ['1500억원','10개 지역','25%']) if(!out.includes(x)) throw new Error('본문 정보가 사라짐: '+x);
console.log('V49 extraction test: PASS');
