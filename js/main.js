(function () {
    window.$ = function (condition, multiple = false) {
        if (multiple) {
            return document.querySelectorAll(condition);
        } else {
            return document.querySelector(condition);
        }
    }
}())

window.onload = onLoad;

function onLoad() {
    var decode = $('div.decode-btn');
    decode.onclick = decodeValue;
    var encode = $('div.encode-btn');
    encode.onclick = encodeValue;
}

function encodeValue(e) {
    var valInput = $('div.write-div > input.write-input');
    var value = valInput.value;
    var input = $('input.result-input');
    try {
        var valueArray = value.split('');
        var ASCIIArr = valueArray.map(v => v.charCodeAt());
        input.setAttribute('data-encode-error', 0);
        input.value = window.btoa(ASCIIArr.join(','));
        input.select();
    } catch (e) {
        console.log(e);
        input.setAttribute('data-encode-error', 1);
        input.value = '';
    }
}
function decodeValue(e) {
    var valInput = $('div.write-div > input.write-input');
    var value = valInput.value;
    var input = $('input.result-input');
    try {
        var ASCIIStr = window.atob(value);
        var ASCIIArr = ASCIIStr.split(',');
        var valueArr = ASCIIArr.map(item => String.fromCharCode(item));
        var decodeValue = valueArr.join('');
        input.setAttribute('data-encode-error', 0);
        input.value = decodeValue;
        input.select();
    } catch (e) {
        console.log(e);
        input.setAttribute('data-encode-error', 1);
        input.value = '';
    }
}