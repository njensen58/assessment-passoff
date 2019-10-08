import React, { useState } from 'react'
import SelectForm from './SelectForm.js'
import Assessment from './Assessment.js'
import { module0 } from '../data/module-0.json'
import { module1 } from '../data/module-1.json'
import { module2 } from '../data/module-2.json'


const ModuleAssessment = () => {
  const [ selectedModule, setSelectedModule ] = useState({})

  const handleModuleSelect = m => {
    if(m.module === "module-0")      setSelectedModule({...module0, title: m.module})
    else if(m.module === "module-1") setSelectedModule({...module1, title: m.module})
    else if(m.module === "module-2") setSelectedModule({...module2, title: m.module})
  }

  return (
    <div>
      <SelectForm handleModuleSelect={handleModuleSelect}/>
      <Assessment selectedModule={selectedModule}/>
    </div>
  )
}

export default ModuleAssessment