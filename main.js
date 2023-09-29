document.addEventListener("keydown", (e) => {
    const key = e.keyCode
    const dataKey = document.querySelector(`[data-key="${key}"]`)
    const dataAudio = document.querySelector(`audio[data-key="${key}"]`)
    
    if(!dataKey){
      return;
     }
    if(!dataAudio){
     return;
    }
    if(dataKey ){
     dataKey.classList.add("bg-blue-500")
     dataAudio.play()
     dataAudio.currentTime = 0
    }
   })

   document.addEventListener("keyup", (e) => {
     const key = e.keyCode;
     const dataAudio = document.querySelector(`audio[data-key="${key}"]`)
     const dataKey = document.querySelector(`[data-key="${key}"]`);
     
    
     if(!dataKey){
       return;
      }
      if(!dataAudio){
        return;
       }
     if (dataKey) {
       dataKey.classList.remove("bg-blue-500");
    
     }
   });