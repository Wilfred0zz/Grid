let rows = 0;
let cols = 0;

const ar = () => {
    let table = document.getElementById("myTable");
    let rowCell = document.createElement("tr");
    if(rows == 0 && cols == 0){
        let colCell = document.createElement("td");
        rowCell.appendChild(colCell);
        table.appendChild(rowCell);
        rows++;
        cols++;
    }else{
       for(let i = 0; i<cols; i++){
           let colCell = document.createElement("td");
           rowCell.appendChild(colCell);
       }
       table.appendChild(rowCell)
       rows++;
    }
}

const ac = () => {
    let table = document.getElementById("myTable");
    if(rows == 0 && cols == 0){
        let rowCell = document.createElement("tr");
        let colCell = document.createElement("td");
        rowCell.appendChild(colCell);
        table.appendChild(rowCell);
        cols++;
        rows++;
    }
    else{
        let rowsMade = document.getElementsByTagName("tr");
        for(let i =0; i<rows; i++){
            let colCell = document.createElement('td');
            rowsMade[i].appendChild(colCell);
        }
        cols++;
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