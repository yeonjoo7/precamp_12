function getNumber() {
    let lottoNum = ''
    let numbers = []
    let select = 0;
    while (numbers.length<6) {
        select = Math.floor(Math.random()*100)
        if (select >= 1 && select <= 45 && numbers.indexOf(select) < 0) {
            numbers.push(select)
        }
    }
    for (let i=0; i<numbers.length; i++) {
        lottoNum = lottoNum.concat(String(numbers[i])).concat(" ")
    }
    document.getElementById("randomN").innerText = lottoNum
}

const startWord = () => {
    const word = document.getElementById("word").innerText
    const lastword = word[word.length-1]

    const myword = document.getElementById("myword").value
    const firstword = myword[0]

    if (firstword === lastword) {
        document.getElementById("result").innerText = "정답입니다!"
        document.getElementById("word").innerText = myword
        document.getElementById("myword").value = ""
    } else {
        document.getElementById("result").innerText = "땡!"
        document.getElementById("myword").value = ""
    }
}