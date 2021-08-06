const container = document.getElementById("container");
const button=document.getElementById("reset");
let gridsize=16;
let gridshow=document.getElementById("gridshow");
gridshow.textContent=gridsize+"x"+gridsize;
makeRows(gridsize, gridsize);

let gridItems=document.querySelectorAll(".grid-item");
    gridItems.forEach((gridItem) => {
    
    gridItem.addEventListener("mouseover",colorIT)
    
});
function colorIT(e){
    
    this.style.backgroundColor="rgb("+220+","+220+","+200+")";
    /*this.style.backgroundColor="black";*/
    console.log(this.style.backgroundColor);
    
}
function resetClear(e){
    gridItems.forEach((gridItem) => {
        gridItem.style.backgroundColor="white";
    });
    gridsize=101;
    while(gridsize>100){
    gridsize=prompt("Enter new grid size: ");
    }
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    };
    makeRows(gridsize,gridsize);
    gridItems=document.querySelectorAll(".grid-item");
    gridItems.forEach((gridItem) => {
    gridItem.addEventListener("mouseover",colorIT);
    gridshow.textContent=gridsize+"x"+gridsize;
});

}
console.log("grid size "+gridsize);


function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText =" ";
    console.log("min-w: "+(480/gridsize)+"px" );

    cell.style.minHeight=(480/gridsize)+"px";
    cell.style.minWidth=(480/gridsize)+"px";
    container.appendChild(cell).className = "grid-item";
  };
};






button.addEventListener("click",resetClear);


