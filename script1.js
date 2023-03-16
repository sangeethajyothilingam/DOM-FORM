function okay(){
    //getvalues

    var fname = document.getElementById("First Name").value;
    var lname = document.getElementById("Last Name").value;
    var gender = foo();
    var foods = food();
    var address = document.getElementById("Address Line 1","Address Line 2").value;
    var pin = document.getElementById("PIN").value;
    var state = document.getElementById("State").value;
    var country = document.getElementById("Country").value;
    //post on table
    var tr = document.createElement("tr");
    var td1 = tr.appendChild(document.createElement("td"));
    var td2 = tr.appendChild(document.createElement("td"));
    var td3 = tr.appendChild(document.createElement("td"));
    var td4 = tr.appendChild(document.createElement("td"));
    var td5 = tr.appendChild(document.createElement("td"));
    var td6 = tr.appendChild(document.createElement("td"));
    var td7 = tr.appendChild(document.createElement("td"));
    var td8 = tr.appendChild(document.createElement("td"));
    td1.innerHTML = fname;
    td2.innerHTML = lname;
    td3.innerHTML = gender;
    td4.innerHTML = foods;
    td5.innerHTML = address;
    td6.innerHTML = pin;
    td7.innerHTML = state;
    td8.innerHTML = country;
    document.getElementById("tb").appendChild(tr);
    var my_form = document.getElementById("form");
    my_form.reset();   
}

function foo(){
    
    if(male.checked){
        let res=document.getElementById("male").value;
        console.log(res);
    }
    else if(Female.checked){
        let res1=document.getElementById("female").value;
        console.log(res1);
    }
    else{
        console.log("others");
    }
           
    }
s


function food(){
    var temp=[];    
var food1 = document.getElementsByName("food");
for (var i = 0; i < food1.length; i++) {
    if (food1[i].checked){
        temp.push(food1[i].value);
     }
}    
if(temp.length>=2){
    return temp.join(" ");     
}else{
    alert("select minimum 2");    

}
};