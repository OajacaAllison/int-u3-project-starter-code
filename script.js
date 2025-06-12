let jake = document.getElementById("real"); 
document.addEventListener("DOMContentLoaded", function() {
    let btn1 = document.getElementById("fakeBtn");
    let f1 = document.querySelector(".hide");
    let form2 = document.getElementById("urname");

    btn1.addEventListener("click", function(){
        f1.style.visibility = "hidden";
        jake.style.visibility = "default";
    })
})