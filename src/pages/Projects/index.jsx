import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from "gatsby"

import sloth from '../../images/hanging-sloth.png'


const Projects = ({ data }) => (
  
  <>
    <a id="projects" className='body'></a>
    <div className='body-content'>
      <img alt="Sloth hanging from a branch" src={sloth} className='hanging-image' />
      <h2 className="heading">I GOT SWEET F-A PROJECTS</h2>
      <p>This is my project.</p>
      <p>Literally, what else you expect?</p>
      <p>I got nothin else r u happy!?!?!</p>
      <p>Shut up</p>
      <p>Dick.</p>
      <br />
      {data.edges.map((edge, i) => {
        return ( 
        <>
          <h1 key={i}>{edge.node.title}</h1>
          <p>{edge.node.paragraph.paragraph}</p>
        </>
        )
      })}
    </div>
  </>
)


export default  () => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        allContentfulProject {
          edges {
            node {
              title
              paragraph {
                paragraph
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Projects data={data.allContentfulProject} />
    )}
  />
)