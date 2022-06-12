import React from 'react'

function Page404() {
  return (
    <React.Fragment>
    <svg id='not-found-svg' viewBox="0 0 1000 400">
      <text id="willie" x="50%" y="50%" textAnchor="middle" fill="none">
        404
      </text>
      <use xlinkHref="#willie" className="will will1" />
      <use xlinkHref="#willie" className="will will2" />
      <use xlinkHref="#willie" className="will will3" />
      <use xlinkHref="#willie" className="will will4" />
      <use xlinkHref="#willie" className="will will5" />
    </svg>

  </React.Fragment>
  )
}

export default Page404;