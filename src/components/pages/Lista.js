import FormData from "form-data";
import Axios from "axios";
import { useState } from "react";

function Lista() {
  const [file, setFile] = useState(null);

  const upload = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("screenshot", file);
    Axios.post("http://localhost:3232/aaaaaa", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => {
      console.log("Sucesso! ", res);
    });
  };

  return (
    <div><h1>Lista</h1>

      <div>
        <h1>teste upload de arquivos
          <input
            type="file"
            name="screenshot"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }} />
          <button className="" onClick={(e) => upload(e)}>Submit</button>
        </h1>
      </div>
    </div>//essa página deve ser apenas possível de se visualizar caso esteja logado.

  )
}

export default Lista