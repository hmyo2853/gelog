import Image from "next/image";
import styles from "./page.module.css";

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
          <Image src="" alt="gelog 프로필 이미지" width={200} height={200} />
        </div>
        <div>
          {/* 사용한 블로그 태그들 */}
          <div>
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
              <h2>
                블로그 글 1 <span>-&gt;</span>
              </h2>
              <p>
                Instantly deploy your Next.js site to a shareable URL with
                Vercel.
              </p>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
