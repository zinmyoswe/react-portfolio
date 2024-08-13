import React from 'react';
import styles from './WorkExperienceStyles.module.css';
import { useTheme } from '../../common/ThemeContext';

function WorkExperience() {
  const { theme } = useTheme();

  return (
    <section
      id="work-experience"
      className={`${styles.container} ${theme === 'light' ? styles.light : styles.dark}`}
    >
      <h1 className="sectionTitle">Work Experience</h1>
      <div className={styles.experience}>
        
        <h3>SOC (VMAX) Big Data Engineer</h3>
        <h3>ZTE CORPORATION, Myanmar</h3>
        <p className={styles.date}>Sep 2022 - Aug 2023</p>
        <ul className={styles.details}>
          <li>Collaborated with R&D to resolve issues, monitored logs, alarms, and trace systems to help R&D teams quickly detect problems.</li>
          <li>Maintained KQI and KPI metrics, troubleshot, and managed server operations. Analyzed Big Data and used Linux, Spark, and SQL for server, data, and storage management.</li>
          <li>Conducted packet captures and hardware maintenance. Performed system health checks and monitored alarms.</li>
          <li>Implemented version updates, patches, and system administration. Performed backups and updated sites/cells data. Automated data processing and addressed data loss issues.</li>
        </ul>
      </div>

      <br></br>

      <div className={styles.experience}>
        
        <h3>SOC Analysis Support Engineer</h3>
        <h3>ZTE CORPORATION, Myanmar</h3>
        <p className={styles.date}>Sep 2022 - Aug 2023</p>
        <ul className={styles.details}>
        <li>Analyze and improve network performance.Conduct root cause analysis for
        issues.</li>
        <li>Evaluate daily traffic patterns and optimize. Assess and enhance Key </li>
        <li>Investigate and improve site and cell performance. Monitor Core KPIs for
        3G and 4G stability. </li>
        <li>Detect and address traffic anomalies, Optimize IP pool latency.</li>
        <li>Analyze weekly traffic trends, Identify and mitigate network security threats</li>
        </ul>
      </div>

      <div className={styles.experience}>
        
        <h3>System Engineer IPCC</h3>
        <h3>Huawei Technologies,MYANMAR</h3>
        <p className={styles.date}>July 2020 - May 2022</p>
        <ul className={styles.details}>
        <li>Configure and manage IVR, CTI, CSP, MIP MSP SMS offers, and e-sales data. </li>
        <li>Use HP Service Manager for trouble ticket management. Linux, and PLSQL for data management and customized reporting.</li>
        <li>Have experienced of UAP, GFEP, Datastation , WAS, Knowledgebase Management System, ACD (Automatic call distribution) design, and IVR (interactive voice response) in Huawei IPCC system.</li>
        <li>Solve complaints within SLA and analyze contact center calls. Manage skill queuing, Skillset, secondary Skillset, call reasons, trouble tickets, and agent KPIs.</li>
        <li>Update and manage IVR menus and call voice flows. Generate custom reports and handle emergency changes.</li>
        <li>Collaborate with CRM, CBS, T&P teams, Huawei experts, and Huawei Third Party  .Understand various domain Ooredoo NGBSS systems.</li>
        </ul>
      </div>

      <div className={styles.experience}>
        
        <h3>Testing & Project Support Engineer</h3>
        <h3>Huawei Technologies,MYANMAR</h3>
        <p className={styles.date}>Dec 2020 - May 2022</p>
        <ul className={styles.details}>
        <li>Collaborated with ZBJ IT and MPT IT on the new IPCC Project.Executed
urgent test cases for the MPT Club Project.</li>
<li>Tested call logs, agent skills, and Red List functionalities. Ensured seamless
integration and performance of the new IPCC.</li>
<li>Configured and tested IVR, USSD, call handling, and core network issues</li>
        </ul>
      </div>

      <div className={styles.experience}>
        
        <h3>Programmer</h3>
        <h3>DIR-ACE Technology Ltd.,MYANMAR</h3>
        <p className={styles.date}>Nov 2019 - Jan 2020</p>
        <ul className={styles.details}>
        <li>Analyze project requirements, timeboxed plan, and define project
architecture. Develop project workflow with rich pictures, define risks, and
create rollback plans to implement software maintenance</li>
<li>Maintain offshore microfinance software and Collaborate with team
members on project iterations and objectives.
</li>
        </ul>
      </div>
    
      <div className={styles.experience}>
        
        <h3>Programmer / SQL Developer</h3>
        <h3>ACE DataSystems,MYANMAR
        </h3>
        <p className={styles.date}>Oct 2017 - Apr 2018</p>
        <ul className={styles.details}>
        <li>Maintain Banking reports backend with Oracle SQL and design with Java.</li>
        <li>Experience with ACE Local and Infosys (Finacle) Core Banking.</li>
        <li>Maintain of AGD Bank reports. Develop and implement the GTB Bank Project</li>
        <li>collaboration with Indian developers(Infosys), bankers, and project engineers.</li>
        <li>Support Infosys (Finacle) Core Banking Training, Prepare user training and
functional guides and Enhance report design per local bankers' requests.
</li>
        </ul>
      </div>

      <div className={styles.experience}>
        
        <h3>Freelance Developer</h3>
        <h3>Self-Employed
        </h3>
        <p className={styles.date}>May 2017 - May 2020</p>
        <ul className={styles.details}>
        <li>Develop Software and website as per customer request, collaboration with
foreign developers to develop the website and software with trending
technologies. Training to customer about software system
</li>
        </ul>
      </div>
    </section>
  );
}

export default WorkExperience;
