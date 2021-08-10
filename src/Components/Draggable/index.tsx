import { Draggable } from "react-beautiful-dnd";
import { taskType } from "../TypeDefination";

type DraggableTypes = {
    item: taskType;
    index: String | any;
}


const DraggableDiv = ({ item, index }: DraggableTypes) => {
    return (
        <Draggable
            key={item.id}
            draggableId={item.id}
            index={index}
        >
            {(provided, snapshot) => {
                return (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                            userSelect: "none",
                            padding: 16,
                            margin: "0 0 8px 0",
                            minHeight: "50px",
                            backgroundColor: "rgb(40 73 95)",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "20px",
                            ...provided.draggableProps.style
                        }}
                    >
                        {item.text}
                    </div>
                );
            }}
        </Draggable>
    );
}

export default DraggableDiv;