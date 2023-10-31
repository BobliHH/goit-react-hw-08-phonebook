import React from 'react';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: 'black',
  },
  activeLink: {
    color: '#0864e4',
  },
};

const Navigation = () => (
  <nav>
    <div to="" exact style={styles.link} activeStyle={styles.activeLink}>
      Main
    </div>
    <div to="" exact style={styles.link} activeStyle={styles.activeLink}>
      Phonebook
    </div>
  </nav>
);

export default Navigation;
