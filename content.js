let wordToChangeI = /[Зз]?[иее́]?л[eее́]?нс[ь]?кий/g;
let wordToChangeD = /[Зз]?[иее́]?л[eее́]?нс[ь]?кому/g;
let wordToChangeZ = /[Зз]?[иее́]?л[eее́]?нс[ь]?кого/g;
let wordToChangeK = /[Зз]?[иее́]?л[eее́]?нс[ь]?ким/g;
let wordForChange = r => {
    let options = Object.keys(names);
    // console.log("NAMES", names);
    // console.log("options", options);
    let choice = names[options[Math.floor(Math.random() * options.length)]];
    // console.log("CHOICE", choice);
    return `<span style='background:black;color:white;'>${choice[r]}</span>`;
};
console.log("THIS IS DUCK", ignoreWebsites(window.location.href));
if (ignoreWebsites(window.location.href)) {
    window.addEventListener("load", e => {
        document.body.innerHTML = document.body.innerHTML.replace(
            wordToChangeI,
            wordForChange("i"),
        );
        document.body.innerHTML = document.body.innerHTML.replace(
            wordToChangeD,
            wordForChange("d"),
        );
        document.body.innerHTML = document.body.innerHTML.replace(
            wordToChangeZ,
            wordForChange("z"),
        );
        document.body.innerHTML = document.body.innerHTML.replace(
            wordToChangeK,
            wordForChange("k"),
        );
    });
}
