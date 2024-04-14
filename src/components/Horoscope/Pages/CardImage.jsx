import React from 'react'

export default function CardImage(props) {
  const { myLink, imagUrl, name } = props

  return (
      <div className='mycard'>
        <div className='img-ring'>
        <a href={myLink} style={{ display: 'flex', justifyContent: 'center' }}>
            <img className='card-image' src={imagUrl} />
          </a>
        </div>
        <span className='img-name'>{name} </span>
      </div>

  )
}
