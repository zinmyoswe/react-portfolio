import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme(); // Get the current theme from context

  const skills = [
    { name: 'Linux, Docker, Kubernetes', level: 90 },
    { name: 'Data Center Infrastructure and Automation', level: 65 },
    { name: 'Data Engineering and Analysis (SPARK, Hadoop, HIVE, Jupyter, PowerBI)', level: 80 },
    { name: 'Cloud Platform(AWS,Azure, GCP)', level: 75 },
    { name: 'Database (MYSQL, MSSQL, Oracel Sql, PostgreSQL, PL SQL, NoSQL)', level: 80 },
    { name: 'Backend ( Python, Django, PHP, Laravel, NodeJs, Java, SpringBoot, RESTful APIs, JSON)', level: 90 },
    { name: 'Backend ( ASP.NET, C#, VB.NET)', level: 60 },
    { name: 'Frontend (Angular,Vue, React,Nextjs)', level: 90 },
    { name: 'Frontend (HTML, CSS, Javascript, Bootstrap, Tailwind)', level: 90 },
    { name: 'Android/ IOS(Ionic, Dart, Flutter, Kotlin)', level: 60 },
  ];

  return (
    <section
      id="skills"
      className={`${styles.container} ${
        theme === 'light' ? styles.light : styles.dark
      }`}
    >
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skill}>
            <span className={styles.skillName}>{skill.name}</span>
            <div className={styles.progressBar}>
              <div
                className={styles.progress}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;