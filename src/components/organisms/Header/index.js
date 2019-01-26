import { Link } from 'gatsby'
import React from 'react'
import styles from './styles.module.scss'
import Container from '../../molecules/Container'

const Header = () => (
  <Container className={styles.header}>
        <Link
          to="/"
          activeStyle={{
            color: "#BD453A",
            fontWeight: "700",
          }}
        >
          AH
        </Link>
        <Link
          to="/"
        >
          Work
        </Link>
        <Link
          to="/"
        >
          About
        </Link>
  </Container>
)

export default Header
