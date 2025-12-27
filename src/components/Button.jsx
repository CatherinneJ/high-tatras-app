import React from 'react'

const Button = ({ text, className, id }) => {
  return (
    <a className={`${className ?? ''} cta-wrapper`}>
        <div className="cta-button group">
            <div className="bg-circle" />
            <p className="text">{text}</p>
        </div>
        <div className="arrow-wrap">
            <img src="/images/arrow.svg" alt="arrow" />
        </div>
    </a>
  )
}

export default Button
