import { createMember, createArticle } from "./lib.mjs";

const idJony = "jony123@naver.com";
const idSylvie = "sylvie456@naver.com";
const idNana = "nana777@naver.com";

// argument: username, password
await createMember(idJony, "ssafy123");
await createMember(idSylvie, "ssafy123");
await createMember(idNana, "ssafy123");

// argument: title, content, author
const idArticle1 = await createArticle(
  "안녕하세요",
  "이번에 처음왔습니다. 잘 부탁드립니다.",
  idJony
);
const idArticle2 = await createArticle(
  "가입인사입니다",
  "반갑습니다.",
  idSylvie
);
const idArticle3 = await createArticle(
  "파이어베이스 관련",
  "기본적인 게시판 만들기부터 시작하면 될까요?",
  idSylvie
);

console.log("data init finished");
