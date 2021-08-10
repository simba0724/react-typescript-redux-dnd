import { v4 } from "uuid";
import { taskType } from "../../Components/TypeDefination";
import { storeType } from "../storeTypeDefinations";

const defultRequestedTasks: taskType[] = [
    {
        id: v4(),
        type: "open",
        text: "healthiness",
        createdAt: new Date()
    }, {
        id: v4(),
        type: "open",
        text: "heartiness",
        createdAt: new Date()
    },
    {
        id: v4(),
        type: "open",
        text: "robustness",
        createdAt: new Date()
    },
    {
        id: v4(),
        type: "open",
        text: "sap",
        createdAt: new Date()
    }
]

const defultToDoTasks: taskType[] = [
    {
        id: v4(),
        type: "open",
        text: "soundness",
        createdAt: new Date()
    },
    {
        id: v4(),
        type: "open",
        text: "verdure",
        createdAt: new Date()
    }
];

const defultInProgressTasks: taskType[] = [
    {
        id: v4(),
        type: "open",
        text: "health",
        createdAt: new Date()
    },
    {
        id: v4(),
        type: "open",
        text: "wellness",
        createdAt: new Date()
    }
];

const defultDoneTasks: taskType[] = [
    {
        id: v4(),
        type: "open",
        text: "Fifth task",
        createdAt: new Date()
    },
    {
        id: v4(),
        type: "open",
        text: "Fifth task",
        createdAt: new Date()
    },
    {
        id: v4(),
        type: "open",
        text: "Fifth task",
        createdAt: new Date()
    }
];

export const defultStore: storeType = {
    [v4()]: {
        tasks: defultRequestedTasks,
        type: "Cardiorespiratory Fitness"
    },
    [v4()]: {
        tasks: defultToDoTasks,
        type: "Muscular Strength",
    },
    [v4()]: {
        tasks: defultInProgressTasks,
        type: "Muscular Endurance",
    },
    [v4()]: {
        tasks: defultDoneTasks,
        type: "Body Composition",
    }
}