import React from "react";

export default function MyComponent(props) {
  return (
    <div
      style={{
        pointerEvents: "auto",
        color: "rgb(0, 0, 0)",
        backgroundColor: "rgba(0, 0, 0, 0)",
        font: '400 16px "Times New Roman"'
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          marginTop: "20px",
          height: "200px"
        }}
      />
    </div>
  );
}
