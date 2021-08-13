import "./App.css";
import "./infra/services/api/miragejs";
import api from "./infra/services/api/api";
import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import { dateToView } from "./utils/formatDate";

interface IDoctors {
  id: number;
  nome: string;
  especialidade: string;
}

interface IShifts {
  id: number;
  nomePlantao: string;
  doctors: IDoctors[];
  startDate: string;
  endDate: string;
}

function App() {
  const [shifts, setShifts] = useState<IShifts[]>([]);

  console.log(DateTime.now().toFormat("D"));

  useEffect(() => {
    async function getShift() {
      const { data } = await api.get("/shifts");
      setShifts(data);
    }

    getShift();
  }, []);

  return (
    <div className="App">
      <h1>Teste MirageJS</h1>

      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {shifts.map((item) => (
          <div
            key={item.id}
            style={{ display: "flex", flexDirection: "column", width: 400 }}
          >
            <h3 style={{ fontWeight: "bold" }}>{item.nomePlantao}</h3>
            <span>
              Inicio:{" "}
              {dateToView(item.startDate, {
                format: "dateAndTime",
              })}
            </span>

            <span>
              Fim:{" "}
              {dateToView(item.endDate, {
                format: "dateAndTime",
              })}
            </span>

            <p style={{ fontWeight: "bold" }}>Doctors</p>

            {item.doctors.map((doctor) => (
              <li key={doctor.id}>{doctor.nome}</li>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
