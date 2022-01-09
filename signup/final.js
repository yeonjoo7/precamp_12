// 전화 번호를 입력할때 커서 이동
function changeFocus1 () {
    const phone1 = document.getElementById("phone1").value
    if(phone1.length == 3) {
        document.getElementById("phone2").focus()
    }
}

function changeFocus2 () {
    const phone2 = document.getElementById("phone2").value
    if(phone2.length == 4) {
        document.getElementById("phone3").focus()
    }    
}

let activeBtn = () => {
    const phone1 = document.getElementById("phone1").value
    const phone2 = document.getElementById("phone2").value
    const phone3 = document.getElementById("phone3").value
    if (phone3.length == 4 && phone1 != "" && phone2 != "") {
        document.getElementById("valnum").disabled = false;
        document.getElementById("valnum").setAttribute("style", "color: #0068FF; background: #FFFFFF; border: 1px solid #0068FF; cursor: pointer;") 
    }
}

// 인증번호 발송하는 함수
let isStarted = false

let pressedBtn = () => {

    if(isStarted == false) {
        isStarted = true

        let token = String(Math.floor(Math.random()*1000000)).padStart(6, "0")
        document.getElementById("auth").innerText = token

        let time = 180
        let timer = null

        timer = setInterval(function() {
            if (time>=0) {
                const min = String(Math.floor(time/60)).padStart(2,"0")
                const sec = String(time%60).padStart(2, "0")
                document.getElementById("time").innerText = String(min+":"+sec)
                time = time-1
            }
            else {
                document.getElementById("finish").disabled = true
                document.getElementById("finish").setAttribute("style", "color: #b4b4b4; background: #fdfdfd; border: 1px solid #D2D2D2; cursor: none;")
                clearInterval(timer)
                isStarted = false
            }
        },1000)
        
        document.getElementById("finish").disabled = false
        document.getElementById("finish").setAttribute("style", "color: #0068FF; background: #FFFFFF; border: 1px solid #0068FF; cursor: pointer;")
        document.getElementById("valnum").setAttribute("style", "color: #b4b4b4; background: #fdfdfd; border: 1px solid #D2D2D2;")
    } else {
        alert("타이머가 이미 동작중입니다")
    }

}

let joinable = () => {
    alert("인증이 완료되었습니다!")
    document.getElementById("joinBtn").setAttribute("style", "color: #0068FF; background: #FFFFFF; border: 1px solid #0068FF; cursor: pointer;")
    document.getElementById("joinBtn").disabled = false
    document.getElementById("finish").setAttribute("style", "color: #b4b4b4; background: #fdfdfd; border: 1px solid #D2D2D2; cursor: none;")
}

let emailVal = (email) => {
    var regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (regEmail.test(email) === true) {
        return false
    } else {
        return true
    }
}

// 가입하기 버튼 활성화하면서 모든 입력값 확인
let onBoard = () => {
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const pw1 = document.getElementById("password1").value;
    const pw2 = document.getElementById("password2").value;
    const city = document.getElementById("selectCity").value;
    var checked_gender = document.querySelector('input[name = "genderOption"]:checked');

    if (email == "") {
        document.getElementById("failemail").innerText = "이메일 주소를 입력해 주세요."
    } else if (emailVal(email)) {
        document.getElementById("failemail").innerText = "이메일 주소를 다시 확인해 주세요."
    } else {
        document.getElementById("failemail").innerText = ""
    }
    if (pw1 == "") {
        document.getElementById("failpw1").innerText = "비밀번호를 입력해 주세요."
    } else if (pw1 != pw2) {
        document.getElementById("failpw1").innerText = "비밀번호가 일치하지 않습니다."
    } else {
        document.getElementById("failpw1").innerText = ""
        document.getElementById("failpw2").innerText = ""
    }
    if (pw2 == "") {
        document.getElementById("failpw2").innerText = "비밀번호를 입력해 주세요."
    } else if (pw1 != pw2) {
        document.getElementById("failpw2").innerText = "비밀번호가 일치하지 않습니다."
    }
    if (name == "") {
        document.getElementById("failname").innerText = "이름을 입력해 주세요."
    } else {
        document.getElementById("failname").innerText = ""
    }
    if (city == "지역을 선택하세요") {
        document.getElementById("failcity").innerText = "지역을 선택해 주세요."
    } else {
        document.getElementById("failcity").innerText = ""
    }
    if (checked_gender == null) {
        document.getElementById("failgender").innerText = "성별을 선택해 주세요."
    } else {
        document.getElementById("failgender").innerText = ""
    }
    if (!emailVal(email) && name != "" && pw1 === pw2 && pw1 != "" && city != "지역을 선택하세요" && checked_gender != null) {
        alert("가입 신청이 완료되었습니다!")
    }
}
