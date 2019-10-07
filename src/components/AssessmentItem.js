import React from 'react'

const AssessmentItem = ({i, text}) => {
  return (
    <div>
      <p>{ i }: { text }</p>
    </div>
  )
}

export default AssessmentItem