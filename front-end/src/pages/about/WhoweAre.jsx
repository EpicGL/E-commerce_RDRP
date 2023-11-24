import React from 'react'
import teamjpg from '../../assets/img/canva-studio.jpg'
const WhoweAre = () => {
  return (
      <section>
          <div className="container bg-white p-0">
              <h1 className='ps-5 pt-5'>Who We Are</h1>
              <p className='ps-5 pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, qui veniam. Suscipit esse molestias facere libero, excepturi, ullam rerum aperiam consectetur, cum quis laboriosam corrupti repellendus reprehenderit repellat magnam. Numquam.</p>
              <img style={{maxWidth:'100%', border:'1px solid #c8c8c8'}} src={teamjpg} alt="team-photo" />
          </div>
      </section>
  )
}

export default WhoweAre