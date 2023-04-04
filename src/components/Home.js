import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  const [state, setState] = useState(2);
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );
      const res = await get.json();
      setData(res);
    }
    getData();
    document.title = `(${state}) Employees Online`;
  }, [state]);

  return (
    <div>
      <button onClick={() => setState(state + 2)}>Click Me {state}</button>
      {data?.map((element, index) => {
        return (
          <Link to={`/app/${element.id}`}>
            <div className="data" key={index}>
              <h1>{element.firstName}</h1>
              <h1>{element.lastName}</h1>
              <h1>{element.email}</h1>
            </div>
          </Link>
        );
      })}
      <Outlet />
    </div>
  );
};

export default Home;
