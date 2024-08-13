import styles from './ProjectsStyles.module.css';

import gtb from '../../assets/gtb.jpg';
import mptclub from '../../assets/mptclub.jpg';
import mptipcc from '../../assets/mptipcc.jpg';
import laravelecommerce from '../../assets/laravelecommerce.jpg';
import djangoecommerce from '../../assets/djangoecommerce.jpg';
import youtubeapi from '../../assets/youtubeapi.jpg';
import geminiapi from '../../assets/geminiapi.jpg';
import oml from '../../assets/oml.jpg';
import oml2 from '../../assets/oml2.jpg';
import oml3 from '../../assets/oml3.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  const projects = [
    
    {
      images: [youtubeapi],
      link: 'https://youtube-api-clone.vercel.app/',
      name: 'Youtube API',
      description: 'Developed with react and Youtube API',
    },
    {
      images: [geminiapi],
      link: 'https://gemini-ai-clone-virid.vercel.app/',
      name: 'Gemini API',
      description: 'Developed with react and Gemini API',
    },
    {
      images: [laravelecommerce],
      link: 'https://www.cherrypeachtechnology.com/',
      name: 'laravel Ecommerce',
      description: 'Developed backend with php, laravel and frontend with vue',
    },
    {
      images: [djangoecommerce],
      link: 'https://github.com/zinmyoswe/Django-Ecommerce',
      name: 'Django Ecommerce',
      description: 'Developed backend with python, Django and stripe',
    },
    {
      images: [oml2],
      link: 'https://www.youtube.com/watch?v=AUmEVNgJTO0',
      name: 'Ooredoo OML Managed Service Project',
      description: 'Collaborate with R&D to resolve issues. Monitor logs, alarms, and trace systems to help R&D teams quickly detect problems. Maintain KQI and KPI metrics. Troubleshoot and manage server operations. Analyze Big Data and use Linux, Spark, and SQL for server, data and storage management. Conduct packet captures and hardware maintenance. Perform system health checks and monitor alarms. Implement version updates, patches, and system administration. Perform backups and update sites/cells data. Automate data processing and address data loss issues.',
    },
    // {
    //   images: [oml3],
    //   link: 'https://ooredoo.com.mm/portal/en/index',
    //   name: 'Ooredoo OML Managed Service Project',
    //   description: 'Configure and manage IVR, CTI, CSP, MIP MSP SMS, and e-sales data. Use HP Service Manager, Linux, and PLSQL for data management. Create/manage service level agreements and analyze contact center calls. Manage skill queuing, call reasons, trouble tickets, and agent KPIs. Update and manage IVR menus and voice flows. Generate custom reports and handle emergency changes. Collaborate with CRM, CBS, T&P teams, and Huawei experts .',
    // },
    {
      images: [oml],
      link: 'https://ooredoo.com.mm/portal/en/index',
      name: 'Ooredoo NGBSS Managed Service Project',
      description: 'Configure and manage IVR, CTI, CSP, MIP MSP SMS, and e-sales data. Use HP Service Manager, Linux, and PLSQL for data management. Create/manage service level agreements and analyze contact center calls. Manage skill queuing, call reasons, trouble tickets, and agent KPIs. Update and manage IVR menus and voice flows. Generate custom reports and handle emergency changes. Collaborate with CRM, CBS, T&P teams, and Huawei experts .',
    },
    {
      images: [mptipcc],
      link: 'https://kf-mptcallcenter.mpt.com.mm/login',
      name: 'MPT Project Support IPCC ( NGBSS Managed Service upgrade Project)',
      description: 'Collaborated with ZBJ IT and MPT IT on the new IPCC Project. Tested call logs, agent skills, and Red List functionalities. Ensured seamless integration and performance of the new IPCC. Configured and tested IVR, USSD, call handling, and core network issues',
    },
    {
      images: [mptclub],
      link: 'https://mpt.com.mm/en/mpt-club/',
      name: 'MPT Club Project',
      description: 'Executed urgent test cases for the MPT Club Project.',
    },
    {
      images: [gtb],
      link: 'https://www.gtbmm.com/',
      name: 'Global Treasure Bank Upgrade Infosys Core Banking Project',
      description: 'Maintain Banking reports backend with Oracle SQL and design with Java.Implement the GTB Bank Project collaboration with Indian developers(Infosys), bankers, and project engineers and Enhance report design per local bankers requests ',
    },
  ];

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <div key={index} className={styles.project}>
            <div className={styles.imageContainer}>
              {project.images.map((src, imgIndex) => (
                <img key={imgIndex} src={src} alt={project.name} />
              ))}
            </div>
            <div className={styles.details}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="hover">View Project</button>
                
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
