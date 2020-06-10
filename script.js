let rows = 0;
let cols = 0;

const ar = () => {
    var table = document.getElementById("myTable");
    let rowCell = document.createElement("tr");
    let colCell = document.createElement("td")
    rowCell.appendChild(colCell);
    table.appendChild(rowCell);
    console.log(table);
    console.log(rowCell);
    rowCell.style.border = 'solid';
    colCell.style.border = 'solid';
    colCell.height = '50px';
    colCell.width = '50px';
    colCell.style.backgroundColor = "white";
    rows++;
}

const ac = () => {
    var table = document.getElementById("myTable");
    let rowCell = document.createElement("tr");
    let colCell = document.createElement("td")
    colCell.appendChild(rowCell);
    table.appendChild(colCell);
    rowCell.style.border = 'solid';
    colCell.style.border = 'solid';
    colCell.height = '50px';
    colCell.width = '50px';
    colCell.style.backgroundColor = "white";
    cols++;
} 

const rr = () => {

}

const rc = () => {

}

const fillU = () => {

}

const fill = () => {
    
}

const clearAll = () => {

}

const selected = () => {

}