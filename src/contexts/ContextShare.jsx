import React, { createContext, useState } from 'react'
export const addCourseContext = createContext()

const ContextShare = ({children}) => {
    const [addCourseResponse,setAddCourseResponse] = useState("")
  return (
    <addCourseContext.Provider value={{addCourseResponse,setAddCourseResponse}}>
        {children}
    </addCourseContext.Provider>
  )
}

export default ContextShare