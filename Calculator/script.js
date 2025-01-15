let currDisplay=''
function valueAdd(value){
    currDisplay+=value;
    document.querySelector('#display').value=currDisplay;

}
function calculate(){
    currDisplay=eval(currDisplay);
    document.querySelector('#display').value=currDisplay;
}
function clearDisplay() {
    currDisplay = '';
    document.querySelector('#display').value = currDisplay;
}