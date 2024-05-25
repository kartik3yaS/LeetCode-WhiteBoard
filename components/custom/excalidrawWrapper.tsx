"use client";
import {
  Excalidraw,
  convertToExcalidrawElements,
} from "@excalidraw/excalidraw";

// import "@excalidraw/excalidraw/index.css";

const ExcalidrawWrapper: React.FC = () => {
  // console.info(convertToExcalidrawElements([{
  //   type: "rectangle",
  //   id: "rect-1",
  //   width: 186.47265625,
  //   height: 141.9765625,
  // },]));

  return (
    <div className="h-screen flex justify-center items-center max-w-screen-2xl">
      {/* <div className="flex-1 max-w-screen-lg rounded-lg"> */}
      <Excalidraw />
      {/* </div> */}
    </div>
  );
};
export default ExcalidrawWrapper;
