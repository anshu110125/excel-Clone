//table
const theadRow = document.getElementById('table-heading-row');
const tbody = document.getElementById("table-body");

const columns = 26;
const rows = 100;

//button 
const boldButton = document.getElementById('bold-btn')
const italicButton = document.getElementById('italic-btn');
const underlineButton = document.getElementById('underline-btn');
//align button
const leftAlign = document.getElementById('left-align')
const centerAlign = document.getElementById('center-align')
const rightAlign = document.getElementById('right-align')

// drop down font size

const fontSizeDropDown = document.getElementById('font-size');

//dropdown font style
const fontFamilyDropDown = document.getElementById('font-family')

//cut copy paste button
const cutButton = document.getElementById('cut-button')
const copyButton = document.getElementById('copy-button')
const pasteButton = document.getElementById('paste-button')

//color input
const bgColorInput = document.getElementById('bg-color')
//text color
const textColorInput = document.getElementById('text-color')


let cutValue = {};
let currentCell;
// let matrix = new Array(row);

for (let col = 0; col < columns; col++) {
    let th = document.createElement('th');
    th.innerText = String.fromCharCode(col + 65);
    theadRow.append(th);
}

for (let row = 1; row <= rows; row++) {
    let tr = document.createElement('tr');
    let th = document.createElement('th');
    th.innerText = row;
    tr.append(th)
    //looping from a to g
    for (let col = 0; col < columns; col++) {
        let td = document.createElement('td');
        td.setAttribute('contenteditable', 'true');
        td.setAttribute('id', `${String.fromCharCode(col + 65)}${row}`)
        td.addEventListener('focus', (event) => onfocus(event));

        tr.append(td);
    }
    tbody.append(tr)
}

//BoldButton
boldButton.addEventListener('click', () => {

    if (currentCell.style.fontWeight === 'bold') {
        currentCell.style.fontWeight = 'normal';
    }
    else
        currentCell.style.fontWeight = 'bold';


})
//italicButton
italicButton.addEventListener('click', () => {

    if (currentCell.style.fontStyle === 'italic') {
        currentCell.style.fontStyle = 'normal';
    } else (currentCell.style.fontStyle = 'italic')

})
// underlineButton

underlineButton.addEventListener('click', () => {

    if (currentCell.style.textDecoration === 'underline') {
        currentCell.style.textDecoration = 'none';
    } else (currentCell.style.textDecoration = 'underline')

})

//leftAlign
leftAlign.addEventListener('click', () => {
    currentCell.style.textAlign = 'left';
})

centerAlign.addEventListener('click', () => {
    currentCell.style.textAlign = 'center';
})

rightAlign.addEventListener('click', () => {
    currentCell.style.textAlign = 'right';
})

//dropdown font size
fontSizeDropDown.addEventListener('change', () => {
    currentCell.style.fontSize = fontSizeDropDown.value;
})
// font family
fontFamilyDropDown.addEventListener('change', () => {
    currentCell.style.fontFamily = fontFamilyDropDown.value
})
// cut copy paste

cutButton.addEventListener('click', () => {
    cutValue = {
        style: currentCell.style.cssText,
        text: currentCell.innerText,
    };
    currentCell.innerText = '';
    currentCell.style = null;
})

//copy
copyButton.addEventListener('click', () => {

    cutValue = {
        style: currentCell.style.cssText,
        text: currentCell.innerText,
    };
});
//paste
pasteButton.addEventListener('click', () => {
    if (cutValue.text) {
        currentCell.style = cutValue.style;
        currentCell.innerText = cutValue.text;
    }

})


//color input background

bgColorInput.addEventListener('input', () => {
    currentCell.style.backgroundColor = bgColorInput.value;

})
//text color functionalities

textColorInput.addEventListener('change', () => {
    currentCell.style.color = textColorInput.value;
})
function onfocus(event) {
    currentCell = event.target;
    document.getElementById('current-cell').innerText = currentCell.id;

}