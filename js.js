function next(){
	window.location.href = "ucapan.html";
}
function mulaiMusik() {
	const musik = document.getElementById("musikWisuda");

    musik.play().then(function() {
        if (!fotoInterval) {
            fotoInterval = setInterval(tampilFoto, 1600);
        }
    }).catch(function(error) {
		console.error("Musik tidak dapat diputar:", error);
		alert("Musik belum bisa diputar. Pastikan file TS MegaMix.mp3 dapat dibuka.");
	});
}

const fotoList = [
"foto/IMG-20240501-WA0002.jpg",
"foto/IMG-20240508-WA0006.jpg",
"foto/IMG-20240527-WA0014.jpg",
"foto/IMG-20240528-WA0034.jpg",
"foto/IMG-20240622-WA0000.jpg",
"foto/IMG-20240725-WA0040.jpg",
"foto/IMG-20240812-WA0005.jpg",
"foto/IMG-20240813-WA0009.jpg",
"foto/IMG-20240815-WA0009.jpg",
"foto/IMG-20240815-WA0040.jpg",
"foto/IMG-20240914-WA0011.jpg",
"foto/IMG-20241128-WA0004.jpg",
"foto/IMG-20241223-WA0232.jpg",
"foto/IMG-20250928-WA0113.jpg",
"foto/IMG-20251019-WA0400.jpg",
"foto/IMG-20260330-WA0063.jpg",
"foto/IMG-20260330-WA0068.jpg",
"foto/IMG-20260523-WA0008.jpg",
"foto/IMG-20260815-WA0015.jpg",
"foto/IMG-20260815-WA0035.jpg",
"foto/IMG-20260909-WA0012.jpg",
"foto/IMG20240915173524_BURST003_26503914.jpg",
"foto/IMG20241221183533.jpg",
"foto/IMG20241221192835.jpg",
"foto/IMG20241222135755.jpg",
"foto/IMG20250222225805.jpg",
"foto/IMG20250512171054.jpg",
"foto/IMG20250512201450.jpg",
"foto/IMG20250901175729.jpg",
"foto/IMG20250914183240.jpg",
"foto/IMG20251108160840.jpg",
"foto/IMG20251203185512.jpg",
"foto/IMG20251204134444.jpg",
"foto/IMG20260814162208.jpg",
"foto/IMG20260816122359.jpg",
"foto/IMG20260817083123.jpg",
"foto/quality_restoration_20260703183413151.jpg",
"foto/Screenshot_2024-04-16-07-13-19-22_6012fa4d4ddec268fc5c7112cbb265e7.jpg"
];
let index = 0;
let fotoInterval = null;
const container = document.querySelector(".container");

function tampilFoto() {

    if (!container || index >= fotoList.length) return;

    const img = document.createElement("img");
    img.src = fotoList[index];
    img.className = "foto";

    const fotoSize = 90;
    const margin = 15;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const topCount = 12;
    const rightCount = 7;
    const bottomCount = 12;
    const leftCount = 7;

    let x, y;

    if (index < topCount) {

        const spacing = (width - 2 * margin - fotoSize) / (topCount - 1);

        x = margin + spacing * index;
        y = margin;

    } else if (index < topCount + rightCount) {

        const i = index - topCount;

        const spacing = (height - 2 * margin - fotoSize) / (rightCount - 1);

        x = width - fotoSize - margin;
        y = margin + spacing * i;

    } else if (index < topCount + rightCount + bottomCount) {

        const i = index - topCount - rightCount;

        const spacing = (width - 2 * margin - fotoSize) / (bottomCount - 1);

        x = width - fotoSize - margin - spacing * i;
        y = height - fotoSize - margin;

    } else {

        const i = index - topCount - rightCount - bottomCount;

        const spacing = (height - 2 * margin - fotoSize) / (leftCount - 1);

        x = margin;
        y = height - fotoSize - margin - spacing * i;
    }

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    img.style.width = `${fotoSize}px`;
    img.style.height = `${fotoSize}px`;

    container.appendChild(img);

    index++;
}
