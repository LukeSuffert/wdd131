let selectElem = document.querySelector('#theme_select');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'dark') {
        document.body.style.backgroundColor = "#333";
        document.body.style.color = "#FFFFFF";
        pageContent.style.fontFamily = 'Arial, sans-serif';
        document.body.style.header.color = "#5e92f9";
    } else {
        // default
        document.body.style.backgroundColor = "#FFFFFF";
        document.body.style.color = "#000000";
        pageContent.style.fontFamily = 'Times New Roman, serif';
        }
    }