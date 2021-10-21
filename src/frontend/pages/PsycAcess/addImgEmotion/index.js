import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import filesize from 'filesize';

import GlobalStyle from '../../../styles/global';
import { App, Container, Content } from './styles.js';

import { Link } from 'react-router-dom'

import api from '../../../services/api'
import Upload from '../../../components/Upload';
import FileList from '../../../components/PsycAcess/FileList';

class addImgEmotion extends Component {
  state = {
    uploadedFilePreview: [],
    uploadedFile: undefined
  };

  handleUpload = image => {
    const addedFiles = image.map(image => ({
      image,
      id: uniqueId(),
      name: image.name,
      readableSize: filesize(image.size),
      preview: URL.createObjectURL(image),
      Progress: 0,
      uploaded: false,
      error: false,
      url: image.url,
    }));

    //mostra preview
    this.setState({
      uploadedFilePreview: this.state.uploadedFilePreview.concat(addedFiles),
      uploadedFile: addedFiles[0]
    });
  }

  updateFile = (id, data) => {
    this.setState({ uploadedFilePreview: this.state.uploadedFilePreview.map(uploadedFile => { 
      return id === uploadedFilePreview.id 
        ? { ...uploadedFilePreview, ...data } 
        : uploadedFilePreview;
      })
    });
  }

  createdActivity = () => {
    const query = this.props.location.search;
    const kid_id = query.replace("?", "")
    console.log(query);

    var data = new FormData();

    data.append('kid_id', kid_id);
    
    data.append('name', document.getElementById('name').value);
    data.append('emotion', document.getElementById('emotion').value);
    
    data.append('response1', document.getElementById('response1').value);
    data.append('response2', document.getElementById('response2').value);
    data.append('response3', document.getElementById('response3').value);
    data.append('respCorrect', document.getElementById('respCorrect').value);
    data.append('image', this.state.uploadedFile.image, this.state.uploadedFile.name);

    for (var key of data.entries()) {
      console.log(key[0] + ': ' + key[1]);
    }

    api.post('/kids/:kid_id/createdTask', data, {

      //deixa a bolinha verde
      onUploadProgress: e => {
        const progress = parseInt(Math.round((e.loaded * 100) / e.total));

        this.updateFile(uploadedFile.id, {
          progress,
        })
      }

    }).then(response => {
      this.updateFile(uploadedFile.id, {
        uploaded: true,
        id: response.data.id,
        ur: response.data.url
      })
    }).catch(() => {
      this.updateFile(uploadedFile.id, {
        error: true
      })
    })
  }      

  render() {
    const { uploadedFilePreview } = this.state;
    return (
      <App>
        <nav className="navbar navbar-light bg-light">
          <Link to="/">
              <button type="button" className="button button-info">Voltar</button>
          </Link>
          <h5 className="navbar-brand float-center">Adicionando atividade</h5>
          <h1> </h1>
        </nav>
        <Container>
          <Content>
            <form encType='multipar/form-data'>
              <div className="form-infoKid" style={{marginTop: "4%"}}>
                <div className="form-group">
                  
                </div>
              </div>
              <div className="form-group" >
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="name" className="form-control" placeholder="Nome da Atividade" />
              </div>
              <div className="form-group" >
                <label htmlFor="emotion">Emoção</label>
                <input type="text" id="emotion" name="emotion" className="form-control" placeholder="Qual será a emoção trabalhada?" />
              </div>
              <div className="form-group" >
                <label htmlFor="image">Escolha a imagem</label>
                <Upload onUpload={this.handleUpload} />
                
                { !!uploadedFilePreview.length && (
                  <FileList file={uploadedFilePreview} />
                )}
              </div>
              
              <div className="form-group">
                  <label htmlFor="response1">Resposta 1</label>
                  <input type="text" id="response1" name="response1" className="form-control" placeholder="Emoção 1" />
              </div>  

              <div className="form-group">
                  <label htmlFor="response2">Resposta 2</label>
                  <input type="text" id="response2" name="response2" className="form-control" placeholder="Emoção 2" />
              </div>

              <div className="form-group">
                  <label htmlFor="response3">Resposta 3</label>
                  <input type="text" id="response3" name="response3" className="form-control" placeholder="Emoção 3" />
              </div>

              <div className="form-group">
                  <label htmlFor="respCorrect">Resposta correta</label>
                  <input type="text" id="respCorrect" name="respCorrect" className="form-control" placeholder="Resposta correta" />
              </div>

              <div>
                <Link to="/Kids">
                  <button className="button button-danger">Cancelar</button>
                </Link>
                <button onClick={this.createdActivity} className="button button-success">Criar atividade</button>
              </div>
            </form>
          </Content>
          <GlobalStyle />
        </Container>
      </App>
    )
  }
}


export default addImgEmotion;