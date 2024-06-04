# Firebase CRUD 수업 시 사용할 더미 세팅

## 사용법
1. Firestore, Authentication 까지 생성 완료되어야 합니다.
2. 반드시 `.env` 파일에서 필요한 환경변수를 정의해주세요.  
환경변수 내용은 `lib.mjs` 파일을 참고해주세요
3. 모든 데이터를 삭제하려면 다음을 입력합니다.
```
node ./clear_all.mjs
```
4. 모든 데이터를 세팅하려면 다음을 입력합니다.
```
node ./data_init.mjs
```

- 삭제를 원하는 이메일과 비밀번호는 `clear_all.mjs` 파일에서 직접 배열로 정의해야 합니다.  
