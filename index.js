//document.getElementById("count-el").innerText = 5



let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;
//let save = document.getElementById('save-btn');



function increment() {
   
    count += 1
    console.log(count)
    countEl.textContent = count
}


function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    console.log(count)
    count = 0
    countEl.textContent = count
    
}



