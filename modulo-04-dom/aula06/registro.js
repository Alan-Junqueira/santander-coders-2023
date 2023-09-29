// import { v4 as uuidv4 } from 'uuid';
// console.log(uuidv4());
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

function getAnimal(id) {
  if (id) {
    animalIndex = arrayAnimais.findIndex((anim) => anim.id === id);

    if (animalIndex == -1) return;

    const animal = arrayAnimais[animalIndex];
    nome.value = animal.nome;
    especie.value = animal.especie;
    peso.value = animal.peso;
    dataNascimento.value = animal.dataNascimento;
  }
}

const arrayAnimais = JSON.parse(localStorage.getItem("arrayAnimais")) || [];
let animalIndex;
// const arrayAnimais = localStorage.getItem("arrayAnimais")?? [];
// const arrayAnimais = localStorage.getItem("arrayAnimais")? localStorage.getItem("arrayAnimais") : [];

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
    id: uuidv4(),
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

  if (animalIndex != -1) {
    arrayAnimais[animalIndex] = novoAnimal;
  } else {
    arrayAnimais.push(novoAnimal);
  }

  console.log(arrayAnimais);

  localStorage.setItem("arrayAnimais", JSON.stringify(arrayAnimais));

  form.reset();

  window.location = '/';
});

