const arrayAnimais = JSON.parse(localStorage.getItem("arrayAnimais")) || [];

// Para cada animal no array de animais, criar um div contendo as informações principais daquele animal, dentro do div container
arrayAnimais.forEach((animal, index) => {
  const container = document.querySelector(".container");
  // container.innerHTML += `
  //   <div class="elem">
  //     <img src="images/animal_${index}.jpeg" width="50">
  //     <b>${animal.nome}</b>
  //   </div>
  // `;
  const elem = document.createElement("div");
  elem.className = "elem";

  const img = document.createElement("img");
  img.src = `images/animal_${index}.jpeg`;
  img.width = "50";
  // img.setAttribute("src", "-----")

  const name = document.createElement("a");
  name.innerText = animal.nome;
  name.href = `/registro.html?id=${animal.id}`;

  const btnDelete = document.createElement("button");
  btnDelete.innerText = "Remover";
  btnDelete.id = "delete";

  btnDelete.addEventListener("click", () => {
    if (confirm("Você tem certeza que quer remover este animalzinho indefeso da lista????????")) {
      arrayAnimais.splice(index, 1);
      localStorage.setItem("arrayAnimais", JSON.stringify(arrayAnimais));
      location.reload();
    }
  });

  elem.appendChild(img);
  elem.appendChild(name);
  elem.appendChild(btnDelete);
  // elem.append(img, name);

  container.appendChild(elem);
});