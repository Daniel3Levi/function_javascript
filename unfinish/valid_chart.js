// get string&and valid chart value return valide value  

const valid_str = (str, valid_chart) => {

    console.log(`str: ${str}`);
    console.log(`valid_chart: ${valid_chart}`);

    str = str.split('');
    valid_chart = valid_chart.split('');

    for (i = 0; i<str.length; i++){
        for (x = 0; x < valid_chart.length; x++ ){
            if (str[i] === valid_chart[x]){
                 str[i] = "";
                 str = str.join("").split("");
                 console.log(str);
            }
        }
    }
   
    return str;
};

console.log(valid_str("Lino$y", "$#%^L@!&"));

// create a update version with indexOf 