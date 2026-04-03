import { useState } from "react";
import dealFilters from "./dealFilters";

function Admin() {
  const [code, setcode] = useState("");
  const [show, setshow] = useState(false);

  const checkCode = () => {
    if (code !== process.env.REACT_APP_ADMIN_CODE) {
      setshow(false);
    } else {
      setshow(true);
    }
  };

  if (!show) {
    return (
      <div>
        <input
          type="text"
          value={code}
          onChange={(e) => setcode(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              checkCode();
            }
          }}
        />
      </div>
    );
  } else {
    return (
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Vehicle</th>
            <th>Trim/Package</th>
            <th>Down Payment</th>
            <th>Monthly</th>
            <th>Months</th>
            <th>Dealer</th>
            <th>Deal Link</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(dealFilters)
            .flat()
            .map((deal, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img src={deal.img} alt={deal.vehicle} />
                  </td>
                  <td>{deal.vehicle}</td>
                  <td>{deal.trim_package}</td>
                  <td>{deal.down_payment}</td>
                  <td>{deal.payment}</td>
                  <td>{deal.months}</td>
                  <th>{deal.dealer}</th>
                  <td>
                    <a href={deal.deal_link} target="_blank" rel="noreferrer">
                      LINK
                    </a>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  }
}

export default Admin;
