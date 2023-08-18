import {TaskIdNotFound, tasks} from "./in-memory";

export const editTask = (taskToBeSaved) => {
    const task = tasks.find(task => task.id === taskToBeSaved.id)

    if (!task) throw new TaskIdNotFound(taskToBeSaved.id);

    for (const key in task) {
        if (isUpdatableKey(key) && isNotNullish(task[key])) {
            task[key] = taskToBeSaved[key];
        }
    }
};

const isNotNullish = (value) => value != null;

const isUpdatableKey = (key) => key !== "id" && key !== "createdAt";

// export const editTask = (taskToBeSaved) => {
//
//     const index = tasks.findIndex(task => task.id === taskToBeSaved.id)
//
//     if (index === -1) return;
//
//     const { id, ...properties } = taskToBeSaved;
//
//     const updatedProperties = Object.keys(properties).reduce((acc, key) => {
//         if (isNotNullish(properties[key])) {
//             acc[key] = properties[key];
//         }
//         return acc;
//     }, {});
//
//     tasks[index] = {
//         ... tasks[index],
//         ... updatedProperties
//     }
// };