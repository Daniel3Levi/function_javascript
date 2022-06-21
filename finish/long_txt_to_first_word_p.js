// get long-text return first word in each paragraph

const long_text = `Unfunny at best, offensive at worst...
I found both of these episodes very disturbing, but in two different ways. C. H. U. M was gross, though it's to be expected with the subject of chum at all.

However, I was not expecting the stereotypes to be as distasteful as they wound up being in Something Narwhal this Way Comes. The Narwhals were impolite, brash, gross, stupid, and annoying in all the typical negative stereotypes. I know this is, of course, just a cartoon, but some of the implications in this one were offensive in my opinion. I was sad to see this, though I admit I heavily dislike gross-out humor. It used to be used more sparingly than it is now.

Modern Spongebob can still be good and funny, but these both left me feeling more uncomfortable than amused. Spongebob is a favorite show of mine, but the second episode in this with the Narwhals is honestly one of the least funny ones I have seen.

The only positive thing I can really say is that I was glad that, in common Spongebob fashion, Plankton's plan being foiled was funny, and as usual for Plankton, there were some funny and witty lines he said.`;


const longTextToWordP = (long_txt) => {
        
        let firstPWordArray = []; 
       let rows =  long_txt.split('\n');
        for (i = 0 ; i< rows.length; i++){
            let row = rows[i];
            let rowArray = row.split(' ');
            console.log(rowArray);
            if (rowArray[0] !== ''){
                let firstWords = rowArray[0]; 
                firstPWordArray.push(firstWords)
            }
        }
    return firstPWordArray;
};
console.log(longTextToWordP(long_text));