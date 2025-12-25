import React from 'react';
import { motion } from 'framer-motion';
import styles from './WorkExperienceStyles.module.css';
import { useTheme } from '../../common/ThemeContext';

function WorkExperience() {
  const { theme } = useTheme();

  const jobs = [
    {
      role: 'Programmer (C# .NETCore)',
      company: 'PSS Group (Thailand) Company Limited',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoMTAggAUX1kAqgzgGsY8B9ZSGtHoXRXLSOw&s',
      date: 'Sep 2024 - Mar 2025',
      details: [
        'Maintained and migrated car parking web payment system with Banking API, .NETCore API backend, JavaScript, and .NETCore MVC frontend.',
        'Debugged, tested, and fixed issues in web payment and web stamp APIs.',
        'Integrated different payment gateway APIs (SCB, Bangkok Bank BBL, Ksherpay, ThaiQR Payment) for different clients like Iconsiam, Central World, Siam Paragon, MBK, and Platinum.',
        'Developed and maintained web stamp system with Banking API, .NETCore backend, and front-end technologies.',
        'Enabled parking discounts through the web stamp system for shopping mall visitors based on receipt value when making QR payments.'
      ]
    },
    {
      role: 'SOC (VMAX) Big Data Engineer',
      company: 'ZTE CORPORATION, Myanmar',
      logo: 'https://media.licdn.com/dms/image/v2/D560BAQHq-TgiEo3mGQ/company-logo_100_100/B56ZsmhCpwJsAc-/0/1765877755021/zte_logo?e=1768435200&v=beta&t=i9cNe_HxTue60AEDdTXDBhpjCGWJ2RnPcT3LQuyEsb0',
      date: 'Aug 2023 - Aug 2024',
      details: [
        'Collaborated with R&D to resolve issues, monitored logs, alarms, and trace systems to help R&D teams quickly detect problems.',
        'Maintained KQI and KPI metrics, troubleshot, and managed server operations. Analyzed Big Data and used Linux, Spark, and SQL for server, data, and storage management.',
        'Conducted packet captures and hardware maintenance. Performed system health checks and monitored alarms.',
        'Implemented version updates, patches, and system administration.'
      ]
    },
    {
      role: 'SOC Analysis Support Engineer',
      company: 'ZTE CORPORATION, Myanmar',
      logo: 'https://media.licdn.com/dms/image/v2/D560BAQHq-TgiEo3mGQ/company-logo_100_100/B56ZsmhCpwJsAc-/0/1765877755021/zte_logo?e=1768435200&v=beta&t=i9cNe_HxTue60AEDdTXDBhpjCGWJ2RnPcT3LQuyEsb0',
      date: 'Sep 2022 - Aug 2023',
      details: [
        'Analyze and improve network performance. Conduct root cause analysis for issues.',
        'Evaluate daily traffic patterns and optimize.',
        'Investigate and improve site and cell performance. Monitor Core KPIs for 3G and 4G stability.',
        'Detect and address traffic anomalies. Optimize IP pool latency.'
      ]
    },
    {
      role: 'Software Engineer IPCC',
      company: 'Huawei Technologies, Myanmar',
      logo: 'https://media.licdn.com/dms/image/v2/C510BAQEtZ01_ey5nIA/company-logo_100_100/company-logo_100_100/0/1630625880354/huawei_logo?e=1768435200&v=beta&t=F-2Obiy7ffCZsVCcmIECm69SQ_umVhJysTL2MSS6kjc',
      date: 'Jul 2020 - May 2022',
      details: [
        'Configure and manage IVR, CTI, CSP, MIP MSP SMS offers, and e-sales data.',
        'Use HP Service Manager for trouble ticket management. Linux, and PLSQL for data management.',
        'Solve complaints within SLA and analyze contact center calls.',
        'Collaborate with CRM, CBS, T&P teams, Huawei experts, and Huawei Third Party.'
      ]
    },
    {
      role: 'Testing & Project Support Engineer',
      company: 'Huawei Technologies, Myanmar',
      logo: 'https://media.licdn.com/dms/image/v2/C510BAQEtZ01_ey5nIA/company-logo_100_100/company-logo_100_100/0/1630625880354/huawei_logo?e=1768435200&v=beta&t=F-2Obiy7ffCZsVCcmIECm69SQ_umVhJysTL2MSS6kjc',
      date: 'Dec 2020 - May 2022',
      details: [
        'Collaborated with ZBJ IT and MPT IT on the new IPCC Project.',
        'Tested call logs, agent skills, and Red List functionalities.',
        'Configured and tested IVR, USSD, call handling, and core network issues.'
      ]
    },
    {
      role: 'Programmer',
      company: 'DIR-ACE Technology Ltd., Myanmar',
      logo: 'https://www.diracetechnology.com/wp-content/themes/dat/assets/images/DAT Logo.png',
      date: 'Nov 2019 - Jan 2020',
      details: [
        'Analyze project requirements, timeboxed plan, and define project architecture.',
        'Maintain offshore microfinance software and collaborate with team members.'
      ]
    },
    {
      role: 'Programmer / SQL Developer',
      company: 'ACE DataSystems, Myanmar',
      logo: 'https://media.licdn.com/dms/image/v2/C560BAQGnScmq2o7gkw/company-logo_100_100/company-logo_100_100/0/1630658103594?e=1768435200&v=beta&t=rEeRgUbPZqUzWxbYF_PVXoAvCkwahE2gBnlwRyzu9O0',
      date: 'Oct 2017 - Apr 2018',
      details: [
        'Maintain Banking reports backend with Oracle SQL and design with Java.',
        'Experience with ACE Local and Infosys (Finacle) Core Banking.',
        'Develop and implement the GTB Bank Project.',
        'Support Infosys Core Banking Training and prepare user guides.'
      ]
    },
    {
      role: 'Freelance Developer',
      company: 'Self-Employed',
      logo: 'https://media.licdn.com/dms/image/v2/D4E12AQFuCmxN72C2yQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1702503196049?e=2147483647&v=beta&t=DJQEbQqWe_9LxLX_haKZN4vvkuQkvqmjvUG1-u9lqKQ',
      date: 'May 2017 - May 2020',
      details: [
        'Developed websites/software with international teams.',
        'Trained clients on system usage and maintenance.',
      ],
    },
  ];

  // Animation Settings
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section
      id="work-experience"
      className={`${styles.container} ${theme === 'light' ? styles.light : styles.dark}`}
    >
      <motion.h2 
        className="sectionTitle text-3xl font-bold"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        Work Experience
      </motion.h2>

      <div className={styles.experienceList}>
        {jobs.map((job, index) => (
          <motion.div 
            key={index} 
            className={styles.experience}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} // Animates when 10% visible
          >
            <div className={styles.logoColumn}>
              <img
                src={job.logo}
                alt={`${job.company} logo`}
                className={styles.companyLogo}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/60';
                }}
              />
            </div>
            <div className={styles.detailsColumn}>
              <div className={styles.role}>{job.role}</div>
              <div className={styles.company}>{job.company}</div>
              <div className={styles.date}>{job.date}</div>
              <ul className={styles.details}>
                {job.details.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;