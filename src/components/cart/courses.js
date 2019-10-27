import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import CourseCart from './courseCart'

const Courses = () => (
    <StaticQuery
      query={graphql`
        query {
            mycourses: allContentfulCoureses {
              edges {
                node {
                  id
                  title
                  price
                  category
                  discription {
                    discription
                  }
                  image {
                    fixed(height: 150, width: 200) {
                      ...GatsbyContentfulFixed_tracedSVG
                    }
                  }
                }
              }
            }
          }
      `}
      render={data => {
        return (
            <CourseCart Courses={data.mycourses.edges} />
        )
      }}
    />
  )
  
  export default Courses
