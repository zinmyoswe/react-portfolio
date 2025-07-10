import styles from './ContactStyles.module.css';
import linelogo from '../../assets/line.jpg';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>

      <div className={styles.card}>
       

        <div className={styles.item}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/455/455705.png"
            alt="Phone"
            className={styles.icon}
          />
          <span>+66-946150376</span>
        </div>

        <div className={styles.item}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
            alt="Email"
            className={styles.icon}
          />
          <span>zinmyoswe.2017@gmail.com</span>
        </div>

        <div className={styles.item}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
            alt="Location"
            className={styles.icon}
          />
          <span>Hua Mak, Bankapi district, 10240, Bangkok, Thailand</span>
        </div>

        <div className={styles.item}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            alt="WhatsApp"
            className={styles.icon}
          />
          <span>+66-946-150-376</span>
        </div>

        <div className={styles.item}>
          <img
            src={linelogo}
            alt="linelogo"
            className={styles.icon}
          />
          <span>Line ID: zinmyo2345</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
