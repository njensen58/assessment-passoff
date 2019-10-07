import { useState } from 'react'

const useFormProperties = (initInputs, submitCb) => {
  const [ inputs, setInputs ] = useState(initInputs)

  const handleChange = e => {
    const { name } = e.target
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    setInputs(prevInputs => ({...prevInputs, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    submitCb(inputs)
    setInputs(initInputs)
  }

  return { handleChange, handleSubmit }
}

export default useFormProperties