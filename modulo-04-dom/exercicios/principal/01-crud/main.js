const baseUrl = "https://crudcrud.com/api/604dff26cc034dffb8adf6c0f00d059b";

const petSpecies = {
  dog: "Cachorro",
  cat: "Gato",
  fish: "Peixe",
  bird: "Pássaro",
  rabbit: "Coelho",
  guineaPig: "Porquinho da Índia",
  Hamster: "Hamster",
};

const petSizes = {
  small: "Pequeno",
  medium: "Médio",
  big: "Grande",
};

const petSex = {
  masc: "Macho",
  fem: "Fêmea",
};

const getNow = () => {
  const currentDate = new Date();
  currentDate.setUTCHours(currentDate.getUTCHours() - 3);

  return currentDate;
};

const createPet = async (pet) => {
  const response = await fetch(`${baseUrl}/pets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pet),
  });

  return response.json();
};

const updatePet = async (pet, id) => {
  const response = await fetch(`${baseUrl}/pets/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pet),
  });

  return response.json();
};

const deletePet = async (id) => {
  await fetch(`${baseUrl}/pets/${id}`, {
    method: "DELETE",
  });
};

const getPets = async () => {
  const response = await fetch(`${baseUrl}/pets`);
  const data = await response.json();

  return data;
};

const getPet = async (id) => {
  const response = await fetch(`${baseUrl}/pets/${id}`);
  const data = await response.json();

  return data;
};

const createUpdatePetModal = (pet) => {
  
}

(async () => {
  const pets = await getPets();

  const table = document.querySelector("table#pets-table");
  const thead = table.querySelector("thead");
  const tbody = table.querySelector("tbody");

  const trHead = document.createElement("tr");
  const thName = document.createElement("th");
  const thBirthDate = document.createElement("th");
  const thType = document.createElement("th");
  const thSize = document.createElement("th");
  const thSex = document.createElement("th");
  const thResponsiblePhone = document.createElement("th");
  const thResponsibleEmail = document.createElement("th");
  const thActions = document.createElement("th");

  table.classList = "w-full table-fixed border-collapse mt-4";

  thName.innerText = "Nome";
  thBirthDate.innerText = "Data de Nascimento";
  thType.innerText = "Espécie";
  thSize.innerText = "Porte";
  thSex.innerText = "Sexo";
  thResponsiblePhone.innerText = "Telefone";
  thResponsibleEmail.innerText = "Email";
  thActions.innerText = "Ações";

  thName.classList = "text-start text-sm font-medium text-gray-900 pb-2";
  thBirthDate.classList = "text-start text-sm font-medium text-gray-900";
  thType.classList = "text-start text-sm font-medium text-gray-900";
  thSize.classList = "text-start text-sm font-medium text-gray-900";
  thSex.classList = "text-start text-sm font-medium text-gray-900";
  thResponsiblePhone.classList = "text-start text-sm font-medium text-gray-900";
  thResponsibleEmail.classList = "text-start text-sm font-medium text-gray-900";
  thActions.classList = "text-start text-sm font-medium text-gray-900";

  trHead.className = "border-b border-b-slate-800";

  thResponsibleEmail.setAttribute("colspan", 2);

  trHead.appendChild(thName);
  trHead.appendChild(thBirthDate);
  trHead.appendChild(thType);
  trHead.appendChild(thSize);
  trHead.appendChild(thSex);
  trHead.appendChild(thResponsiblePhone);
  trHead.appendChild(thResponsibleEmail);
  trHead.appendChild(thActions);

  thead.appendChild(trHead);

  for (const pet of pets) {
    const tr = document.createElement("tr");

    const tdName = document.createElement("td");
    const tdBirthDate = document.createElement("td");
    const tdType = document.createElement("td");
    const tdSize = document.createElement("td");
    const tdSex = document.createElement("td");
    const tdResponsiblePhone = document.createElement("td");
    const tdResponsibleEmail = document.createElement("td");
    const tdActions = document.createElement("td");

    const buttonEdit = document.createElement("button");
    const buttonDelete = document.createElement("button");

    buttonEdit.innerText = "Editar";
    buttonDelete.innerText = "Excluir";

    buttonEdit.classList =
      "px-4 py-2 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-900 transition-all ease-in duration-300 mr-2";
    buttonDelete.classList =
      "px-4 py-2 bg-red-800 text-white font-semibold rounded-md hover:bg-red-900 transition-all ease-in duration-300";

    buttonEdit.addEventListener("click", async () => {
      const petToUpdate = await getPet(pet._id);
      createUpdatePetModal(petToUpdate);
    });

    buttonDelete.addEventListener("click", async () => {
      await deletePet(pet._id);
      location.reload();
    });

    tdName.innerText = pet.name;
    tdBirthDate.innerText = pet.birthDate;
    tdType.innerText = petSpecies[pet.kind];
    tdSize.innerText = petSizes[pet.size];
    tdSex.innerText = petSex[pet.sex];
    tdResponsiblePhone.innerText = pet.responsiblePhone;
    tdResponsibleEmail.innerText = pet.responsibleEmail;

    const actionsContainer = document.createElement("div");

    actionsContainer.className = "flex flex-row gap-2";

    actionsContainer.appendChild(buttonEdit);
    actionsContainer.appendChild(buttonDelete);

    tdActions.appendChild(actionsContainer);

    tdResponsibleEmail.setAttribute("colspan", 2);

    tr.appendChild(tdName);
    tr.appendChild(tdBirthDate);
    tr.appendChild(tdType);
    tr.appendChild(tdSize);
    tr.appendChild(tdSex);
    tr.appendChild(tdResponsiblePhone);
    tr.appendChild(tdResponsibleEmail);
    tr.appendChild(tdActions);

    table.appendChild(tr);
  }
})();

