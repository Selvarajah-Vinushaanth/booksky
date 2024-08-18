var one=document.querySelector(".popupbox")
var two=document.querySelector(".popupoverlay")
var three=document.querySelector("#add-popup-button")
function change()
{
    one.style.display="block";
    two.style.display="block";

}
var four=document.querySelector("#cancel-book")
var five=document.querySelector("#addbook")
four.addEventListener("click",function(event)
{
    event.preventDefault()
    one.style.display="none";
    two.style.display="none";


})
five.addEventListener("click",function(event)
{
    event.preventDefault()
})

var container=document.querySelector(".container")
var input1=document.getElementById("booktitleinput")
var input2=document.getElementById("bookauthorinput")
var txtarea=document.getElementById("bookdescriptioninput")
var btn=document.getElementById("addbook")



btn.addEventListener("click",function()
{
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2 id="title">${input1.value}</h2>
    <h5 id="author">${input2.value}</h5>
    <p id="para">${txtarea.value}</p>
    <BUTTON onclick="del(event)">Delete</BUTTON>`
    container.append(div)
    one.style.display="none";
    two.style.display="none";

})

function del(event)
{
    event.target.parentElement.remove()
}
