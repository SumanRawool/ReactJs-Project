import "./App.css";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    async function getData() {
      const res = await fetch(
        "https://hub.dummyapis.com/employee?noofRecords=1000&idStarts=1001"
      );
      const finalres = await res.json();
      setData(finalres);
      setLoading(false);
      toast.success("Successfully fetch data");
    }
    getData();
  }, []);
  return (
    <>
      <Header />
      <ToastContainer />
      <div className="main">
        {loading ? (
          <TailSpin />
        ) : (
          data.map((e, i) => {
            return <p>{e.email}</p>;
          })
        )}
      </div>
    </>
  );
}

export default App;
