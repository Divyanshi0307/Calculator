let scrn = document.getElementById('screen');
// scrn.value = 0; // by default 0 value will get change from here but not chnge in character value such as +-and so on
function Input(x)
{
    scrn.value = scrn.value+x
}
// Input('7');
// Input('+');
function allclear(){
scrn.value = ' ';
}
// predefine function slice for delete only element
function del(){
   scrn.value = scrn.value.slice(0,-1); // -1 last index will get delete
}
// predefined function for output i.e 'eval()'
function calc()
{
    try{
    scrn.value = eval(scrn.value);
    } catch{
        scrn.value = "ERROR";
    }
}