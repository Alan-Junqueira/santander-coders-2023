const URL = "https://crudcrud.com/api/bcd8220e42fb4a1a9b33208b5631b27e/animais";

async function getAnimal(id) {
  if (id) {
    const response = await fetch(URL + `/${id}`);
    const animal = await response.json();

    nome.value = animal.nome;
    especie.value = animal.especie;
    peso.value = animal.peso;
    dataNascimento.value = animal.dataNascimento;
  }
}

async function addAnimal(animalObj) {
  const response = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(animalObj),
    headers: { 'Content-Type': 'application/json' }
  });

  return await response.json();
}

async function updateAnimal(id, animalObj) {
  const response = await fetch(URL + `/${id}`, {
    method: "PUT",
    body: JSON.stringify(animalObj),
    headers: { 'Content-Type': 'application/json' }
  });

  return await response.json();
}

const today = (new Date()).toISOString().split("T")[0];
dataNascimento.max = today;

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
getAnimal(id);

// CREATE
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const {
    nome: nome_animal,
    especie,
    peso,
    dataNascimento
  } = event.target;
  // nome = event.target.nome

  const novoAnimal = {
    nome: nome_animal.value,
    especie: especie.value,
    peso: peso.value,
    dataNascimento: dataNascimento.value
  };

  nomeError.innerText = "";
  espError.innerText = "";
  pesoError.innerText = "";
  dataError.innerText = "";

  if (novoAnimal.nome == "") {
    nomeError.innerText = "Nome é obrigatório";
    return;
  }

  if (novoAnimal.especie == "") {
    espError.innerText = "Espécie é obrigatória";
    return;
  }

  if (novoAnimal.peso == "") {
    pesoError.innerText = "Peso é obrigatório";
    return;
  } else if (parseFloat(novoAnimal.peso) <= 0) {
    pesoError.innerText = "Peso deve ser um valor acima de zero";
    return;
  }

  if (novoAnimal.dataNascimento == "") {
    dataError.innerText = "Data é obrigatória";
    return;
  } else if (novoAnimal.dataNascimento > today) {
    dataError.innerText = "Data não pode ser maior do que a data atual";
    return;
  }

  if (id) {
    updateAnimal(id, novoAnimal).then(console.log);
  } else {
    addAnimal(novoAnimal).then((data) => console.log(data));
  }

  form.reset();

  window.location = '/';
});

