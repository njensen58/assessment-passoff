import React from 'react'
import AssessmentSection from './AssessmentSection.js'

const Assessment = ({selectedModule}) => {
  const {
    assignments,
    questions,
    showMe,
    title
  } = selectedModule

  return (
    <div>
      <h1>{title && title[0].toUpperCase() + title.slice(1) + " Assessment"}</h1>
      { assignments && 
        <>
          <h2>Assignments</h2>
          <AssessmentSection data={assignments}/>
          <h2>Questions</h2>
          <AssessmentSection data={questions}/>
          <h2>Show Me</h2>
          <AssessmentSection data={showMe}/>
        </>
      }
    </div>
  )
}

export default Assessment