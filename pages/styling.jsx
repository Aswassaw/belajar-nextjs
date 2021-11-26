import React from "react";
import styles from "../styles/Styling.module.css";
import scss from "../styles/Styling.module.scss";
import styled from "styled-components";

const Title = styled.h3`
  font-size: 50px;
  color: red;
`;

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
      {/* SCSS Module */}
      <div className={scss.bgOrange}>Manusia Air</div>
      {/* Styled Components */}
      <Title>
        Manusia Tanah
      </Title>
    </div>
  );
};

export default Styling;
