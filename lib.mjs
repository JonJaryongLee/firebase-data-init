import "dotenv/config";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  addDoc,
  deleteDoc,
  collection,
  doc,
  query,
  Timestamp,
} from "firebase/firestore/lite";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  deleteUser,
} from "firebase/auth";

// .env 파일을 생성해, 환경변수를 정의해주세요
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export async function createMember(email, password) {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
  }
}

export async function createArticle(title, content, author) {
  const newArticle = {
    title: title,
    content: content,
    createdAt: Timestamp.fromDate(new Date()),
    updatedAt: Timestamp.fromDate(new Date()),
    author: author,
  };
  try {
    const docRef = await addDoc(collection(db, "articles"), newArticle);
    return docRef.id;
  } catch (error) {
    console.error(error);
  }
}

export async function clearAllCollection(collections) {
  for (const collectionName of collections) {
    const q = query(collection(db, collectionName));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((docc) => {
      deleteDoc(doc(db, collectionName, docc.id));
    });
  }
}

export async function clearAllUsers(users) {
  for (const user of users) {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );
    const userr = userCredential.user;
    deleteUser(userr);
  }
}
