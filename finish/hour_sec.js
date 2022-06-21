// get number of sec return hour
// get hour return sec


const sec_to_hour = (sec) =>  {

let  hour = sec / 60;
return hour;

};

console.log(sec_to_hour(10000));

const hour_to_sec = (hour) =>  {

    let  sec = hour * 0.60 * 100;
    return sec;
    
    };
    
  
    console.log(hour_to_sec(45.9));

    