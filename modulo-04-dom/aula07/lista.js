const URL = "https://crudcrud.com/api/bcd8220e42fb4a1a9b33208b5631b27e/animais";

// REQUEST FUNCTIONS ///////////////
async function getAnimais() {
  const response = await fetch(URL);
  return await response.json();
}

async function deleteAnimal(id) {
  const response = await fetch(URL + `/${id}`, { method: "DELETE" });
  if (response.status == 200) return "NÃO ACREDITO QUE VOCÊ DELETOU ESSE ANIMALZINHO INDEFESO!!!!!!";
  return "Ainda bem que não deu certo...";
}

// DOM MANIPULATIONS FUNCTIONS
function createAnimalElement(animal, index) {
  const container = document.querySelector(".container");
  const id = `animal-${animal._id}`;
  // const queryId = `#${animal.id}`; -> NUNCA FAÇAM ISSO
  let elem = document.querySelector(`div#${id}`);
  if (elem) return;

  elem = document.createElement("div");
  elem.id = id;
  elem.className = "elem";

  const img = document.createElement("img");
  img.src = `images/animal_${index}.jpeg`;
  img.width = "50";
  // img.setAttribute("src", "-----")

  const name = document.createElement("a");
  name.innerText = animal.nome;
  name.href = `/registro.html?id=${animal._id}`;

  const btnDelete = document.createElement("button");
  btnDelete.innerText = "Remover";
  btnDelete.id = "delete";

  btnDelete.addEventListener("click", () => {
    if (confirm("Você tem certeza que quer remover este animalzinho indefeso da lista????????")) {
      // container.removeChild(elem);
      elem.remove();
      deleteAnimal(animal._id).then((msg) => alert(msg));
    }
  });

  elem.appendChild(img);
  elem.appendChild(name);
  elem.appendChild(btnDelete);
  // elem.append(img, name);

  container.appendChild(elem);
}

const interval = setInterval(() => {
  getAnimais().then((arrayAnimais) => {
    // Para cada animal no array de animais, criar um div contendo as informações principais daquele animal, dentro do div container
    arrayAnimais.forEach(createAnimalElement);
  });
  console.log("Rodei 1");
}, 5000);

setTimeout(() => {
  clearInterval(interval);
  console.log("Rodei 2");
}, 5000);