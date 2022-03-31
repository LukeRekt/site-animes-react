import { useState } from "react";
import styles from "./Tabsteste.module.css";

function Tabsteste() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.bloc_tabs}>
        <button
          className={toggleState === 1 ? `${styles.tabs} ${styles.active_tabs}` : `${styles.tabs}`}
          onClick={() => toggleTab(1)}
        >
          Tab 1
        </button>
        <button
          className={toggleState === 2 ? `${styles.tabs} ${styles.active_tabs}` : `${styles.tabs}`}
          onClick={() => toggleTab(2)}
        >
          Tab 2
        </button>
        <button
          className={toggleState === 3 ? `${styles.tabs} ${styles.active_tabs}` : `${styles.tabs}`}
          onClick={() => toggleTab(3)}
        >
          Tab 3
        </button>
      </div>

      <div className={styles.content_tabs}>
        <div
          className={toggleState === 1 ? `${styles.content}  ${styles.active_content}` : `${styles.content}`}
        >
          <h2>Conteudo 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p>
        </div>

        <div
          className={toggleState === 2 ? `${styles.content}  ${styles.active_content}` : `${styles.content}`}
        >
          <h2>Conteudo 2</h2>
          <p>
            bbbbbb
          </p>
        </div>

        <div
          className={toggleState === 3 ? `${styles.content}  ${styles.active_content}` : `${styles.content}`}
        >
          <h2>Conteudo 3</h2>
          <p>
            aaaa
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabsteste;