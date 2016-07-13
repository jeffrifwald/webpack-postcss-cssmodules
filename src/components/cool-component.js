import React from "react";

import styles from "../styles/cool-component.css";


class CoolComponent extends React.Component {
  render() {
    return (
      <div className={styles.specialMessage}>
        Hello CoolComponent
      </div>
    );
  }
}

export default CoolComponent;
