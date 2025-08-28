커밋 컨벤션: Conventional Commits (표준)

타입	    용도
feat	   ✨ 새로운 기능 추가
fix	       🐛 버그 수정
docs	   📝 문서 수정 (코드 변경 X)
style	   💄 코드 포맷팅, 세미콜론 등 기능에 영향 없는 변경
refactor	🔨 리팩토링 (동작 변화 없음)
test	   ✅ 테스트 코드 추가/수정
chore	   🔧 빌드 설정, 패키지 관리 등 기타 잡일
perf	   🚀 성능 개선
ci	       🤖 CI 설정 변경 (예: GitHub Actions)

--------------------------------------------------------------------

# 1. 변경된 파일 스테이징
git add .

# 2. 커밋 메시지 작성 (예: 기능 추가나 수정 내용)
git commit -m "feat: 상품 필터 기능 추가"

# 3. GitHub 원격 저장소에 푸시
git push


--------------------------------------------------------------------

1. 현재 스테이징 상태 확인하기
git status


스테이징된 파일과 스테이징 전인 수정 파일을 한눈에 보여줘요.

아래 예시처럼 나와요:

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   src/App.js
        new file:   src/components/Button.jsx

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
        modified:   src/index.js

2. 특정 파일만 스테이징하기
git add <파일경로>


예시:

git add src/App.js
git add src/components/Button.jsx


여러 개 파일도 띄어쓰기 구분으로 추가 가능:

git add src/App.js src/index.js

3. 스테이징된 파일만 커밋하기

스테이징된 파일만 커밋됩니다:

git commit -m "fix: App 컴포넌트 수정"

4. 스테이징에서 특정 파일 제외하기

만약 이미 스테이징된 파일을 빼고 싶다면:

git restore --staged <파일경로>


예시:

git restore --staged src/index.js

5. 한 파일만 바로 커밋하고 싶을 때

스테이징 없이 바로 커밋하려면(주의해서 사용):

git commit -m "fix: 특정 파일 수정" <파일경로>


예시:

git commit -m "fix: index.js 수정" src/index.js


하지만 보통은 git add 후 커밋하는 게 안전합니다.