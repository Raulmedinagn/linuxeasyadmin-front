import React from 'react';
import swal from 'sweetalert';

export class Apagar extends React.Component {
    constructor(props) {
        super();
        this.state = {
            value : null
        };
    }
    apagar(){
      fetch("/api/shutdown")
        .then(res => res.json())
        .then(json => {
          this.setState({
              Value : json.Value
          });
        });
    }

mostrarAlerta(){
  swal({
    title: "Aviso",
    text: "¿Estas seguro que quieres apagar el equipo?",
    icon: "warning",
    buttons:["No","Si"]
  }).then(respuesta=>{
    if(respuesta){
      {this.apagar()}
    }
  })
}
    render() {
        return(
          <div>
            <button class="btn btn-danger ml-2" onClick={(event) => {this.mostrarAlerta()}}>Apagar</button>
          </div>
        )

    }

}
