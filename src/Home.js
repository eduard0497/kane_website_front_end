import { Fragment, useState } from "react";
import dealFilters from "./dealFilters";

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
  const [currentDeals, setcurrentDeals] = useState(
    Object.values(dealFilters).flat(),
  );

  const selectDeals = (selectedDeal) => {
    if (!selectedDeal) {
      setcurrentDeals(Object.values(dealFilters).flat());
      return;
    }

    setcurrentDeals(dealFilters[selectedDeal] || []);
  };

  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div className="deals_container">
      <h1>Current Specials</h1>

      <div className="filter_wrapper">
        <div
          className="active_pill"
          style={{ "--active-index": activeIndex }}
        />
        {Object.keys(dealFilters).map((brand, index) => (
          <button
            key={brand}
            className={`filter_button ${activeIndex === index ? "active" : ""}`}
            onClick={() => {
              setActiveIndex(index);
              selectDeals(brand);
            }}
          >
            {brand}
          </button>
        ))}
      </div>

      {currentDeals.map((deal, index) => {
        return (
          <Fragment key={index}>
            <div className="deal">
              <div className="deal_image_box">
                <img src={deal.img} alt={deal.vehicle} loading="lazy" />
              </div>
              <div className="deal_details">
                <p className="deal_vehicle">{deal.vehicle}</p>
                {deal.trim_package ? (
                  <p>Package/Trim: {deal.trim_package}</p>
                ) : null}
                <p>
                  Down:
                  <span className="deal_details_detail">
                    {deal.down_payment}
                  </span>
                </p>
                <p>
                  Monthly:{" "}
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
            {index === currentDeals.length - 1 ? null : (
              <span className="line"></span>
            )}
          </Fragment>
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
