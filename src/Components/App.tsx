import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { changeTaskType } from "../store/actions";
import { storeType } from "../store/storeTypeDefinations";
import "./App.style.css";
import Droppable from "./Droppable/index";

// const itemsFromBackend = [
//   { id: v4(), content: "First task" },
//   { id: v4(), content: "Second task" },
//   { id: v4(), content: "Third task" },
//   { id: v4(), content: "Fourth task" },
//   { id: v4(), content: "Fifth task" }
// ];

// const columnsFromBackend = {
//   [v4()]: {
//     name: "Requested",
//     items: itemsFromBackend
//   },
//   [v4()]: {
//     name: "To do",
//     items: []
//   },
//   [v4()]: {
//     name: "In Progress",
//     items: []
//   },
//   [v4()]: {
//     name: "Done",
//     items: []
//   }
// };



function App() {

  const tasks: storeType = useSelector((store) => ({ ...(store as any).tasks }))
  const dispatch = useDispatch();

  const onDragEnd = (result: any, columns: storeType) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {

      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = sourceColumn.tasks;
      const destItems = destColumn.tasks;
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      let newColums = { ...columns, [source.droppableId]: { ...sourceColumn, tasks: sourceItems }, [destination.droppableId]: { ...destColumn, tasks: destItems } }
      dispatch(changeTaskType({ type: 'CHANGE-TASK-TYPE', payload: newColums }))

    } else {

      const column = columns[source.droppableId];
      const copiedItems = column.tasks;
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      let newColums = { ...columns, [source.droppableId]: { ...column, tasks: copiedItems } };
      dispatch(changeTaskType({ type: 'CHANGE-TASK-TYPE', payload: newColums }))

    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly", height: "100%" }}>
      <DragDropContext onDragEnd={result => onDragEnd(result, tasks)}>
        {Object.entries(tasks).map(([key, cardData]: any, index) => {
          return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} key={key}>
              <h2 style={{ fontSize: "26px" }}>{cardData.type}</h2>
              <div style={{ margin: 8 }}>
                <Droppable uid={key} cardData={cardData} />
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div >
  );
}

export default App;
