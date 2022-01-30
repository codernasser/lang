

let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let text = document.getElementById("text");
let text1 = document.getElementById("logo");
let text2 = document.getElementById("text2");
let text5 = document.getElementById("text5");



arabic.onclick = () => {
  setLanguage("arabic");
};
english.onclick = ()=>{
    setLanguage("english")
}



function setLanguage(getLanguage){
    if (getLanguage === "arabic") {
      text.innerHTML =
        ".إذا كنت تصوب ، صوب نحو النجوم ، فإذا فاتتك ، فإنك تهبط على القمر";
        text1.innerHTML = "ناصر.كوم";
        text2.innerHTML =
          "انا طالب في الثانوية العامة و عمري 17 سنة صنعت أول موقع لي عندما كنت في 14 سنة ";
          text5.innerHTML = "من نحن"
    } else if (getLanguage === "english") {
      text.innerHTML =
        "If you aim,Aim at the stars ,so if you miss ,you land on the moon.";
       text1.innerHTML = "Nasser.com";
       text2.innerHTML =
         "I am a high school student and I am 17 years old. I made my first website when I was 14 years old";
         text5.innerHTML = "About Us"
    }
}