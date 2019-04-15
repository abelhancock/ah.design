import { Link } from 'gatsby'
import React from 'react'
import styles from './styles.module.scss'
import Container from '../../molecules/Container'

const Header = () => (
  <Container className={styles.header}>
        <Link
          to="/"
          activeClassName={styles.active}
        >
          AH
        </Link>
        <Link
          to="/work"
          activeClassName={styles.active}
        >
          Work
        </Link>
        <Link
          to="/about"
          activeClassName={styles.active}
        >
          About
        </Link>
  </Container>
)

export default Header
