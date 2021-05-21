//mengembalikan element
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "gray";
judul.innerHTML = "Fachrul Faathirullah";

//document.getElementsByTagName
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "red";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";
