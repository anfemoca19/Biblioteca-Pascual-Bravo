import styles from "../Modal/Modal.module.scss";

export default function Modal({ children, width, height, closeModal }) {
  return (
    <div className={styles.wrapper}>
      <div styles={{ width, height }} className={styles.content}>
        {children}
      </div>
    </div>
  );
}
