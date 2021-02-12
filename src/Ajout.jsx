import React, { useState } from "react";

const Ajout = (props) =>{
  const [nouveauTitre, setNouveauTitre] = useState('');
  const [nouveauDescription, setNouveauDescription] = useState('');

  const handleChangeTitre = event =>{
    setNouveauTitre(event.currentTarget.value);
  }
  const handleChangeDescrip = event =>{
    setNouveauDescription(event.currentTarget.value);
  }

  const handleSubmit = event =>{

    event.preventDefault();
    const id = 0;
    const titre = nouveauTitre;
    const description = nouveauDescription;
    const state = false;
    if (nouveauTitre.length <=1 || nouveauDescription.length <= 2){
      window.alert("Please provide a valid title and a good description !");
    }else{
      props.onTodoAdd({
        id,
        titre,
        description,
        state
      });
      setNouveauTitre('');
      setNouveauDescription('');
    }
  }
    return(
      <form onSubmit={handleSubmit}>
        <div id="gauche2">
          <input  className="inputEntree"
                  value = {nouveauTitre}
                  onChange = {handleChangeTitre}
                  type="text"
                  placeholder="Title: React"></input>
                  <br/>
         <div id="divId">
          <textarea className="inputEntree"
                    value = {nouveauDescription}
                    onChange = {handleChangeDescrip}
                    type="text"
                    placeholder="Description: Finish with hook's practising"></textarea>
          </div>
          <button type="submit" >Add todo</button>
        </div>
      </form>
    )
}

export default Ajout;