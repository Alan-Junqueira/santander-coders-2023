// import { addTask } from "./addTask.js";
// import { editTask } from "./editTask.js";
// import { getTaskById } from "./getTaskById.js";
// import { listTasks } from "./listTasks.js";
// import { removeTask } from "./removeTask.js";
// import { listTasksByType } from "./listTasksByStatusType.js";

// import { generateRandomId } from "./generateRandomId.js";
// import {tasks} from "./in-memory";

// import {generateRandomId} from "./generateRandomId";
// import {possibleStatus, tasks} from "./in-memory";
const possibleStatus = {
    TODO: "todo",
    IN_PROGRESS: "inProgress",
    DONE: "done"
}

const generateRandomId = () => {
    const timestamp = new Date().getTime();
    const randomValue = Math.floor(Math.random() * 100000 + 1);

    const randomId = `${timestamp}_${randomValue}`;
    return randomId;
};
const tasks = [
    {
        id: "1",
        title: "Fazer algo",
        description: "",
        createdAt: new Date(),
        expectedConclusion: "",
        status: "todo",
    },
    {
        id: "2",
        title: "Fazer algo",
        description: "",
        createdAt: new Date(),
        expectedConclusion: "",
        status: "todo",
    },
    {
        id: "3",
        title: "Fazer algo",
        description: "",
        createdAt: new Date(),
        expectedConclusion: "",
        status: "inProgress",
    },
    {
        id: "4",
        title: "Fazer algo",
        description: "",
        createdAt: new Date(),
        expectedConclusion: "",
        status: "inProgress",
    },
    {
        id: "5",
        title: "Fazer algo",
        description: "",
        createdAt: new Date(),
        expectedConclusion: "",
        status: "inProgress",
    },
    {
        id: "6",
        title: "Fazer algo",
        description: "",
        createdAt: new Date(),
        expectedConclusion: "",
        status: "done",
    },
];

const addTask = (title, description, expectedConclusion) => {
    try {

        if (!title) {
            throw new Error('Título da tarefa não pode ser vazio!');
        }
        if (!expectedConclusion || !new Date(expectedConclusion)) {
            throw new Error('Data de conclusão vazia ou inválida!');
        }

        const task = {
            id: generateRandomId(),
            title: title,
            description: description,
            createdAt: new Date(),
            expectedConclusion: new Date(expectedConclusion),
            status: possibleStatus.TODO
        }

        tasks.push(task);
        return task;
    } catch (error) {
        console.log(error.message);
    }

};


const editTask = (taskToBeSaved) => {

    const index = tasks.findIndex(task => task.id === taskToBeSaved.id)

    if (index === -1) return;

    const { id, ...properties } = taskToBeSaved;

    const updatedProperties = Object.keys(properties).reduce((acc, key) => {
        if (isNotNullish(properties[key])) {
            acc[key] = properties[key];
        }
        return acc;
    }, {});

    Object.assign(tasks[index], updatedProperties);
};

const isNotNullish = (value) => value !== null && value !== undefined;


console.log(generateRandomId());

console.log(tasks)

let task = addTask("Teste", "Descrição", new Date())

console.log(task)

console.log(tasks);
task.description = "Nova descrição";

editTask(task);

console.log(tasks)