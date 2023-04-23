let countEl = document.getElementById("count-el")
let count = 0
let flag_button = 2
let counter = 0
let count1 = 0


function increment() {
    if (flag_button == 0){
        save()
    }
    count = count + 1
    countEl.innerText = count
    counter = count
    flag_button = 1
}

function decrement(){
    if (flag_button == 1){
        save()
    }
    count1 = count1 - 1
    countEl.innerText = count1
    counter = count1
    flag_button = 0
}


// 1. Create a function, save(), which logs out the count when it's called

function save() {
    console.log(counter)
    document.getElementById("saved_output").innerHTML = document.getElementById("saved_output").innerHTML+" [ " + `${counter}`+" ] "
    count = 0
    count1 = 0
    counter = 0
}
