/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import {withPrefix} from 'gatsby'
import "./layout.css"

import logo from "../images/logo.svg"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: "90%",
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          marginTop: "3vh",
        }}
      >
        <div>
          <h1 style={{textTransform: "uppercase", float: "left"}}>
            <img 
              style={{
                verticalAlign: "middle",
                height: "3rem",
                margin: 0,
                border: "2px solid black",
                marginRight: "6px",
                marginTop: "-0.3rem",
              }}
              src={logo}
            />
            {data.site.siteMetadata.title}
          </h1>
          <div style={{float: "right", fontWeight: "bold", marginTop: "1rem"}}>
            <span style={{marginRight: `10px`}}>
              <Link to="/manual">Manual</Link>
            </span>
            <span><a href={withPrefix(`/pedigree-test.csv`)}>Sample CSV File</a></span>
          </div>
          <div style={{clear: "both"}}></div>
        </div>
        <main style={{minHeight: "70vh", marginTop: "20px"}}>
          {children}
        </main>
        <footer style={{marginTop: "20px", textAlign: "center"}}>
          © {new Date().getFullYear() + 543} CodeForThailand,
          Developed by <a href="http://pat.chormai.org">Pattarawat</a> & <a href="https://th-th.facebook.com/PoultryResearchAndDevelopmentCenter/">Theerachai Chormai</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
