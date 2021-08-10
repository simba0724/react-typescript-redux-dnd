export type taskType = {
    id: String | any;
    type: String,
    text: String,
    createdAt: Date
}
export type CardData = {
    type: String;
    tasks: taskType[];
}

export type DragableTypes = {
    uid: String | any;
    cardData: CardData
}