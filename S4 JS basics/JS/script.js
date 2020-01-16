function btn(){
    var nm = document.getElementById("names").value;
    var ul = document.getElementById("ordered-list");
    var li = document.createElement("LI");
    var txt = document.createTextNode(nm);
    console.log(nm);
    li.appendChild(txt);
    ul.appendChild(li);
    document.getElementById("names").innerHTML = "";
    document.getElementById('names').value = "";
}