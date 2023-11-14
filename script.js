var btnConvertDolar = document.getElementById('btn-convert-dolar');
if (btnConvertDolar) {
    btnConvertDolar.addEventListener('click', function () {
        var inputValue = document.getElementById('money-input').value;
        var resultDolar = convertDolar(inputValue);
        var resultBTC = convertBTC(resultDolar);
        var resultDiv = document.getElementById('result');
        document.getElementById('result').innerHTML = 'Resultado:<br>' +'R$ ' + resultDolar.toFixed(2) +
        '<br>' +
        'Bitcon: ' + resultBTC.toFixed(7) + ' BTC';
        resultDiv.style.display = 'flex';
    });
}

var btnConvertEuro = document.getElementById('btn-convert-euro');
if (btnConvertEuro) {
    btnConvertEuro.addEventListener('click', function () {
        var inputValue = document.getElementById('money-input').value;
        var resultEuro = convertEuro(inputValue);
        var resultDiv = document.getElementById('result');
        document.getElementById('result').innerHTML = 'Resultado: R$ ' + resultEuro.toFixed(2);
        resultDiv.style.display = 'flex';
    });
}

var btnConvertKm = document.getElementById('btn-convert-km');
if (btnConvertKm) {
    btnConvertKm.addEventListener('click', function () {
        var inputValue = document.getElementById('km-input').value;
        var resultKm = convertKm(inputValue);
        var resultDiv = document.getElementById('result');
        document.getElementById('result').innerHTML = 'Resultado: ' + resultKm + ' anos-luz';
        resultDiv.style.display = 'flex';
    });
}

var btnReset = document.getElementById('btnReset');
if (btnReset) {
    btnReset.addEventListener('click', function () {
        var resultDiv = document.getElementById('result');
        var inputField = document.getElementById('money-input');
        resultDiv.innerHTML = '';
        resultDiv.style.display = 'none';
        inputField.value = '';
    });
}

function convertDolar(value) {
    const exchange = 4.86;
    var convertedDolarBrl = value * exchange;
    return convertedDolarBrl;
}

function convertEuro(value) {
    const exchange = 5.29;
    var convertedEuroBrl = value * exchange;
    return convertedEuroBrl;
}

function convertBTC(value){
    const exchange = 171573.26;
    var convertedRealBTC = value / exchange;
    return convertedRealBTC;
}

function convertKm(value){
    const speedOfLight = 299792458;
    const secondsPerYear = 365.25 * 24 * 60 * 60;
    const distanceLightPerYear = speedOfLight * secondsPerYear;

    const kmInMeters = value * 1000;
    const lightYears = kmInMeters / distanceLightPerYear;
    return lightYears;
}