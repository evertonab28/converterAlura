document.getElementById('btn-convert-dolar').addEventListener('click', function() {
    var inputValue = document.getElementById('money-input').value;
    var result = convertDolar(inputValue);
    var resultDiv = document.getElementById('result');
    document.getElementById('result').innerHTML = 'Resultado: R$ ' + result.toFixed(2);
    resultDiv.style.display = 'flex';
});

document.getElementById('btnReset').addEventListener('click', function() {
    var resultDiv = document.getElementById('result');
    var inputField = document.getElementById('money-input');
    resultDiv.innerHTML = '';
    resultDiv.style.display = 'none';
    inputField.value = '';
});

function convertDolar(value) {
    const exchange = 4.86;
    var convertedDolarBrl = value * exchange;
    return convertedDolarBrl;
}