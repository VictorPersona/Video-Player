import { useState } from 'react'

import './App.css'
import Menu from './assets/Menu'
import Video from './assets/Video'
import data from './assets/data'

function App() {
  const [selectedOption, setSelectedOption] = useState({
    id: '',
    src: './assets/videos/3.mp4',
    title: '',
    description: '',
  })
  function handleOptionChange(option) {
    setSelectedOption(data[option - 1])
  }
  /*
  1) Radio button Menu for taking the user input
  2) Display the video

> Menu compopnent  with radio form input
--> Save the input and pass it to video component
-->Video component taking props as which video to play
*/

  return (
    <>
      <h1>Video Player</h1>
      <Menu
        handleOptionChange={handleOptionChange}
        selectedOption={selectedOption}
      />
      <Video selectedVideo={selectedOption} />
    </>
  )
}

export default App
