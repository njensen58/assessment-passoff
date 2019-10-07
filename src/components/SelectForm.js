import React from 'react'
import useFormProperties from '../hooks/useFormProperties.js'

const SelectForm = ({ handleModuleSelect }) => {
  const initInputs = { module: "" }
  
  const {
    handleChange,
    handleSubmit
  } = useFormProperties(initInputs, handleModuleSelect)
  
  return (
    <form onSubmit={handleSubmit}>
      <select onChange={handleChange} name="module">
        <option value="">- Select Module</option>
        <option value="module-0">Module 0</option>
        <option value="module-1">Module 1</option>
        <option value="module-2">Module 2</option>
      </select>
      <button>Submit</button>
    </form>
  )
}

export default SelectForm