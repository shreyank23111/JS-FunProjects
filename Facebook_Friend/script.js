var istatus = document.querySelector("h5");
var btn = document.querySelector("#add");
var chat = document.querySelector("h6");
var image = document.querySelector("img");

var check = 0;

btn.addEventListener("click", function () {
  if (check === 0) {
    updateStatus("Stranger", "red", "Add Friend", "Removed", "Add me as a friend", "10px","https://i0.wp.com/www.damodarcollege.edu.in/newsite/wp-content/uploads/2023/01/Sumit-Photo-Mr.Sumit-Kumar.png?resize=210%2C250&ssl=1");
    check = 1;
  } else {
    updateStatus("Friends", "green", "Remove Friend", "Now you will be FUCKED", "Now you can Chat", "0px", "https://e0.pxfuel.com/wallpapers/338/205/desktop-wallpaper-the-nun-horror-drawing-the-nun-paintings-horror-graphy-evil-nun.jpg");
    check = 0;
  }
});

function updateStatus(statusText, textColor, buttonText, consoleMessage, chatText, blurAmount, image_link) {
  istatus.innerHTML = statusText;
  istatus.style.color = textColor;
  btn.innerHTML = buttonText;
  console.log(consoleMessage);
  chat.innerHTML = chatText;
  
  // image.style.filter = "blur(" + blurAmount + ")";
  image.src = image_link;
}
