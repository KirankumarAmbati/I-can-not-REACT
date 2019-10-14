import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const styles = {
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: rhythm(34),
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
    }
    let header

    location.pathname === rootPath
      ? (header = (
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(1.5),
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
        ))
      : (header = (
          <h3
            style={{
              fontFamily: `Montserrat, sans-serif`,
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h3>
        ))

    return (
      <div style={styles}>
        <header>{header}</header>
        <main>{children}</main>
        <footer>Crafted by the people, for the people.</footer>
      </div>
    )
  }
}

export default Layout
