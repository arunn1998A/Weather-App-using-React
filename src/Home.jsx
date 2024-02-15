import React from 'react'
import './style.css'
function Home() {
  return (
    <>
        <div className="container">
            <div className="weather">
                <div className="search">
                    <input type="text" placeholder='enter city name' />
                    <button><img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/c4d5662235034.560a96353b47a.gif" alt="" /></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home