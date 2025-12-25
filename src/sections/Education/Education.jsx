import React from 'react';
import styles from './EducationStyles.module.css';

const educationData = [
  {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbq8eO13w7QARDUcxZ0k3qS2IoNuCIz27lhg&s',
    school: 'University of Greenwich',
    degree: 'Bachelor of Science - BS, Business Information Technology',
    dates: '2017 - 2018',
    grade: 'Second Class Honours (1st DIVISION)',
  },
  {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvkU5-FvDAHP-qKmFltiTlZAHmN6U_xExMpQ&s',
    school: 'NCC Education',
    degree: 'Level 5 Diploma, Computing (QCF)',
    dates: '2015 - 2016',
    grade: null, 
  },
  {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvkU5-FvDAHP-qKmFltiTlZAHmN6U_xExMpQ&s',
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