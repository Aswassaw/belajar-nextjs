import React from "react";
import styles from "../styles/Styling.module.css";

const Styling = () => {
  return (
    <div>
      {/* Global */}
      <h1>Styling</h1>
      {/* Bootstrap */}
      <button type='button' className='btn btn-primary'>
        Button
      </button>
      {/* Module */}
      <div className={styles.card} id='card'>
        Manusia Api
      </div>
    </div>
  );
};

export default Styling;
