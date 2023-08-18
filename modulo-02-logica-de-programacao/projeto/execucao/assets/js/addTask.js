import { generateRandomId } from "./generateRandomId.js";
import { possibleStatus, tasks } from "./in-memory.js";

export const addTask = (title, description, expectedConclusion) => {
    try {

        if (!title) {
            throw new Error('Título da tarefa não pode ser vazio!');
        }
        if (!expectedConclusion || !new Date(expectedConclusion)) {
            throw new Error('Data de conclusão vazia ou inválida!');
        }

        const task = {
            id: generateRandomId,
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
