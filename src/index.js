window.globalTestFunctionFirst = function () {
    console.log(['[globalTestFunction] global index.js!']);
}

window.globalTestFunctionSecond = function () {
    const element = `<p>${Date.now()}</p>`
    document.getElementById('timeline').innerHTML += element;
}

window.onload = function() {
    console.log('[OnLoad] global index.js!');
}
