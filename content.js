// let iframe = $("iframe");

// if (iframe.attr("src").split("youtube").length > 1) {
//     iframe.remove();
// }
// setInterval(() => {
//     document.body.innerHTML = document.body.innerHTML
//         .toString()
//         .replace("Зеленский", "ЗЕЛЕНЫЙ КЛОУН");
// }, 1000);
let wordToChange = /[Зз]?[иее́]?л[eее́]?нс[ь]?кий/;
let wordForChange = "Педрилка";
function SAD(node) {
    if (!node.hasChildNodes()) {
        console.log(node);
    }
    for (let i of node.childNodes) {
        try {
            i.innerHTML = i.innerHTML.replace(wordToChange, wordForChange);
        } catch (e) {
            console.log("shit happens");
        }
        SAD(i);
    }
}
$(document).ready(() => {
    var body = $("body");
    SAD(body[0]);
});
