


// get text return remove duplicet word and sort text by abc 
// get long text return how many words are duplicated.
// get text and password return encoded text & oppcite function (decode&encode)





/* get string return string in revers
const revString = (s) => {
    let char;
    const revS =  s.split('');
    const rev_string_len = revS.length;
    console.log(revS);
    let s1 = "";
    for(i = 0; i < rev_string_len; i++)
    {
        s1 = revS[i] + s1;
    }
    console.log(s1);

    s1 = ""

    for(i = rev_string_len; i > 0 ; i--)
    {
        s1 =  s1 + revS[i - 1];
    }
    console.log(s1);
  
}

revString('12345');
*/

/* 111 222 333 444
// 444 333 222 111

const revSentence = (words) => {
    
    let wordsArray = words.split(' ');
    console.log(wordsArray);
    const numOfWords = wordsArray.length;
    console.log(numOfWords);
    let revSent;
     
    for (revSent = '', i = 0; i < numOfWords; i++){
        let word = wordsArray[i];
        console.log(`word index ${i}: ${word}`);
        revSent +=  (revSent == '' ? '' : ' ') + word;
    }
    return revSent;
}
console.log(revSentence("eliadi watch hunter X hunter")); */




// 34215
// 45213


