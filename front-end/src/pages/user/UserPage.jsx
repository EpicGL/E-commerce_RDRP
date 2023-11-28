import React from 'react'
import SidBar from './SidBar'
const UserPage = () => {

    return (
        <section>
            <div >
                <div className='user-page-banner'></div>
                <div className="container" >
                    {<SidBar/>}
                </div>

            </div>
        </section>
  )
}

export default UserPage