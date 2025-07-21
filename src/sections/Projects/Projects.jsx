import styles from './ProjectsStyles.module.css';
import carParkingVideo from '../../assets/carparkingiconsiam.mp4'; 
import NikecloneVideo from '../../assets/nikevd1.mp4'; 
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
import busdashboard3 from '../../assets/busdashboard3.jpg';
import nflix from '../../assets/nflix.jpg';
import img1 from '../../assets/landingpage.png';
import img2 from '../../assets/FavouriteModal.png';
import img3 from '../../assets/favourite.png';
import img4 from '../../assets/productdetail.png';
import img5 from '../../assets/productdetailmodal.png';
import img6 from '../../assets/men.png';
import img7 from '../../assets/women2.png';
import img8 from '../../assets/slider.png';
import img9 from '../../assets/shoe3.png';
import img10 from '../../assets/shippingpage.png';
import img11 from '../../assets/cartpage2.png';
import img12 from '../../assets/payment.png';
import img13 from '../../assets/search2.png';
import traveldashboard from '../../assets/traveldashboard.png';



import ProjectCard from '../../common/ProjectCard';
import { useEffect, useState } from 'react';





function Projects() {

  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentCarouselIndex(prev => (prev + 1) % (projects[0].carousel?.length || 1));
  }, 3000); // 1s

    return () => clearInterval(interval);
  }, []);

  const projects = [

    {
      carousel: [ img2, img3, img4, img5, img6, img1, img7, img8, img9, img10, img11, img12, img13],
      name: 'React and Laravel API Fullstack Ecommerce',
      description: 'Developed with frontend React, tailwindcss and backend php Laravel API',
      link: 'https://react-and-laravel-api-ecommerce.vercel.app/',
    },
    
    
    {
      videos: [carParkingVideo], // Add video
      link: 'https://carpark.iconsiam.com/webpayment',
      name: 'Cashless Car Parking Web Payment System for ICONSIAM Project',
      description: 'maintenance and migrations of car parking webpayment system with SCB, Bangkok Bank BBL, Ksherpay, thaiQR Payment system as per customer (Iconsiam, central world, MBK) request. Developed with Banking API, .NETCore API Backend, Javascript and .NETCore MVC frontend.',
    },
    {
      youtubeLink: 'https://www.youtube.com/embed/lBvpfUnsif0?autoplay=1&mute=1&loop=1&playlist=lBvpfUnsif0&controls=0&modestbranding=1&showinfo=0&rel=0&disablekb=1&fs=0',
      link: 'https://smartparking-payment.mbkgroup.co.th/webpayment', // Replace with the correct link
      name: 'Cashless Car Parking Web Payment System and Web Stamp for MBK Project',
      description: 'maintenance and migrations of webpayment and web stamp system with Banking API, .NETCore API Backend, Javascript and .NETCore MVC frontend. Customer can get carparking discount when they stamp on receipt page such as 3000 baht receipt for 2 hrs free when making car parking QR payment  ',
    },

    

    {
      videos: [NikecloneVideo], // Add video
      link: 'https://test.peachcherrytechnology.com/index.html',
      name: 'Nike Clone',
      description: 'Developed with HTML, CSS and Javascript and pending to Integrate with backend API',
    },

    {
      images: [busdashboard3],
      // link: 'https://itd-layout2-test.transportation-dashboard.com/',
      link: 'https://layout2.transportation-dashboard.com/',
      name: 'ICONSIAM Transportation Dashboard Project',
      description: 'Maintain of ICONSIAM Transportation Dashboard with .NETCORE MVC, Javascript and API of Thai Smile Bus, Thai Smile Boat, Supatra Boat, BTS, Parking available and Queing',
    },
    
    
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
    // {
    //   images: [traveldashboard],
    //   link: 'https://travel-dashboard2.vercel.app/',
    //   name: 'React Travel Dashboard',
    //   description: 'Developed with react ,react router v7, Google Auth, appwrite and stripe',
    // },
    {
      images: [nflix],
      link: 'https://movieapi.peachcherrytechnology.com/',
      name: 'Movie API',
      description: 'Developed with react and TMDB API',
    },
    {
      images: [laravelecommerce],
      link: 'https://www.cherrypeachtechnology.com/',
      name: 'laravel Ecommerce',
      description: 'Developed backend with php, laravel and frontend with vue',
    },
    {
      images: [djangoecommerce],
      link: 'https://zinmyo456.pythonanywhere.com/',
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

              {project.carousel && (
                <img
                  src={project.carousel[currentCarouselIndex]}
                  alt={project.name}
                  className={styles.carouselImage}
                />
              )}
             
              {project.videos && project.videos.map((videoSrc, vidIndex) => (
                <video key={vidIndex} src={videoSrc} autoPlay muted loop playsInline className={styles.video} />
              ))}
  
              {project.youtubeLink && (
                <iframe
                  className={styles.video}
                  src={project.youtubeLink}
                  title={project.name}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              )}
  
              {project.images && project.images.map((src, imgIndex) => (
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
