/*import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { uniqueId } from 'lodash';
import KidRow from '../../../components/KidList'
import api from 'axios';

function Kids() {
    const [list, setList] = useState([]);

    useEffect(() => {
        api.get('listKids')
        .then((response) => {
          setList(response.data)
        });
    }, []);

    async function updateKid({
        id,
        treatment,
        code,
        name,
        rate,
        birth,
        parent,
        note,
    }){

        if(name !== "" && rate !== "" && birth !== "" && parent !== "" && note !== ""){
            await api.put(`http://localhost:3000/updatedKid/${id}`,
              { treatment, code, name, rate, birth, parent, note }
            )
            .then(response => {
                console.log(response);
                console.log(JSON.stringify({
                    "tratamento": treatment,
                    "codigo": code,
                    "nome": name, 
                    "grau": rate,
                    "data de nascimento": birth,
                    "responsavel": parent,
                    "observações": note
                }));
                console.log("Criança atualizada!");
                window.alert('Criança atualizada!');
                document.getElementById("rows").style.backgroundColor = "#fff";
            });
        }else{
            window.alert('Prencha todos oss campos')
        }
    }

    async function deleteKid(id){
        console.log("id delete", id);
        await api.delete(`http://localhost:3000/deletedKid/${id}`)
        .then((response) => {
            console.log(response.data);
            window.alert("Criança apagada!");
            
            const newList = list.filter((kid) => kid.id !== id);
            setList(newList);
        })
        .catch((error)=>{
            console.log(error);
        });
    }
}

export default Kids;*/