import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import filesize from 'filesize';

import GlobalStyle from '../../../styles/global';
import { App, Container, Content } from './styles.js';
import './style.css';

import { Link } from 'react-router-dom'

import api from '../../../services/api'
import Upload from '../../../components/Upload';
import FileList from '../../../components/FileList';

class addKid extends Component {
  state = {
    uploadedFile: [],
  };

  handleUpload = photo => {
    const uploadedFile = photo.map(photo => ({
      photo,
      id: uniqueId(),
      name: photo.name,
      readableSize: filesize(photo.size),
      preview: URL.createObjectURL(photo),
      Progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }));

    this.setState({
      uploadedFile: this.state.uploadedFile.concat(uploadedFile)
    });

    console.log(photo);

    uploadedFile.forEach(this.processUpload);
  }

  updateFile = (id, data) => {
    this.setState({ uploadedFile: this.state.uploadedFile.map(uploadedFile => { 
      return id === uploadedFile.id 
        ? { ...uploadedFile, ...data } 
        : uploadedFile;
      })
    });
  }

  processUpload = (uploadedFile) => {

    const file = uploadedFile.preview;
    const treatment = document.getElementById('treatment').value;
    const code = document.getElementById('code').value;
    const name = document.getElementById('name').value;
    const rate = document.getElementById('rate').value;
    const birth = document.getElementById('birth').value;
    const parent = document.getElementById('parent').value;
    const note = document.getElementById('note').value;
    
    /*const data = new FormData();

    data.append('treatment', treatment);
    data.append('code', code);
    data.append('name', name);
    data.append('rate', rate);
    data.append('birth', birth);
    data.append('parent', parent);
    data.append('note', note);
    data.append('photo', uploadedFile.photo, uploadedFile.name);*/

    console.log(file, treatment, code, name, rate, birth, parent, note);
    api.post('createdKid', { file, treatment, code, name, rate, birth, parent, note }, {
      onUploadProgres: e => {
        const progress = parseInt(Math.round((e.loaded * 100) / e.total));

        this.updateFile(uploadedFile.id, {
          progress,
        })
      }
    })
  }

  render() {
    const { uploadedFile } = this.state;
    return (
      <App>
        <nav className="navbar navbar-light bg-light" >
          <Link to="/Kids">
            <button type="button" className="button button-info">Voltar</button>
          </Link>
          <h5 className="navbar-brand float-center" text-align="center">Adicionando Criança</h5>
        </nav>
        
        <Container>
          <Content>
          <form >
                <div className="form-check">
                  <input type="checkbox" id="treatment" defaultValue="off"
                  className="form-check-input"
                  onChange={(e)=>{
                    if(e.target.checked !== true){
                      e.target.value = "off"
                    }else{
                      e.target.value = "on"
                    }
                  }} />
                  <label htmlFor="treatment">Tratamento ativo</label>
                </div>       

                <div className="form-infoKid float-center" margin-top="10%">
                  <div className="form-group" >
                    <label htmlFor="code">Código de Acesso</label>
                    <input type="number" id="code" name="code" className="form-control" placeholder="Defina um código de acesso" defaultValue={parseInt(Math.random()*10000)} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="name"> Nome </label>
                    <input type="text" id="name" name="name" className="form-control" placeholder="Digite o nome da criança" /*onChange={(e)=>{setName(e.target.value)}}*/ />
                  </div>

                  <div className="form-row">
                    <div className="form-group-state col-md-6">
                      <label htmlFor="rate">Grau</label>
                      <select id="rate" name="rate" className="form-control" placeholder="Selecione" /*value={rate} onChange={(e)=>{setRate(e.target.value)}}*/ >
                        <option> </option>
                        <option value = "severo" >Severo</option>
                        <option value = "moderado">Moderado</option>
                        <option value = "leve">Leve</option>
                      </select>
                    </div>     
                    <div className="form-group col-md-6">
                      <label htmlFor="birth">Data de nasc.</label>
                      <input type="text" id="birth" name="birth" className="form-control" /*onChange={(e)=>{setBirth(e.target.value)}}*/ />
                    </div>
                  </div>    

                  <div className="form-group">
                    <label htmlFor="parent">Responsável</label>
                    <input type="text" id="parent" name="parent" className="form-control" placeholder="Nome do responsável" /*onChange={(e)=>{setParent(e.target.value)}}*/ />
                  </div>

                  <div className="form-group">
                    <label htmlFor="note">Observações</label>
                    <textarea type="text" id="note" name="note" className="form-control" placeholder="Detalhar criança" /*onChange={(e)=>{setNote(e.target.value)}}*/ /> 
                  </div>

                  <div className="form-group" >
                    <Upload onUpload={this.handleUpload} />
                    
                    { !!uploadedFile.length && (
                      <FileList file={uploadedFile} />
                    )}
                  </div>
                  
                  <div>
                    <Link to="/Kids">
                      <button className="button button-danger">Cancelar</button>
                    </Link>

                    <button onClick ={this.handleUpload} className="button button-success">Adicionar</button>
                    
                  </div>

                </div>

              </form>
            
          </Content>
          <GlobalStyle />
        </Container>
      </App>
      
    
    )
  }
}

export default addKid;