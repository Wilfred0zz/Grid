let rows = 0; //counter that tracks the amount of rows
let cols = 0; //counter that keeps tracks on the amount of columns

//During cell creation set the background color to white by default
//Add event listeners to each cell on creation, so that appropriate functions can be called
//when they are clicked
const makeCell = () => {
    const cell = document.createElement("td");
    cell.style.backgroundColor = '#FFFFFF';
    cell.onmousedown = clickHandlers.activate;
    cell.onmouseup = () => active = false;
    cell.onmouseover = clickHandlers.color;
    return cell;
}

const ar = () => {
    let table = document.getElementById("myTable");
    let rowCell = document.createElement("tr");
    if (rows == 0 || cols == 0) { //checks if there are no columns or rows then it will create one and keep track of it by increasing counter.
        let colCell = makeCell();
        rowCell.appendChild(colCell);
        table.appendChild(rowCell);
        rows++;
        cols = 1;
    } else { //if there columns and are adding rows it will use the counter as a way to know how many more squares to add for each column.
        for (let i = 0; i < cols; i++) {
            let colCell = makeCell();
            rowCell.appendChild(colCell);
        }
        table.appendChild(rowCell)
        rows++; //increases row counter for overall amount of rows
    }
}

const ac = () => {
        let table = document.getElementById("myTable");
        if (rows == 0 || cols == 0) { //checks if there are no rows or columns then it will create one and keep track of it by increasing counter.
            let rowCell = document.createElement("tr");
            let colCell = makeCell();
            rowCell.appendChild(colCell);
            table.appendChild(rowCell);
            cols++;
            rows = 1;
        } else { // if there are rows already existing then it will add columns depending on the number of rows.
            let rowsMade = document.getElementsByTagName("tr");
            for (let i = 0; i < rows; i++) {
                let colCell = makeCell();
                rowsMade[i].appendChild(colCell);
            }
            cols++; //increases number of columns
        }
    }
    //removes the first row 
const rr = () => {
    if (rows == 0)
        alert("No rows to remove!");
    else {
        document.getElementById("myTable").deleteRow(0);
        rows--;
    }
}

const rc = () => {
    if (cols == 0)
        alert("No columns to remove!");
    else {
        document.querySelectorAll("tr").forEach(row =>
            row.removeChild(row.lastChild))
        cols--;
    }
}

//Object that stores color values
const list = {
    SELECT: '#FFFFFF',
    Red: '#FF0000',
    Blue: '#0000FF',
    Green: '#00FF00',
    Yellow: '#FFFF00'
}

//Creates a NodeList of each td element, so that we can call forEach() on it.
const cells = () => document.querySelectorAll("td");

//Calls forEach on cells and colors any cell with no background color or white ones
const fillU = () => {
    cells().forEach(cell => {
        if (cell.style.backgroundColor == "rgb(255, 255, 255)")
            cell.style.backgroundColor = list[document.getElementById("colors").value]
    })
}

//Calls forEach() on cells and colors each cell based on the selected color
const fill = () => {
    cells().forEach(cell =>
        cell.style.backgroundColor = list[document.getElementById("colors").value])
}

const clearAll = () => {
    cells().forEach(cell => cell.style.backgroundColor = "#FFFFFF")
}

//Sets active to false by default
let active = false;

//Activate sets active to true and calls color to color any hovered cells while the mouse is held down
const clickHandlers = {
    activate: event => {
        active = true;
        clickHandlers.color(event);
    },
    color: event => active &&
        (event.target.style.backgroundColor = list[document.getElementById("colors").value])
}
