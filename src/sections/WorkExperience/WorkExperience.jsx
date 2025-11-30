import React from 'react';
import styles from './WorkExperienceStyles.module.css';
import { useTheme } from '../../common/ThemeContext';

function WorkExperience() {
  const { theme } = useTheme();

  const jobs = [
    {
      role: 'Programmer (C# .NETCore)',
      company: 'PSS Group (Thailand) Company Limited',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoMTAggAUX1kAqgzgGsY8B9ZSGtHoXRXLSOw&s', // example
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
      logo: 'https://images.seeklogo.com/logo-png/28/1/zte-logo-png_seeklogo-284862.png',
      details: [
      'Collaborated with R&D to resolve issues, monitored logs, alarms, and trace systems to help R&D teams quickly detect problems.',
      'Maintained KQI and KPI metrics, troubleshot, and managed server operations. Analyzed Big Data and used Linux, Spark, and SQL for server, data, and storage management.',
      'Conducted packet captures and hardware maintenance. Performed system health checks and monitored alarms.',
      'Implemented version updates, patches, and system administration. Performed backups and updated sites/cells data. Automated data processing and addressed data loss issues.'
    ]
    },
    {
      role: 'SOC Analysis Support Engineer',
      company: 'ZTE CORPORATION, Myanmar',
      logo: 'https://images.seeklogo.com/logo-png/28/1/zte-logo-png_seeklogo-284862.png',
      date: 'Sep 2022 - Aug 2023',
      details: [
      'Analyze and improve network performance. Conduct root cause analysis for issues.',
      'Evaluate daily traffic patterns and optimize. Assess and enhance Key',
      'Investigate and improve site and cell performance. Monitor Core KPIs for 3G and 4G stability.',
      'Detect and address traffic anomalies. Optimize IP pool latency.',
      'Analyze weekly traffic trends. Identify and mitigate network security threats.'
    ]
    },
    {
      role: 'Software Engineer IPCC',
      company: 'Huawei Technologies, Myanmar',
      logo: 'https://logo.clearbit.com/huawei.com',
      date: 'Jul 2020 - May 2022',
      details: [
      'Configure and manage IVR, CTI, CSP, MIP MSP SMS offers, and e-sales data.',
      'Use HP Service Manager for trouble ticket management. Linux, and PLSQL for data management and customized reporting.',
      'Have experienced of UAP, GFEP, Datastation, WAS, Knowledgebase Management System, ACD design, and IVR in Huawei IPCC system.',
      'Solve complaints within SLA and analyze contact center calls. Manage skill queuing, call reasons, trouble tickets, and agent KPIs.',
      'Update and manage IVR menus and call voice flows. Generate custom reports and handle emergency changes.',
      'Collaborate with CRM, CBS, T&P teams, Huawei experts, and Huawei Third Party. Understand various domain Ooredoo NGBSS systems.'
    ]
    },
    {
      role: 'Testing & Project Support Engineer',
      company: 'Huawei Technologies, Myanmar',
      logo: 'https://logo.clearbit.com/huawei.com',
      date: 'Dec 2020 - May 2022',
      details: [
      'Collaborated with ZBJ IT and MPT IT on the new IPCC Project. Executed urgent test cases for the MPT Club Project.',
      'Tested call logs, agent skills, and Red List functionalities. Ensured seamless integration and performance of the new IPCC.',
      'Configured and tested IVR, USSD, call handling, and core network issues.'
    ]
    },
    {
      role: 'Programmer',
      company: 'DIR-ACE Technology Ltd., Myanmar',
      logo: 'https://www.diracetechnology.com/wp-content/themes/dat/assets/images/DAT Logo.png',
      date: 'Nov 2019 - Jan 2020',
      details: [
      'Analyze project requirements, timeboxed plan, and define project architecture. Develop project workflow with rich pictures, define risks, and create rollback plans to implement software maintenance.',
      'Maintain offshore microfinance software and collaborate with team members on project iterations and objectives.'
    ]
    },
    {
      role: 'Programmer / SQL Developer',
      company: 'ACE DataSystems, Myanmar',
      logo: 'https://logo.clearbit.com/acedatasystems.com',
      date: 'Oct 2017 - Apr 2018',
      details: [
      'Maintain Banking reports backend with Oracle SQL and design with Java.',
      'Experience with ACE Local and Infosys (Finacle) Core Banking.',
      'Maintain of AGD Bank reports. Develop and implement the GTB Bank Project.',
      'Collaboration with Indian developers (Infosys), bankers, and project engineers.',
      'Support Infosys Core Banking Training, Prepare user training and functional guides and Enhance report design per local bankers\' requests.'
    ]
    },
    {
      role: 'Freelance Developer',
      company: 'Self-Employed',
      logo: 'https://logo.clearbit.com/github.com', // or use a generic one
      date: 'May 2017 - May 2020',
      details: [
        'Developed websites/software with international teams.',
        'Trained clients on system usage and maintenance.',
      ],
    },
  ];

  return (
    <section
      id="work-experience"
      className={`${styles.container} ${theme === 'light' ? styles.light : styles.dark}`}
    >
      <h2 className="sectionTitle">Work Experience</h2>

      {jobs.map((job, index) => (
        <div key={index} className={styles.experience}>
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
        </div>
      ))}
    </section>
  );
}

export default WorkExperience;
