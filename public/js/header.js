let header = document.getElementById("header")

function initializeHeader(){
  topHeader = document.getElementById("header")
  animated = false

  window.addEventListener("scroll", async function() {
    if (document.body.scrollTop > header.offsetHeight || document.documentElement.scrollTop > header.offsetHeight){
      topHeader.classList.add("header-load-in")
      if(animated == false){
        topHeader.animate(headerSlideDown, {duration: 500, iteration: 1})
        animated = true
      }
    } else{
      let browser = detectBrowser()
      if (browser == "Chrome"){
        if (document.documentElement.scrollTop == 0){
          topHeader.classList.remove("header-load-in")
          topHeader.animate([{backgroundColor: 'rgba(255, 255, 255, .25)', boxShadow: '0px 10px 6px rgba(0, 0, 0, .15)'}, {backgroundColor: 'rgba(255, 255, 255, 0)', boxShadow: '0px 10px 6px rgba(0, 0, 0, 0)'}], {duration: 500, iteration: 1})
          animated = false
        }
      } else if (browser == "MSIE"){
        topHeader.classList.remove("header-load-in")
        animated = false
      } 
    }
  })
}

function detectBrowser() { 
  if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
    return 'Opera';
  } else if(navigator.userAgent.indexOf("Chrome") != -1 ) {
    return 'Chrome';
  } else if(navigator.userAgent.indexOf("Safari") != -1) {
    return 'Safari';
  } else if(navigator.userAgent.indexOf("Firefox") != -1 ){
    return 'Firefox';
  } else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {
    return 'IE';
  } else {
    return 'Unknown';
  }
} 

initializeHeader()