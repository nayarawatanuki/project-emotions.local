import React from "react";

function kidLine({ kid }) {
  const [treatment, setTreatment] = useState(kid.treatment);
  const [code, setCode] = useState(kid.code);
  const [name, setName] = useState(kid.name);
  const [rate, setRate] = useState(kid.rate);
  const [birth, setBirth] = useState(kid.birth);
  const [parent, setParent] = useState(kid.parent);
  const [note, setNote] = useState(kid.note);
  const [i, setItemAtivo] = useState([]);
  
  async function deleteKid(id){
    console.log("id delete", id);

    await Axios.delete(`http://localhost:3000/deletedKid/${id}`)
    .then((response) => {
        console.log(response.data);
        window.alert("Criança apagada!");
    })
    .catch((error)=>{
        console.log(error);
    });
}


function tagInputs() {

    //selecionando linha da tabela (meio gambiarra rs)
    document.getElementById("rows").style.backgroundColor = "#91e3ee";

    //REMOVENDO ATRIBUTO readOnly!!!!
    document.getElementById("treatment").removeAttribute("readonly");
    document.getElementById("code").removeAttribute("readonly"); 
    document.getElementById("name").removeAttribute("readonly");
    document.getElementById("rate").removeAttribute("readonly");
    document.getElementById("birth").removeAttribute("readonly");
    document.getElementById("parent").removeAttribute("readonly");
    document.getElementById("note").removeAttribute("readonly");
}


  async function updateKid(id) {
    //ainda sem sucesso, problema no reenderização do banco
      
    if (!name || !rate || !birth || !parent || !note) {
      return window.alert("Prencha todos os campos");
    }

    await Axios.put(`http://localhost:3000/updatedKid/${id}`, {
      treatment,
      code,
      name,
      rate,
      birth,
      parent,
      note,
    }).then((response) => {
      console.log(response);
      console.log(
        JSON.stringify({
          tratamento: treatment,
          codigo: code,
          nome: name,
          grau: rate,
          "data de nascimento": birth,
          responsavel: parent,
          observações: note,
        })
      );
      console.log("Criança atualizada!");
      window.alert("Criança atualizada!");
      document.getElementById("rows").style.backgroundColor = "#fff";
    });
  }

  return (
    <tr id="rows" class="tr" padding="checkbox">
      <td>
        <input type="checkbox"></input>
      </td>
      <td class="fit-content">{kid.id}</td>
      <td>
        <input
          id="treatment"
          class="input"
          type="text"
          onClick={() => setItemAtivo(i)}
          defaultValue={kid.treatment}
          onChange={(e) => setTreatment(e.target.value)}
          readOnly
        />
      </td>
      <td>
        <input
          id="code"
          class="input"
          type="text"
          defaultValue={kid.code}
          onChange={(e) => setCode(e.target.value)}
          readOnly
        />
      </td>
      <td>
        <input
          id="name"
          class="input"
          type="text"
          defaultValue={kid.name}
          onChange={(e) => setName(e.target.value)}
          readOnly
        />
      </td>
      <td>
        <input
          id="rate"
          class="input"
          type="text"
          defaultValue={kid.rate}
          onChange={(e) => setRate(e.target.value)}
          readOnly
        />
      </td>
      <td>
        <input
          id="birth"
          class="input"
          type="text"
          defaultValue={kid.birth}
          onChange={(e) => setBirth(e.target.value)}
          readOnly
        />
      </td>
      <td>
        <input
          id="parent"
          class="input"
          type="text"
          defaultValue={kid.parent}
          onChange={(e) => setParent(e.target.value)}
          readOnly
        />
      </td>
      <td>
        <input
          id="note"
          class="input"
          type="text"
          defaultValue={kid.note}
          onChange={(e) => setNote(e.target.value)}
          readOnly
        />
      </td>
      <td>
        <button
          class="btn btn-sm btn-success d-inline-block mr-1"
          onClick={(e) => {
            e.preventDefault();
            tagInputs();
          }}
        >
          <i class="fas fa-edit"></i>
        </button>
        <button
          class="btn btn-sm btn-success d-inline-block mr-1"
          onClick={(e) => {
            e.preventDefault();
            updateKid(kid.id);
          }}
        >
          <i class="fas fa-save"></i>
        </button>
        <button
          class="btn btn-sm btn-danger d-inline-block"
          onClick={(e) => {
            e.preventDefault();
            deleteKid(kid.id);
          }}
        >
          <i class="fas fa-trash-alt"></i>
        </button>
      </td>
    </tr>
  );
}

export default kidLine;
