import React from 'react'

const PageWrapper = ({children}: { children: React.ReactElement }) => {

  return (
    <div className="wrapper-container w-screen h-screen flex p-1 bg-cyan-300 " >
        {children}
    </div>
  )
}

export default PageWrapper