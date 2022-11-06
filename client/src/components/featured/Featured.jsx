import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://www.voyagingtheworld.com/wp-content/uploads/2021/08/ouael-ben-salah-0xe2FGo7Vc0-unsplash-e1630423046925.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Milano</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://media.cntraveler.com/photos/5b8576320c5e123ef6ed3d55/16:9/w_2560%2Cc_limit/Budapest_GettyImages-512278610.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Budapest</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
