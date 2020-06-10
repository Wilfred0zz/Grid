let rows = 0;//counter that tracks the amount of rows
let cols = 0;//counter that keeps tracks on the amount of columns

const ar = () => {
    let table = document.getElementById("myTable");
    let rowCell = document.createElement("tr");
    if(rows == 0 && cols == 0){ //checks if there are no columns or rows then it will create one and keep track of it by increasing counter.
        let colCell = document.createElement("td");
        rowCell.appendChild(colCell);
        table.appendChild(rowCell);
        rows++;
        cols++;
    }else{//if there columns and are adding rows it will use the counter as a way to know how many more squares to add for each column.
       for(let i = 0; i<cols; i++){
           let colCell = document.createElement("td");
           rowCell.appendChild(colCell);
       }
       table.appendChild(rowCell)
       rows++;//increases row counter for overall amount of rows
    }
}

const ac = () => {
    let table = document.getElementById("myTable");
    if(rows == 0 && cols == 0){//checks if there are no rows or columns then it will create one and keep track of it by increasing counter.
        let rowCell = document.createElement("tr");
        let colCell = document.createElement("td");
        rowCell.appendChild(colCell);
        table.appendChild(rowCell);
        cols++;
        rows++;
    }
    else{// if there are rows already existing then it will add columns depending on the number of rows.
        let rowsMade = document.getElementsByTagName("tr");
        for(let i =0; i<rows; i++){
            let colCell = document.createElement('td');
            rowsMade[i].appendChild(colCell);
        }
        cols++;//increases number of columns
    }
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