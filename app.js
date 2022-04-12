const register = function(event){
    let sleepTime= document.querySelector('#sleep').value
    let wakeup=document.querySelector('#wakeup').value
//     let time1= new 
//    let time2= wakeup.getTime(wakeup)
//    let difference = time2-time1
//    let lapse = new Date(difference)
//    totaltime.innerHTML= (lapse.getHours()+':'+lapse.getMinutes())
   displaySleep.innerHTML=sleepTime
   displayWakeUp.innerHTML=wakeup
   event.preventdefault();
}