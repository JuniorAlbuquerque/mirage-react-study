import "./App.css";
import "./infra/services/api/miragejs";
import api from "./infra/services/api/api";
import { useEffect, useState } from "react";
import { dateToView } from "./utils/formatDate";

interface IDoctors {
  id: number;
  nome: string;
  especialidade: string;
  avatar: string;
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
                format: "dateTimeSeconds",
              })}
            </span>

            <span>
              Fim:{" "}
              {dateToView(item.endDate, {
                format: "dateTimeSeconds",
              })}
            </span>

            <p style={{ fontWeight: "bold" }}>Doctors</p>

            {item.doctors.map((doctor) => (
              <div
                key={doctor.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 14,
                }}
              >
                <img
                  src={doctor.avatar}
                  alt="AVATAR"
                  width="80"
                  style={{ borderRadius: "50%", marginRight: 14 }}
                />
                <span>{doctor.nome}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
