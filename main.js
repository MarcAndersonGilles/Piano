//// add event listener to all keys on keydown event
document.addEventListener("keydown", (e) => {
    // get the key code from the keyboard
    const key = e.keyCode;
   
   /// access the audio and div element with the data-key attribute
  const dataKey = document.querySelector(`[data-key="${key}"]`)
  const dataAudio = document.querySelector(`audio[data-key="${key}"]`)

  if (!dataKey) {
    return;
  }
  if (!dataAudio) {
    return;
  }
  if (dataKey) {
    dataKey.classList.add("bg-blue-500")
    /// play the notes
    dataAudio.play()
    // reset the audio to 0
    dataAudio.currentTime = 0
  }
  //console log the key to see the current keycode of the key
  console.log(key)
})

//// add event listener to all keys on keyup event
document.addEventListener("keyup", (e) => {
  // get the key code from the keyboard
  const key = e.keyCode;
  /// access the audio and div element with the data-key attribute
  const dataAudio = document.querySelector(`audio[data-key="${key}"]`)
  const dataKey = document.querySelector(`[data-key="${key}"]`);

  if (!dataKey) {
    return;
  }
  if (!dataAudio) {
    return;
  }
  if (dataKey) {
    // remove bg blue
    dataKey.classList.remove("bg-blue-500");
  }
});