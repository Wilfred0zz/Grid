let rows = 0;
let cols = 0;

const ar = () => {
    var table = document.getElementById("myTable");
    if(rows == 0){
        let rowCell = document.createElement("tr");
        let colCell = document.createElement("td");
        rowCell.appendChild(colCell);
        table.appendChild(rowCell);
        rows++;
        cols++;
    }else{
        let rowCell = document.createElement("tr");
       for(let i = 0; i<cols; i++){
           let newCol = document.createElement("td");
           rowCell.appendChild(newCol);
       }
       table.appendChild(rowCell)
       rows++;
    }
}

const ac = () => {
    var table = document.getElementById("myTable");
    if(rows == 0){
        let rowCell = document.createElement("tr");
        let colCell = document.createElement("td");
        colCell.appendChild(rowCell);
        table.appendChild(colCell);
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