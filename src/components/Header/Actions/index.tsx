import { FC } from 'react';
import styles from './Actions.module.scss';

interface IActions {
  open: boolean;
  onClick: () => void;
}

const Actions: FC<IActions> = ({ open, onClick }) => {
  return (
    <button type="button" className={styles.dropdownMenu} onClick={onClick}>
      {open ? (
        <svg
          className={styles.menuOpenIcon}
          width="22"
          height="17"
          viewBox="0 0 22 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 1.5C0 0.671573 0.671573 0 1.5 0H20.5C21.3284 0 22 0.671573 22 1.5C22 2.32843 21.3284 3 20.5 3H1.5C0.671573 3 0 2.32843 0 1.5ZM5 8.5C5 7.67157 5.67157 7 6.5 7H20.5C21.3284 7 22 7.67157 22 8.5C22 9.32843 21.3284 10 20.5 10H6.5C5.67157 10 5 9.32843 5 8.5ZM1.5 14C0.671573 14 0 14.6716 0 15.5C0 16.3284 0.671573 17 1.5 17H20.5C21.3284 17 22 16.3284 22 15.5C22 14.6716 21.3284 14 20.5 14H1.5Z"
            fill="black"
          />
        </svg>
      ) : (
        <svg
          className={styles.menuCloseIcon}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.54151 17.5071C3.9754 18.0774 3.97541 19.002 4.54151 19.5723C5.10761 20.1425 6.02544 20.1425 6.59155 19.5723L11.9998 14.1241L17.4081 19.5723C17.9742 20.1426 18.8921 20.1426 19.4582 19.5723C20.0243 19.002 20.0243 18.0774 19.4582 17.5071L14.0499 12.0589L19.5751 6.49287C20.1412 5.9226 20.1412 4.99799 19.5751 4.42771C19.009 3.85743 18.0912 3.85743 17.5251 4.42771L11.9998 9.99372L6.47461 4.42772C5.90851 3.85744 4.99068 3.85744 4.42458 4.42772C3.85847 4.998 3.85848 5.92261 4.42458 6.49289L9.9498 12.0589L4.54151 17.5071Z"
            fill="black"
          />
        </svg>
      )}
    </button>
  );
};

export default Actions;
