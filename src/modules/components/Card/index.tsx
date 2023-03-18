type Props = {
  title?: String;
  subTitle?: String;
  subject?: String;
  icon: React.ReactNode;
};

export default function Card(props: Props) {
  return (
    <div
      className="card-home"
      style={{
        height: "150px",
        width: "200px",
        boxShadow: "2px 2px 5px 1px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
        background: "#fff",
        padding: "50px",
      }}
    >
      {props.icon}
      <h2 style={{ color: "#01346B", fontFamily: "poppins" }}>{props.title}</h2>
      <h3 style={{ opacity: "0.5" }}>{props.subTitle}</h3>
      <h4>{props.subject}</h4>
    </div>
  );
}
