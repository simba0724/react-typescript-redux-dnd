import { taskType } from "../Components/TypeDefination"

export type storeType = {
    [string: string]: {
        type: String;
        tasks: taskType[],
    }
}

export type action = {

}
