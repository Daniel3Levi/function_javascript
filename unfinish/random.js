// get string return random string


// abcde = 5
// 0-4
// 3
// d

// abce = 4
// 0-3
// 0
// a

// bce = 3


const rnd_str = (str) => {
    
    let arr = str.split("");
    let l = arr.length;
    let new_str = "";

    for (i = 0; i < l; i++){
        
        
        let rnd1 =  Math.floor(Math.random() * (arr.length - 1));
      //console.log(rnd1)
        
      let rnd_char = arr[rnd1];
        //console.log(rnd_char);

        new_str += rnd_char;

        arr[rnd1] = "";
        arr = arr.join("").split("");
        //console.log(arr)
    }

    //console.log(new_str)
}
rnd_str("abcde"); 

// create an update version with diffrent and creative function

