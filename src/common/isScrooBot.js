
export default {
  isScrollBottom(){
    const winH = document.documentElement.clientHeight;
    const docH = document.documentElement.scrollHeight;
    const scrollH = document.documentElement.scrollTop;

    if(winH + scrollH - docH >= -180){
      return true
    }
  }
}

