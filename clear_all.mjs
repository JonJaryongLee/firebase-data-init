import { clearAllCollection, clearAllUsers } from "./lib.mjs";

// 원하는 컬렉션들을 배열로 입력하세요
const collections = ["articles"];

await clearAllCollection(collections);

// 삭제를 원하는 이메일과 비밀번호는 직접 입력해야 합니다.
const users = [
  {
    email: "jony123@naver.com",
    password: "ssafy123",
  },
  {
    email: "sylvie456@naver.com",
    password: "ssafy123",
  },
  {
    email: "nana777@naver.com",
    password: "ssafy123",
  },
];

await clearAllUsers(users);

console.log("clear finished");
