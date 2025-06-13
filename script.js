let hide = document.getElementsByClassName("no")[0]; // ✅
let btn1 = document.getElementById("fkeform");
let jake = document.getElementsByClassName("meow")[0]; // ✅ fix here

btn1.addEventListener("click", function () {
  hide.style.display = "none";
  jake.style.display = "block"; // now this works
});

let nextbtn1 = document.getElementsByClassName("actualnext")[0];
let sect1 = document.getElementsByClassName("section1")[0];

document.querySelector('.actualnext').addEventListener('click', () => {
  const alarm = document.getElementById('alarmSound');
  alarm.volume = 0.5;      // set volume *after* you have the element
  alarm.currentTime = 0;   // rewind if the player clicks more than once
  alarm.play();
});

nextbtn1.addEventListener('click', function () {
    // Change background
    document.body.style.backgroundImage = "url(https://i.pinimg.com/736x/39/12/5d/39125d2e88a8bd606ac56cd395e42d47.jpg)";

    // Show the first options section
    sect1.style.visibility = "visible";

    // Hide the title
    let title = document.getElementsByClassName("title")[0];
    title.style.display = "none";

    // Hide "JK YOUR NAME IS JAKE!"
    let jakeText = document.getElementsByClassName("actualname")[0];
    jakeText.style.display = "none";

    // Hide the next button
    nextbtn1.style.display = "none";
});



let bedbtn = document.getElementsByClassName("bed")[0];
let sect2 = document.getElementsByClassName("section2")[0];
let snoozebtn = document.getElementsByClassName("snooze")[0];
let die = document.getElementsByClassName("snoozeloose")[0];

bedbtn.addEventListener('click', function() {
    //change background
    document.body.style.backgroundImage = "url(https://i.pinimg.com/736x/5e/99/53/5e9953706880452328ecbbbb88f0a2b4.jpg)";
    sect2.style.display = "flex";
    sect1.style.visibility = "hidden";
    document.body.style.backgroundImage = "url(https://i.pinimg.com/736x/5e/99/53/5e9953706880452328ecbbbb88f0a2b4.jpg)";
    sect2.style.display = "flex";
    sect1.style.visibility = "hidden";
    // stop alarm
  const alarm = document.getElementById('alarmSound');
  alarm.pause();
  alarm.currentTime = 0;
})
snoozebtn.addEventListener('click', function(){
    document.body.style.backgroundImage = "none";
    sect1.style.visibility = "hidden";

    // Show death screen
    die.style.display = "flex";
  document.body.style.backgroundImage = "none";
  sect1.style.visibility = "hidden";

  // stop alarm
  const alarm = document.getElementById('alarmSound');
  alarm.pause();
  alarm.currentTime = 0;

  // Show death screen
  die.style.display = "flex";

  const trombone = document.getElementById('trombone');
  trombone.currentTime = 0;
  trombone.play();
});

let foodBtn   = document.getElementsByClassName("food")[0];
let mehBtn    = document.getElementsByClassName("meh")[0];
let burn = document.getElementsByClassName("foodburn")[0];
let forget = document.getElementsByClassName("mehforget")[0];

foodBtn.addEventListener("click", function () {
  document.body.style.backgroundImage =
    "url(https://wallpapers.com/images/hd/anime-school-background-dh3ommnxthw4nln7.jpg)";
  sect2.style.display = "none";
  burn.style.display  = "flex";   
});

mehBtn.addEventListener("click", function () {
  document.body.style.backgroundImage =
    "url(https://wallpapers.com/images/hd/anime-school-background-dh3ommnxthw4nln7.jpg)";
  sect2.style.display = "none";
  burn.style.display  = "flex";  
});

let sect3 = document.getElementsByClassName("section3") [0];
let nextbtn = document.getElementsByClassName("next")[0];
nextbtn.addEventListener("click", function(){
    forget.style.display = "none";
    burn.style.display  = "none";  
    sect3.style.display = "flex";
})
let apolBtn = document.getElementsByClassName ("apology")[0];
let notBtn = document.getElementsByClassName("nothing")[0];
let crimscene = document.getElementsByClassName("criminal")[0];
let prince = document.getElementsByClassName("smile")[0];

apolBtn.addEventListener("click", function () {
  document.body.style.backgroundImage = "none";
  sect3.style.display = "none";
  crimscene.style.display = "flex"
  const trombone = document.getElementById('trombone');
  trombone.currentTime = 0;
  trombone.play();
});
notBtn.addEventListener("click", function(){
    sect3.style.display = "none";
    prince.style.display = "flex"
})

let sorBtn = document.getElementsByClassName("sorry")[0];
let sirBtn = document.getElementsByClassName("sir")[0];
let oofScene = document.getElementsByClassName("oof")[0];
let ohNoScene = document.getElementsByClassName("ohno")[0];

sorBtn.addEventListener('click', function(){
    oofScene.style.display="flex";
    document.body.style.backgroundImage="none";
    prince.style.display = "none"
})

sirBtn.addEventListener('click', function(){
    ohNoScene.style.display="flex";
    document.body.style.backgroundImage="none";
    prince.style.display = "none"
})