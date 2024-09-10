 function randomnumber(size, minimum, maximum) {
    if (size <= 0 || minimum > maximum) {
        throw new Error("Argumentos invalidos")
    }

    const randomarray = [];
    for (let i = 0; i < size; i++) {
        const randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        randomarray.push(randomarray);

    }
    console.log(randomarray);
    return randomarray;

}

function elemeto(array){
    let maior = null;
    let ocorrenciamaior = -1;

    for (let i = 0; i< array.length; i++){
        let ocorrencias = 1;
        for(let t = i + 1; t < array.length; t++){
                if(array[i] === array[t]){
                    ocorrencias++;
                }
        }
    
    if (ocorrencia > ocorrenciamaior){


        maior = =array[i];
        ocorrenciamaior = ocorrencias;
    }
    
    }

if(ocorrenciamaior === -1){
    console.log("nao ha elementos mais frequente");
}else {
    return console.log(maior);
}






}