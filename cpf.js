function validatorDigit(CPF) {
    const CPFCopy = [...CPF];
    const initialSumValue = 0;
    const sum = CPFCopy.reverse().reduce(
        (previousValue, currentValue, index) => {
            const multiplicator = index + 2;
            const currentSum = previousValue + currentValue * multiplicator;

            return currentSum;
        },
        initialSumValue
    );
    const digit = (sum * 10) % 11;

    return digit < 10 ? digit : 0;
}

function generateRandomNumbers(numbersToGenerate = 1) {
    return Array.from({ length: numbersToGenerate }, () => {
        return parseInt(Math.random() * 10);
    });
}

function generateCPF(withMask = false) {
    let CPF = generateRandomNumbers(9);

    CPF.push(validatorDigit(CPF));
    CPF.push(validatorDigit(CPF));
    CPF = CPF.join('');

    if (withMask === true) {
        CPF = maskCPF(CPF);
    }

    return CPF;
}

function maskCPF(CPF = '') {
    const mask = /(\d{3})(\d{3})(\d{3})(\d{2})/;
    const withMask = CPF.replace(mask, '$1.$2.$3-$4');

    return withMask;
}

module.exports = { generateCPF, maskCPF };
