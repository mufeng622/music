/*
* timeFilter: 时间过滤器，将毫秒转化成正常格式日期
* @params: times 为传递进来的时间值；isHours 为是否需要显示时分秒，默认为false，可以在调用地方传值
*
* changeNum: 数值过滤器，大于1万返回X万，小于1万返回数值
* @params：num 基础数值
* */

const myFilters = {

  timeFilter: (times, isHours=false)=>{
    let fullTime = new Date(times);
    var years = fullTime.getFullYear();
    var months = fullTime.getMonth();
    var days = fullTime.getDate();
    var hours = fullTime.getHours();
    var minutes = fullTime.getMinutes();
    var seconds = fullTime.getSeconds();

    months = months < 10 ? '0' + months : months;
    days = days < 10 ? '0' + days : days;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return isHours ? `${years}-${months}-${days} ${hours}:${minutes}:${seconds}` : `${years}-${months}-${days}`
  },

  changeNum(num){
    let numArr = String(num).split('');
    let numArrLen = numArr.length;
    if(numArrLen > 4){
      return numArr.splice(0, numArrLen-4).join('') + '万'
    }else{
      return numArr.join('')
    }
  }
};

export default myFilters;



