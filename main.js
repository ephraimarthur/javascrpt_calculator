function c(val) {
    document.querySelector("#display").value = val;

}

function math(val) {

    document.querySelector("#display").value += val;
}

//FUNCTION TO EQUAL
function e() {
    try{
        c(eval(document.querySelector("#display").value))

    } catch(e) {
        c('Error')
    }
}
