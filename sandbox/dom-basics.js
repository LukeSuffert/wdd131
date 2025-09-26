const newP = document.createElement("p");
newP.textContent = "This is a new paragraph added by JavaScript.";
document.body.append(newP);


const newImg = document.createElement("img");
newImg.src = "https://picsum.photos/200"; /* this one not always works */
newImg.setAttribute("alt" , "Image from Picsum"); /* this one always works */
document.body.append(newImg);

