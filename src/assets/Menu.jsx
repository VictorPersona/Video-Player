import React, { useState } from 'react'
import '../App.css'

function Menu({ handleOptionChange, selectedOption }) {
  return (
    <form className="checkForm">
      <div>
        <label htmlFor="1">
          <input
            type="radio"
            value="Car"
            checked={selectedOption && selectedOption.id === '1'}
            onChange={() => handleOptionChange(1)}
          />
          Car
        </label>
      </div>
      <div>
        <label htmlFor="2">
          <input
            type="radio"
            value="God"
            checked={selectedOption && selectedOption.id === '2'}
            onChange={() => handleOptionChange(2)}
          />
          God
        </label>
      </div>
      <div>
        <label htmlFor="3">
          <input
            type="radio"
            value="test"
            checked={selectedOption && selectedOption.id === '3'}
            onChange={() => handleOptionChange(3)}
          />
          Test
        </label>
      </div>
    </form>
  )
}

export default Menu
