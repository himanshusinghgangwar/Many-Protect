function updateTextbox(value){
    document.getElementById("cal__Input").value += value;
}
function result(){
    document.getElementById("cal__Input").value = eval(document.getElementById("cal__Input").value);
}
function reset(){
    document.getElementById("cal__Input").value = '';
}