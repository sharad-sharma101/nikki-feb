import React from 'react'

const PageWrapper = ({children}: { children: React.ReactElement }) => {

  return (
    <div className="wrapper-container w-screen h-screen flex bg-[#8AAAE5] " >
        {children}
    </div>
  )
}

export default PageWrapper