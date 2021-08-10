import { Droppable } from "react-beautiful-dnd";
import { DragableTypes, taskType } from "../TypeDefination";
import Draggable from "../Draggable/index";

const Dragable = ({ uid, cardData }: DragableTypes) => {
    return (
        <Droppable droppableId={uid} key={uid}>
            {(provided, snapshot) => {
                return (
                    <div {...provided.droppableProps} ref={provided.innerRef} style={{ background: snapshot.isDraggingOver ? "#83abc6" : "lightgrey", padding: 4, width: 350, minHeight: 500, boxShadow: "0px 0px 10px #e7e2e2" }}>
                        {cardData.tasks.map((item: taskType, index: Number | any) => <Draggable item={item} index={index} />)}
                        {provided.placeholder}
                    </div>
                );
            }}
        </Droppable>
    );
}

export default Dragable;