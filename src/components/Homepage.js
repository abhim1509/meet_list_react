import MeetList from "./MeetList";
import list from "./data";

const HomePage = () => {
  const _renderList = () => {
    return list.map((item, index) => {
      return <MeetList key={item.id} label={item.name} image={item.image} />;
    });
  };
  return (
    <>
      <div style={{ background: "black" }}>Homepage element</div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>{_renderList()}</div>
    </>
  );
};

export default HomePage;
