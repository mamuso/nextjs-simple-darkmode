import styles from "./Instructions.module.css";

export default function Instructions() {
  return (
    <div className={styles.container}>
      <h1>Simple light/dark mode in Next.js</h1>
      <p>Simple solution to implement light/dark mode in Next.js using CSS variables. Compatible with, but not dependant of styled-components.</p>
      <p>Play with your OS appearence prefeerences in the operating system settings.</p>
      <ul>
        <li className={styles.list}>In macOS: System preferences → General → Appeaarence → Light/Dark/Auto Mode</li>
        <li className={styles.list}>In Windows 10: Settings → Personalization → Colors → Light/Dark</li>
      </ul>
      <p>
        Check{" "}
        <a className={styles.link} href="https://github.com/mamuso/nextjs-simple-darkmode">
          the repository
        </a>{" "}
        if you are curious about the code or{" "}
        <a className={styles.link} href="https://mamuso.dev/post/2021-03-27-dark-mode-nextjs-cssvars">
          this post
        </a>{" "}
        if you want to read more about the implementation details.
      </p>
    </div>
  );
}