const createForm = document.querySelector("form#create-form");
const updateForm = document.querySelector("form#update-form");

createForm.className =
  "flex flex-col gap-4 p-4 bg-gray-200 rounded-md w-full mt-10";

for (const el of createForm.children) {
  if (el instanceof HTMLDivElement) {
    const defaultInputStyle =
      "px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-gray-800 hover:ring-2 hover:ring-gray-800 transition-all ease-in duration-300";
    el.className = "flex flex-col ";

    const label = el.querySelector("label");

    const inputText = el.querySelector("input[type=text]");
    const inputDate = el.querySelector("input[type=date]");
    const inputPhone = el.querySelector("input[type=number]");
    const inputEmail = el.querySelector("input[type=email]");
    const inputRadio = el.querySelectorAll("input[type=radio]");

    const select = el.querySelector("select");

    if (inputRadio.length) {
      inputRadio.forEach((radio) => {
        radio.classList = "mr-2 checked:accent-gray-900";
      });
    }

    const required = document.createElement("i");
    required.innerText = "*";
    required.classList = "text-red-500 text-sm";

    label.appendChild(required);
    label.classList = "text-gray-950 font-semibold";

    inputText ? (inputText.classList = defaultInputStyle) : null;
    inputEmail ? (inputEmail.classList = defaultInputStyle) : null;
    inputPhone ? (inputPhone.classList = defaultInputStyle) : null;

    if (inputDate) {
      inputDate.classList = defaultInputStyle;
      const formattedDate = getNow().toISOString().split("T")[0];
      inputDate.setAttribute("max", formattedDate.split("T")[0]);
    }
    if (select) {
      select.classList = `${defaultInputStyle} group`;

      select.querySelectorAll("option").forEach((option) => {
        option.classList =
          "text-gray-900 disabled:text-gray-200 disabled:bg-gray-700";
      });
    }
  }

  if (el instanceof HTMLButtonElement) {
    el.classList =
      "px-4 py-2 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-900 transition-all ease-in duration-300";
  }
}

createForm.addEventListener("submit", async (event) => {
  console.log("aqui");
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  await createPet(data);

  createForm.reset();
});

// updateForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const formData = new FormData(event.target);
//   const data = Object.fromEntries(formData);

//   console.log(data);

//   createForm.reset();
// });
