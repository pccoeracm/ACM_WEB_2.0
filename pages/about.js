import styles from "../styles/About.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.aboutpage}>
      <div className={styles.container}>
        <div className={styles.blurBg}></div> 
        <h1 className={styles.title}>About ACMxPCCOER</h1>
        <div className={styles.text}>
          <p>
            PCCOER ACM Student Chapter has been founded for the technical
            development of students in the field of computing.The Chapter
            provides a platform for students to showcase their talents.It
            facilitates community and individual growth in the computing
            profession.The Chapter organizes a number of events,seminars,talks,
            and workshops for its members.It aims to promote Computer Science
            Culture.
          </p>
        </div>
        <div className={styles.blurBg2}></div> 
      </div>
      
    </div>
  );
};

export default About;
