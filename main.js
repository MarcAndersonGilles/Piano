document.addEventListener("keydown", (e) => {
    const key = e.keyCode
    const dataKey = document.querySelector(`[data-key="${key}"]`)
    
    if(!dataKey){
     return;
    }
    if(dataKey ){
     dataKey.classList.add("bg-blue-500")
    }
   })

   document.addEventListener("keyup", (e) => {
     const key = e.keyCode;
     const dataKey = document.querySelector(`[data-key="${key}"]`);
    
     if(!dataKey){
       return;
      }
     if (dataKey) {
       dataKey.classList.remove("bg-blue-500");
     }
   });