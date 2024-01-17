document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
    // Menampilkan rumus pada tabel saat halaman dimuat
    displayDefaultFormulas();
}

function displayDefaultFormulas() {
    // Teks rumus default
    var formulaArea = "sisi x sisi";
    var formulaPerimeter = "4 x sisi";

    // Menampilkan rumus default pada tabel
    document.getElementById("formula-area").innerText = formulaArea;
    document.getElementById("formula-perimeter").innerText = formulaPerimeter;
}

function calculate() {
    
    var sideLength = parseFloat(document.getElementById('sideLength').value);

    if (isNaN(sideLength) || sideLength <= 0) {
        alert("Masukan panjang sisi yang valid.");
        return;
    }

    var area = sideLength * sideLength;
    var perimeter = 4 * sideLength;

    // Update nilai dalam tabel
    document.getElementById("area").innerText = area;
    document.getElementById("perimeter").innerText = perimeter;

    // Update rumus dalam tabel
    document.getElementById("formula-area").innerText = `${sideLength} x ${sideLength}`;
    document.getElementById("formula-perimeter").innerText = `4 x ${sideLength}`;
}

function reset() {
    document.getElementById("sideLength").value = "";

    // Reset nilai dalam tabel
    document.getElementById("area").innerText = "-";
    document.getElementById("perimeter").innerText = "-";

    // Reset rumus dalam tabel
    document.getElementById("formula-area").innerText = "sisi x sisi";
    document.getElementById("formula-perimeter").innerText = "4 x sisi";
}
