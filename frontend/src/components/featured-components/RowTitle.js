import React from 'react'

export default function RowTitle({ title, id }) {
  return (
    <div className="RowTitle">
      <h1 style={{
        fontSize: '24px',
        lineHeight: '28px',
        letterSpacing: '-0.04em',
        fontWeight: '700',
        color: 'white'
      }}>
        {title}
      </h1>
      {id ? <a href={`/tracks?genre=${id}`} className='seeAll'>see all</a> : null}
    </div>
  )
}
