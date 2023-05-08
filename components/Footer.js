import styles from '../styles/Footer.module.css';
import {FaYoutube, FaLinkedin, FaTwitter, FaInstagram, FaDiscord, FaLove } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.column}>
          <img src="/acm.png" alt="logo" className={styles.logo} />
          <p className={styles.address}>Laxminagar, Ravet, Pune, India</p>
        </div>
        <div className={styles.column1}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="https://india.acm.org/">ACM-India</a>
            </li>
            <li>
              <a href="https://india.acm.org/chapters">Our Clubs</a>
            </li>
            <li>
              <a href="https://www.acm.org/membership/join-acm">join ACM</a>
            </li>
          </ul>
        </div>
        <div className={styles.column2}>
          <h3>Social Links</h3>
          <ul className={styles.socialLinks}>
            <li>
              <a href="https://www.youtube.com/c/acmpccoer">
                <FaYoutube />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/acmpccoer">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://discord.gg/qTQcAkK65X">
                <FaDiscord />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/pccoer-acm-student-chapter/">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/acmpccoer?s=09">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.column3}>
          <h3>Contact Us</h3>
          <p>Email: acm@pccoer.com</p>
        </div>
      </div>
      <div className={styles.copy}>
        <p>Made with &#10084; By ACMXPCCOER Student Chapter</p>
      </div>
    </footer>
  );
};

export default Footer;

