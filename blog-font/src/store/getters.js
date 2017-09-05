

//顶部提示语 上午好;
export const helloInfo = state => {
  let str='',nowYear,nowMonth,newDay,hour,now,day
  now = new Date();
  hour = now.getHours();
  nowYear = now.getFullYear();
  nowMonth = now.getMonth()-0+1;
  day = now.getDate();
  newDay = now.getDay()-0;
  switch(newDay){
    case 0: {
      newDay="星期日";
      break;
    }
    case 1: {
      newDay="星期一";
      break;
    }
    case 2: {
      newDay="星期二";
      break;     
    }
    case 3: {
      newDay="星期三";
      break;   
    }
    case 4: {
      newDay="星期四";
      break;     
    }
    case 5: {
      newDay="星期五";
      break;     
    }
    case 6: {
      newDay="星期六";
      break;    
    }                
  }
  if(hour < 6){str="凌晨好！"} 
  else if (hour < 9) {str="早上好！"} 
  else if (hour < 12){str="上午好！ "} 
  else if (hour < 14){str="中午好！ "} 
  else if (hour < 17){str="下午好！ "} 
  else if (hour < 19){str="傍晚好！ "} 
  else if (hour < 22){str="晚上好！ "} 
  else {str=("夜里好！")} 
  str=str+nowYear+"年"+nowMonth+"月"+day+"日 "+newDay;
  return str;
}