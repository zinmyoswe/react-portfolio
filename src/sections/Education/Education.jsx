import React from 'react';
import styles from './EducationStyles.module.css';

const educationData = [
  {
    logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQGt65Tb04c61g/company-logo_100_100/B4EZf4szZLGcAQ-/0/1752224184383?e=1766016000&v=beta&t=5mq0nVJJb_zf711XnDkLBgmGAI5moBkjxaBWn9dv3IE',
    school: 'University of Greenwich',
    degree: 'Bachelor of Science - BS, Business Information Technology',
    dates: '2017 - 2018',
    grade: 'Second Class Honours (1st DIVISION)',
  },
  {
    logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQHD-RVDyFR0IA/company-logo_100_100/company-logo_100_100/0/1663745547653/ncc_education_logo?e=1766016000&v=beta&t=8yqTdeWNcHtRHYQfYje5AUNl4_GBhIy1BMJ3bRgOnPA',
    school: 'NCC Education',
    degree: 'Level 5 Diploma, Computing (QCF)',
    dates: '2015 - 2016',
    grade: null, 
  },
  {
    logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQHD-RVDyFR0IA/company-logo_100_100/company-logo_100_100/0/1663745547653/ncc_education_logo?e=1766016000&v=beta&t=8yqTdeWNcHtRHYQfYje5AUNl4_GBhIy1BMJ3bRgOnPA',
    school: 'NCC Education',
    degree: 'Level 4 Diploma, Computing (QCF)',
    dates: '2014 - 2015',
    grade: null, 
  },
];

const Education = () => {
  return (
    <section id="education" className={styles.sectionContainer}>
      <h2 className={styles.heading}>Education</h2>
      <div className={styles.educationList}>
        {educationData.map((item, index) => (
          <div key={index} className={styles.educationCard}>
            <div className={styles.logoContainer}>
              <img 
                src={item.logo} 
                alt={`${item.school} logo`} 
                className={styles.schoolLogo} 
                loading="lazy"
              />
            </div>
            <div className={styles.details}>
              <h3 className={styles.schoolName}>{item.school}</h3>
              <p className={styles.degree}>{item.degree}</p>
              <p className={styles.dates}>
                 {item.dates}
              </p>
              {item.grade && (
                <p className={styles.grade}>
                   Grade: {item.grade}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;