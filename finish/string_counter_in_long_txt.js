// get long-string + string2 return cont of string2 in long-string

const long_txt = `Unfunny at best, offensive at worst...
I found both of these episodes very disturbing, but in two different ways. C. H. U. M was gross, though it's to be expected with the subject of chum at all.

However, I was not expecting the stereotypes to be as distasteful as they wound up being in Something Narwhal this Way Comes. The Narwhals were impolite, brash, gross, stupid, and annoying in all the typical negative stereotypes. I know this is, of course, just a cartoon, but some of the implications in this one were offensive in my opinion. I was sad to see this, though I admit I heavily dislike gross-out humor. It used to be used more sparingly than it is now.

Modern Spongebob can still be good and funny, but these both left me feeling more uncomfortable than amused. Spongebob is a favorite show of mine, but the second episode in this with the Narwhals is honestly one of the least funny ones I have seen.

The only positive thing I can really say is that I was glad that, in common Spongebob fashion, Plankton's plan being foiled was funny, and as usual for Plankton, there were some funny and witty lines he said.`;


const string_cont_in_long_text = (long_text, str) => {
    let str_conter = 0;
    long_text = long_text.toUpperCase();
    str = str.toUpperCase();
    long_text = long_text.split('\n');
    for (i = 0; i<long_text.length; i++){

       let paragraph = long_text[i];
       console.log(paragraph);

       let words = paragraph.split(' ');
       console.log(words);

            for (x=0; x<words.length; x++){
                if (words[x] === str){
                    str_conter++;
                }
            }
    }
    return console.log(str_conter);
};
string_cont_in_long_text(long_txt,"i");