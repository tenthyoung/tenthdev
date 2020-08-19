import { Link } from "gatsby"
import { Box } from "theme-ui"
import PropTypes from "prop-types"
import React from "react"

const Navbar = ({ siteTitle }) => (
  <Box as="header"
    className="NavBar"
    sx={{
      backgroundColor: "white",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </Box>
)

export default Navbar
