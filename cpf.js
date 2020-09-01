var CPFHelper = {
    validatorDigit: function(CPF) {
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
    },
    
    generateRandomNumbers: function (numbersToGenerate = 1) {
        return Array.from({ length: numbersToGenerate }, () => {
            return parseInt(Math.random() * 10);
        });
    },

    generateCPF: function () {
        let CPF = CPFHelper.generateRandomNumbers(9);
    
        CPF.push(CPFHelper.validatorDigit(CPF));
        CPF.push(CPFHelper.validatorDigit(CPF));
        CPF = CPF.join('');
    
        return CPF;
    },

    maskCPF: function (CPF = '') {
        const mask = /(\d{3})(\d{3})(\d{3})(\d{2})/;
        const withMask = CPF.replace(mask, '$1.$2.$3-$4');
    
        return withMask;
    }
}
