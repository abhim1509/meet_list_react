const MeetList = (data) => {
  const { image, label } = data;
  return (
    <div style={{ margin: "10px" }}>
      <div
        style={{
          padding: "20px",
          background: "grey",
          borderRadius: "5px",
        }}
      >
        <img
          width={100}
          src={image}
          alt={label}
          style={{
            borderRadius: "9999px",
          }}
        />
        <div
          style={{
            marginTop: "20px",
            color: "white",
            borderRadius: "50%",
          }}
        >
          <label>{label}</label>
        </div>
      </div>
    </div>
  );
};

export default MeetList;
