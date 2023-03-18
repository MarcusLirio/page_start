type Props = {
  children: React.ReactNode;
  width?: string | number;
  height?: string | number;
  color?: string;
  background?: string;
  margin?: string | number;
  padding?: string | number;
  fontFamily?: string;
};

export default function Container(props: Props) {
  return (
    <section
      style={{
        width: `${props.width || "90%"}`,
        height: `${props.height || "5vh"}`,
        margin: `${props.margin || "0 100px"}`,
        zIndex: "2",
        background: `${props.background || "#fff"}`,
        color: `${props.color || "#fff"}`,
        padding: `${props.padding || "0"}`,
              textAlign: "center",
        fontFamily: `${props.fontFamily || "normal"}`
      }}
    >
      {props.children}
    </section>
  );
}
