import Image from "next/image";
import styles from "./page.module.css";
import profileImg from "../images/profile.webp";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          ga eun&apos;s dev blog&nbsp;
          <code className={styles.code}>gelog.me</code>
        </p>
      </div>
      <div className={styles.layout}>
        {/* 프로필 사진 및 gelee 정보 */}
        <div className={styles.profile}>
          <p>Profile</p>
          <Image
            src={profileImg}
            alt="gelog 프로필 이미지"
            width={200}
            height={200}
          />
          <div>
            <p>Github</p>
            <p>Email</p>
            <p>LinkedIn</p>
          </div>
        </div>
        <div>
          {/* 사용한 블로그 태그들 */}
          <div className={styles.tags}>
            <p>NextJs</p>
            <p>React</p>
            <p>Front-end</p>
            <p>junior</p>
          </div>
          {/* 블로그 글 리스트 */}
          <div className={styles.grid}>
            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.thumnail}>
                <h2>
                  NextJs 14로 블로그 만들기 <span>-&gt;</span>
                </h2>
              </div>
              <p>
                2024년 NextJs는 어떻게 바뀌었을까? 주니어 프론트엔드의 우당탕탕
                NextJs 14 블로그 만들기 기록
              </p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.thumnail}>
                <h2>
                  NextJs 14로 블로그 만들기 <span>-&gt;</span>
                </h2>
              </div>
              <p>
                2024년 NextJs는 어떻게 바뀌었을까? 주니어 프론트엔드의 우당탕탕
                NextJs 14 블로그 만들기 기록
              </p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.thumnail}>
                <h2>
                  NextJs 14로 블로그 만들기 <span>-&gt;</span>
                </h2>
              </div>
              <p>
                2024년 NextJs는 어떻게 바뀌었을까? 주니어 프론트엔드의 우당탕탕
                NextJs 14 블로그 만들기 기록
              </p>
            </a>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>© Ga Eun Lee 2024</footer>
    </main>
  );
}
