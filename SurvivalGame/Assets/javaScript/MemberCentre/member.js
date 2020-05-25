var member = document.querySelector(".ModfiyLayout")
member.addEventListener('click', checkchange)
var checkclick = document.querySelector("#ModifyLabel")
checkclick.addEventListener('click', checkchange)

function checkchange() {
    let check = document.getElementById("ModfiyMeber")
    let emC = document.querySelector(".ModfiyLayout em")
    let icon = document.querySelector(".ModfiyLayout i")
    let save = document.querySelector("#ModifySave")
    let read = document.querySelectorAll(".FromList")
    let form = document.getElementById("MemberForm")
    let WriteForm = document.querySelectorAll(".FromOff")
    let ReadForm = document.querySelectorAll(".FromRead")
    if (!check.checked) {
        check.checked = true
        member.classList.add("ModfiyLayoutOn")
        emC.classList.add("ModfiyLayoutEmOn")
        icon.classList.add("ModfiyLayoutIOn")
        emC.innerText = "ON";
        save.style.display = "inline-block"
        read.forEach(el => {
            el.removeAttribute("disabled")
        });
        form.classList.add("was-validated")
        WriteForm.forEach(element => {
            element.style.display = "block"
        });
        ReadForm.forEach(element => {
            element.style.display = "none"
        });
    } else {
        check.checked = false
        member.classList.remove("ModfiyLayoutOn")
        emC.classList.remove("ModfiyLayoutEmOn")
        icon.classList.remove("ModfiyLayoutIOn")
        emC.innerText = "OFF";
        save.style.display = "none"
        read.forEach(el => {
            el.setAttribute("disabled", "disabled")
        });
        form.classList.remove("was-validated")
        WriteForm.forEach(element => {
            element.style.display = "none"
        });
        ReadForm.forEach(element => {
            element.style.display = "block"
        });
    }
}