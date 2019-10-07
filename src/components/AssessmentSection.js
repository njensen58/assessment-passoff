import React from 'react'
import AssessmentItem from './AssessmentItem.js'

const selectItems = arr => {
  const random = Math.floor(Math.random() * arr.length)
  return arr[random]
}

const AssessmentSection = ({data}) => {
  const {
    fundamental,
    medium,
    hard
  } = data

  const fundamentalSelect = selectItems(fundamental)
  const mediumSelect = selectItems(medium)
  const hardSelect = selectItems(hard)
  
  return (
    <div className="assessment-section">
      <p style={{fontWeight: 'bold', textDecoration: "underline"}}>Fundamental</p>
      <AssessmentItem i={1} text={fundamentalSelect}/>
      <p style={{fontWeight: 'bold', textDecoration: "underline"}}>Medium</p>
      <AssessmentItem i={2} text={mediumSelect}/>
      <p style={{fontWeight: 'bold', textDecoration: "underline"}}>Hard</p>
      <AssessmentItem i={3} text={hardSelect}/>
    </div>
  )
}

export default AssessmentSection