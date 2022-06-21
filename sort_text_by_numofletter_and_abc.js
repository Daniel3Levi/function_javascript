// get long text return sort by num of letter in each word & orderd by abc.

const long_text = `Unfunny at best, offensive at worst...
I found both of these episodes very disturbing, but in two different ways. C. H. U. M was gross, though it's to be expected with the subject of chum at all.

However, I was not expecting the stereotypes to be as distasteful as they wound up being in Something Narwhal this Way Comes. The Narwhals were impolite, brash, gross, stupid, and annoying in all the typical negative stereotypes. I know this is, of course, just a cartoon, but some of the implications in this one were offensive in my opinion. I was sad to see this, though I admit I heavily dislike gross-out humor. It used to be used more sparingly than it is now.

Modern Spongebob can still be good and funny, but these both left me feeling more uncomfortable than amused. Spongebob is a favorite show of mine, but the second episode in this with the Narwhals is honestly one of the least funny ones I have seen.

The only positive thing I can really say is that I was glad that, in common Spongebob fashion, Plankton's plan being foiled was funny, and as usual for Plankton, there were some funny and witty lines he said.`;



const word_comparison_by_num_of_letter = (word1,word2) => {
    let big_word = 0;
    if (word1.length > word2.length){

        big_word = word1;
        return big_word;
    } else if (word1.length === word2.length) {
        big_word = [...word1,...word2];
        return big_word;
    } 
};

const word_comparison_by_abc = (word,arr) => {
    let a_word = [];
    for (i = 0; i<arr.length; i++){
        if (word >= arr[i]){
            a_word = word;
             
            return a_word;
        } else {
            return NaN;
        }
    }
};

const text = 'dea abab cab c dbcd ecd ee';
const sort_text =  (long_text) => {

    let words = long_text.split(' ');
    const words_length = words.length;
    console.log(words);
    
    // init
    let order_by_num_of_letter_and_abc = [];
    let word = [];

    for (let i=0; i<words_length; i++){
        word = words[i]; 
        console.log(word);
        let returnABC = word_comparison_by_abc(word, words);
        console.log('return abc ' + returnABC);
        if (returnABC === NaN){
            i--;
        } else if (returnABC !== NaN) {
           
                console.log(returnABC);
                order_by_num_of_letter_and_abc.push(returnABC)
                console.log(order_by_num_of_letter_and_abc);
            
         
        }

       
    }

    return order_by_num_of_letter_and_abc;
}

sort_text(text);



/*

     for (let x=0; x<1; x++ ){
            let word_length = word.length; 
            let letter = word[x];
            console.log(letter);
            console.log(letter + word[x+1]);
            console.log(`${x}: ${word} ${word_length}`);

            

            
        }



*/