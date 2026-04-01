import deals from "./deals";

function App() {
  return (
    <div className="canvas">
      <Navbar />
      <br />
      <Deals />
      <br />
      <About />
    </div>
  );
}

export default App;

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1 className="logo_kane">KANE</h1>
        <h1 className="logo_motors">MOTORS</h1>
      </div>

      <h2>
        <a href={`tel:+13505005050`}>{`(350) 500-5050`}</a>
      </h2>
    </div>
  );
};

const Deals = () => {
  return (
    <div className="deals_container">
      <h1>Current Specials</h1>
      {deals.map((deal, index) => {
        return (
          <>
            <div key={index} className="deal">
              <div className="deal_image_box">
                <img src={deal.img} alt="alternateImage" />
              </div>
              <div className="deal_details">
                <p className="deal_vehicle">{deal.vehicle}</p>
                <p>
                  Monthly Payment:{" "}
                  <span className="deal_details_detail">{deal.payment}</span>
                </p>
                <p>
                  For:{" "}
                  <span className="deal_details_detail">
                    {deal.months} months
                  </span>
                </p>
                <p className="deal_disclosure">
                  *Disclosure: {deal.disclosure}
                </p>
              </div>
            </div>
            <br />
            {index === deals.length - 1 ? null : <span className="line"></span>}
          </>
        );
      })}
    </div>
  );
};

const About = () => {
  return (
    <div className="about_container">
      <div className="about_logo">
        <h3 className="about_logo_kane">KANE</h3>
        <h3 className="about_logo_motors">MOTORS LLC</h3>
      </div>
      <div className="about_details">
        <h3>6340 Coldwater Canyon Ave Suite 204</h3>
        <h3>Valley Glen, CA 91606</h3>
        <h3>
          <a href={`tel:+13505005050`}>{`(350) 500-5050`}</a>
        </h3>
        <h3>KANE.Motors.LLC@gmail.com</h3>
      </div>
    </div>
  );
};
