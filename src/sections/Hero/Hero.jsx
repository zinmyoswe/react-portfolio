import styles from './HeroStyles.module.css';
// import heroImg from '../../assets/Design uten navn.png';
import heroImg from '../../assets/zinmyo.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Zin Myo Swe Resume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          ZIN MYO SWE
          <br />
          
        </h1>
        <h2>Software Engineer / System Engineer</h2>
        <span>
          {/* <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a> */}
          <a href="https://github.com/zinmyoswe" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/zin-myo-swe-14bb99148/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
        With 5+ years of experience in Software Engineering, System Engineering, Programming, WebDevelopment, Telecom, Manage Service, Product Support,Troubleshooting and maintenance of Hardware and over 100 servers in datacenter, network performance analysing,Core Banking software, CRM, IPCC, CBS and Ecommerce Software. 
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
