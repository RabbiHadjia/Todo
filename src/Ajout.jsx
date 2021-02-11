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
    const id = new Date().getTime();
    const titre = nouveauTitre;
    const descrip = nouveauDescription;
    props.onTodoAdd({id,titre,descrip});
    setNouveauTitre('');
    setNouveauDescription('');
  }
    return(
      <form onSubmit={handleSubmit}>
        <div id="gauche2">
          <input class="inputEntree" value = {nouveauTitre}
          onChange = {handleChangeTitre} type="text" placeholder="Title: React"></input> <br/>
         <div id="divId">
            <input class="inputEntree" value = {nouveauDescription}
          onChange = {handleChangeDescrip} type="text" placeholder="Description: Finish with hook's practising"></input>
          </div>
          <button type="submit" >Add todo</button>
        </div>
      </form>
    
    )
}

export default Ajout;