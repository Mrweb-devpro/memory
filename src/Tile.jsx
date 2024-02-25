export function Tile({ content: Content, flip, state }) {
  const style = {
    tile: "flex items-center cursor-pointer justify-center rounded-xl w-[23%] aspect-square ",
    content: {
      display: "inline-block",
      width: "60%",
      height: "60%",
      color: "#fff",
      verticalAlign: "top",
    },
  };
  switch (state) {
    case "start":
      return <Back className={style.tile + "bg-indigo-300"} flip={flip} />;
    case "flipped":
      return (
        <Front className={style.tile + "bg-indigo-500"}>
          <Content style={style.content} />
        </Front>
      );
    case "matched":
      return (
        <Matched className={style.tile}>
          <Content style={{...style.content, color:"#4b008220"}} />
        </Matched>
      );
    default:
      throw new Error("Invalid state " + state);
  }
}

function Back({ className, flip }) {
  return <div onClick={flip} className={className}></div>;
}

function Front({ className, children }) {
  return <div className={className}>{children}</div>;
}

function Matched({ className, children }) {
  return <div className={className}>{children}</div>;
}
