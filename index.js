function onInputClick() {
    this.select();
    this.setSelectionRange(0, 99999);
    document.execCommand('copy');
}

document.addEventListener('DOMContentLoaded', () => {
    const inputWithoutMask = document.getElementById('CPF');
    const inputWithMask = document.getElementById('CPFWithMask');
    const CPF = CPFHelper.generateCPF();
    const maskedCPF = CPFHelper.maskCPF(CPF);
    
    inputWithoutMask.value = CPF;
    inputWithMask.value = maskedCPF;
    inputWithMask.addEventListener('click', onInputClick);
    inputWithoutMask.addEventListener('click', onInputClick);
});
