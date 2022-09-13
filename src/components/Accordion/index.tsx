import { FC, useState } from 'react';
import styles from './Accordion.module.scss';
import { accordionItems } from './accordionItems';

const Accordion: FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (selected === index) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  };

  return (
    <div className={styles.wrapper}>
      {accordionItems.map((item, index) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.heading}>
            <h5 className={styles.title}>{item.title}</h5>
            <button
              className={styles.btn}
              type="button"
              onClick={() => toggle(index)}
            >
              {selected === index ? (
                <svg
                  width="14"
                  height="2"
                  viewBox="0 0 14 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 1.00012C0 0.447837 0.348223 0.00012207 0.777778 0.00012207L13.2222 0.00012207C13.6518 0.00012207 14 0.447837 14 1.00012C14 1.55241 13.6518 2.00012 13.2222 2.00012L0.777778 2.00012C0.348223 2.00012 0 1.55241 0 1.00012Z"
                    fill="white"
                  />
                </svg>
              ) : (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.20068 1L7.20068 13M1 7.01648H13"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className={selected === index ? styles.show : styles.content}>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
