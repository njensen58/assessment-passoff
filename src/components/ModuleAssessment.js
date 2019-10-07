import React, { useState } from 'react'
import SelectForm from './SelectForm.js'
import Assessment from './Assessment.js'
import { modules } from '../data/moduleData.json'

const ModuleAssessment = () => {
  const [ selectedModule, setSelectedModule ] = useState({})

  const handleModuleSelect = m => {
    if(m.module === "module-0")      setSelectedModule({...modules["module-0"], title: m.module})
    else if(m.module === "module-1") setSelectedModule({...modules["module-1"], title: m.module})
    else if(m.module === "module-2") setSelectedModule({...modules["module-2"], title: m.module})
  }

  return (
    <div>
      <SelectForm handleModuleSelect={handleModuleSelect}/>
      <Assessment selectedModule={selectedModule}/>
    </div>
  )
}

export default ModuleAssessment