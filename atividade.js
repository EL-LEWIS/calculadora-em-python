// 1
const gerarArrayAleatorio = (tamanho, minimo, maximo) =>
    Array.from({ length: tamanho }, () => Math.floor(Math.random() * (maximo - minimo + 1)) + minimo);

// 2
const elementoMaisFrequente = (array) => {
    const frequencias = array.reduce((acc, el) => (acc[el] = (acc[el] || 0) + 1, acc), {});
    const [elementoFreq, maxFreq] = Object.entries(frequencias).reduce((a, b) => a[1] > b[1] ? a : b);
    return maxFreq > 1 ? Number(elementoFreq) : "Não há elemento mais frequente";
};

// 3
const removerRepetidos = (array) => {
    const unica = [...new Set(array)];
    return unica.length < array.length ? unica : "Não há elementos repetidos";
};

// 4
const concatenarArrays = (array1, array2) => array1.concat(array2);

// 5
function main() {
    const arrayAleatorio = gerarArrayAleatorio(10, 1, 100);
    console.log(Entrada: $ { arrayAleatorio });
    console.log(Elemento mais frequente: $ { elementoMaisFrequente(arrayAleatorio) });
    const arraySemRepetidos = removerRepetidos(arrayAleatorio);
    console.log(Array sem repetidos: $ { arraySemRepetidos });
    console.log(Array concatenado: $ { concatenarArrays(arrayAleatorio, arraySemRepetidos) });
}

main();
