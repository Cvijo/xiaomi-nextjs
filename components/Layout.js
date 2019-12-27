import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      <title>Xiaomi - nextjs</title>
      <link rel='icon' href='/favicon.ico' />
      <Header />
      {props.children}
    </div>
  );
}
