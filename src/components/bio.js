/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"

function Bio({userName}) {
  return (
    <div>
      <p>This article is written by <a href={`https://github.com/${userName}`}>{userName}</a></p>
    </div>
  )
}

export default Bio