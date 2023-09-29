import React from 'react';

import loading from "./loading.gif.gif"

export default function Spinner() {
  return (
    <div>
      <img className='loading' src={loading} alt="laoding" />
    </div>
  )
}