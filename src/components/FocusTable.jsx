import { useState } from "react";
import style from "./FocusTable.module.css";

const initialRows = [
  {
    id: 1,
    img: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/40.jpg",
    name: "Emily Hoffman",
    email: "emhoff3245@msn.com",
    status: "Paid",
  },
  {
    id: 2,
    img: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/96.jpg",
    name: "Michel Lewin",
    email: "michel@lewin.dev",
    status: "Unconfirmed",
  },
  {
    id: 3,
    img: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/49.jpg",
    name: "Tessa Dietrich",
    email: "tessa@pixelcraft.com",
    status: "Confirmed",
  },
  {
    id: 4,
    img: "https://assets.codepen.io/605876/cropped-headshot--saturated-low-res.jpg",
    name: "John Doe",
    email: "johnny.doe@me.com",
    status: "Paid",
  },
  {
    id: 5,
    img: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/72.jpg",
    name: "Niels Grau",
    email: "grau@gmail.com",
    status: "Pending",
  },
  {
    id: 6,
    img: "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/64.jpg",
    name: "Nadine Dare",
    email: "nadine.says@hey.com",
    status: "Unconfirmed",
  },
];

const statuses = ["Paid", "Unconfirmed", "Confirmed", "Pending"];

const FocusTable = () => {
  const [rows, setRows] = useState(initialRows);

  const handleChange = (id, field, value) => {
    setRows((rows) =>
      rows.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  return (
    <>
      <div className={style.members}>
        <table role="grid" className={style.table}>
          <thead className={style.thead}>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Subscription</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className={style.tr}>
                <td>
                  <img src={row.img} alt="" className={style.img} />
                </td>

                <td>
                  <input
                    aria-label="name"
                    type="text"
                    value={row.name}
                    className={style.input}
                    onChange={(e) => handleChange(row.id, "name", e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.target.blur();
                      }
                    }}
                  />
                </td>
                <td>
                  <input
                    aria-label="email"
                    type="email"
                    value={row.email}
                    className={style.input}
                    onChange={(e) => handleChange(row.id, "email", e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.target.blur();
                      }
                    }}
                  />
                </td>
                <td>
                  <select
                    value={row.status}
                    className={style.input}
                    onChange={(e) => {
                      handleChange(row.id, "status", e.target.value);
                      e.target.blur(); 
                    }
                      
                    }
                  >
                    {statuses.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FocusTable;
