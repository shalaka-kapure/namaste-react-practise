const ShimmerUI = () => {
  return (
    <div className="cardsList">
      {Array(12)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer card">
            <div className="img"></div>
            <h2></h2>
            <h3></h3>
            <h4></h4>
          </div>
        ))}
    </div>
  );
};

export default ShimmerUI;
