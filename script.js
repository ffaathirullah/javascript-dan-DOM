// //mengembalikan element
// const judul = document.getElementById("judul");
// // judul.style.color = "red";
// // judul.style.backgroundColor = "gray";
// judul.innerHTML = "<em>Fachrul Faathirullah</em>";

// // //document.getElementsByTagName
// // const p = document.getElementsByTagName("p");
// // for (let i = 0; i < p.length; i++) {
// //   p[i].style.backgroundColor = "red";
// // }

// // const h1 = document.getElementsByTagName("h1")[0];
// // h1.style.fontSize = "50px";

// //document.querySelector()
// // const p4 = document.querySelector("#b p");
// // p4.style.color = "green";
// // p4.style.fontSize = "24px";

// const li2 = document.querySelector("section#b ul li:nth-child(2)");
// li2.style.backgroundColor = "orange";

// const p = document.querySelectorAll("p");
// p[2].style.backgroundColor = "yellow";

// const sectionB = document.querySelector("section#b");
// const p4 = sectionB.getElementsByTagName("p")[0];
// p4.style.color = "green";
// p4.style.fontSize = "24px";

// const sectionA = document.querySelector("section#a");

// sectionA.innerHTML = " hellow world";

// const judul1 = document.getElementsByTagName("h1")[0];
// judul1.setAttribute("name", "fachrul");

const pBaru = document.createElement("p");
const pBaru2 = document.createTextNode("paragraf baru");

pBaru.appendChild(pBaru2);

const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);
