document.getElementById("btnSavannah").onclick = function () {
    window.location.href = "savannah.html";
};
document.getElementById("btnMacon").onclick = function () {
    window.location.href = "macon.html";
};
document.getElementById("btnAugusta").onclick = function () {
    window.location.href = "augusta.html";
};

function exibirTexto(texto) {
    const divTexto = document.getElementById("texto-exibido");
    divTexto.innerHTML = texto;
}