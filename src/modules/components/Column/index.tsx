
type ChildrenProps = {
    children: React.ReactNode; 
    gap?: String;
  };

export default function Column(props: ChildrenProps)
{
    return <div style={{ display: "flex", gap:`${props.gap || "10px"}`, justifyContent:"center"}}>{ props.children}</div>;
}
