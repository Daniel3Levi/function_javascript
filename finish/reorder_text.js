// 1. get long-string return the same long-sring with diffrent rows order
// 2. get long-text return the same text with random word order.
const long_text = `Unfunny at best, offensive at worst...
I found both of these episodes very disturbing, but in two different ways. C. H. U. M was gross, though it's to be expected with the subject of chum at all.

However, I was not expecting the stereotypes to be as distasteful as they wound up being in Something Narwhal this Way Comes. The Narwhals were impolite, brash, gross, stupid, and annoying in all the typical negative stereotypes. I know this is, of course, just a cartoon, but some of the implications in this one were offensive in my opinion. I was sad to see this, though I admit I heavily dislike gross-out humor. It used to be used more sparingly than it is now.

Modern Spongebob can still be good and funny, but these both left me feeling more uncomfortable than amused. Spongebob is a favorite show of mine, but the second episode in this with the Narwhals is honestly one of the least funny ones I have seen.

The only positive thing I can really say is that I was glad that, in common Spongebob fashion, Plankton's plan being foiled was funny, and as usual for Plankton, there were some funny and witty lines he said.`;

const random = (max) => {return Math.floor(Math.random() * (max - 1))};


const reorder_text = (text, reorder_by) => {
    reorder_by = reorder_by.toUpperCase();
    console.log(text);
    let p = text.split('\n');
    let w = text.split(' ');
    let s = text.split('');
    const p_length = p.length;
    const w_length = w.length;
    const s_length = s.length;
    console.log(p);  
    console.log(w);
    console.log(s);
    let new_order = [];
    let re_order = '';
  
        // re order by row
        if (reorder_by === "P"){
            for (i = 0; i<p_length; i++){
            console.log('Reorder paragraphs');
            let random_p_num = random(p.length);
            let random_p = p[random_p_num]; 
            p.splice(random_p_num,1);    
            if (random_p !== ''){
                new_order.push(random_p);
                re_order = new_order.join('\n').toString();
               
            }      
           
            }
            // re order by word
        } else if (reorder_by === "W"){
            for (i = 0; i<w_length; i++){
            console.log('Reorder words');
            let random_w_num = random(w.length);
            let random_w = w[random_w_num];
            w.splice(random_w_num,1);   
            if (random_w !== ''){
                new_order.push(random_w); 
                re_order = new_order.join(' ').toString();
            }
                
            }   
        } else if (reorder_by === "S"){
            for (i = 0; i<s_length; i++){
                console.log('Reorder Letters');
                let random_s_num = random(s.length);
                let random_s = s[random_s_num];
                s.splice(random_s_num,1);   
                if (random_s !== ''){
                    new_order.push(random_s); 
                    re_order = new_order.join('').toString();
                }
            }

        }
       
    return re_order;
};
//let new_order = reorder_text('abcde','s');
//console.log(new_order);



const random_string = (str_text) => {
    
    let arr_chars = str_text.split(''); //split the string
    let n_max = arr_chars.length; // array length
    let arr_rnd_char =[];
    let arr_rnd_int =[];
       for (let i = 0; i < n_max; i++){
                let n_rnd = random(n_max); // random index   
                let c_rnd = arr_chars[n_rnd]; // random char 
                arr_rnd_int.push(n_rnd);
                    for(x=0; x<n_max; x++){
                        if (!arr_rnd_int.includes(c_rnd)){
                            arr_rnd_char.push(c_rnd);
                        }

                    }    
              
        }   
         
    
 
    return arr_rnd_char;
}

console.log(random_string('abcde'));