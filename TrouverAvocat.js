import React, { useState } from 'react';
//import './TrouverAvocat.css';

const TrouverAvocat = () => {
  const [wilaya, setWilaya] = useState('');
  const [specialite, setSpecialite] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const options = [
    { value: '1', name: 'Adrar' },
    { value: '2', name: 'Chlef' },
    { value: '3', name: 'Laghouat' },
    { value: '4', name: 'Oum El Bouaghi' },
    { value: '5', name: 'Batna' },
    { value: '6', name: 'Béjaïa' },
    { value: '7', name: 'Biskra' },
    { value: '8', name: 'Béchar' },
    { value: '9', name: 'Blida' },
    { value: '10', name: 'Bouira' },
    { value: '11', name: 'Tamanrasset' },
    { value: '12', name: 'Tébessa' },
    { value: '13', name: 'Tlemcen' },
    { value: '14', name: 'Tiaret' },
    { value: '15', name: 'Tizi Ouzou' },
    { value: '16', name: 'Alger' },
    { value: '17', name: 'Djelfa' },
    { value: '18', name: 'Jijel' },
    { value: '19', name: 'Sétif' },
    { value: '20', name: 'Saïda' },
    { value: '21', name: 'Skikda' },
    { value: '22', name: 'Sidi Bel Abbès' },
    { value: '23', name: 'Annaba' },
    { value: '24', name: 'Guelma' },
    { value: '25', name: 'Constantine' },
    { value: '26', name: 'Médéa' },
    { value: '27', name: 'Mostaganem' },
    { value: '28', name: 'M\'Sila' },
    { value: '29', name: 'Mascara' },
    { value: '30', name: 'Ouargla' },
    { value: '31', name: 'Oran' },
    { value: '32', name: 'El Bayadh' },
    { value: '33', name: 'Illizi' },
    { value: '34', name: 'Bordj Bou Arreridj' },
    { value: '35', name: 'Boumerdès' },
    { value: '36', name: 'El Tarf' },
    { value: '37', name: 'Tindouf' },
    { value: '38', name: 'Tissemsilt' },
    { value: '39', name: 'El Oued' },
    { value: '40', name: 'Khenchela' },
    { value: '41', name: 'Souk Ahras' },
    { value: '42', name: 'Tipaza' },
    { value: '43', name: 'Mila' },
    { value: '44', name: 'Aïn Defla' },
    { value: '45', name: 'Naâma' },
    { value: '46', name: 'Aïn Témouchent' },
    { value: '47', name: 'Ghardaïa' },
    { value: '48', name: 'Relizane' },
    { value: '49', name: 'El M\'ghair' },
    { value: '50', name: 'El Menia' },
    { value: '51', name: 'Ouled Djellal' },
    { value: '52', name: 'Bordj Baji Mokhtar' },
    { value: '53', name: 'Béni Abbès' },
    { value: '54', name: 'Timimoun' },
    { value: '55', name: 'Touggourt' },
    { value: '56', name: 'Djanet' },
    { value: '57', name: 'In Salah' },
    { value: '58', name: 'In Guezzam' }
  ];
  const handleWilaya=(event)=>{
    const selectedValue=event.target.value;
    setWilaya(selectedValue);
    console.log(wilaya);
  }

  const handleSpecialiteChange = (e) => {
    setSpecialite(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    //si un champ n'est pas remplis il affiche un message d'erreur
    if(wilaya==='' || specialite===''){
      console.log(wilaya,specialite,description);

      setErrorMessage('Veuillez remplir tous les champs.');
    }
    else {
      setErrorMessage('');
    }

    // Redirection vers la page affichant les profils des avocats en fonction des critères
    //affiche la ville , la specialité , et la description dans un console.log
    window.location.href = `/Profiles?wilaya=${wilaya}&specialite=${specialite}&description=${description}`;
  };

  return (
    <div className='form-container'>
      <h1>Formulaire de recherche d'avocat</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="ville">Ville :</label>
          <select className='select-form' onChange={handleWilaya}>
      {options.map((option) => (
        <option key={option.value} value={option.name} >{option.value} : {option.name}</option>
      ))}
      </select>
        </div>
        <div>
          <label htmlFor="specialite">Spécialité :</label>
          <select className='select-form' id="specialty" value={specialite} onChange={handleSpecialiteChange}>
          <option value="">Sélectionner une spécialité</option>
          <option value="droit de famille">Droit de famille</option>
          <option value="droit pénal">Droit pénal</option>
          <option value="droit des affaires">Droit des affaires</option>
          <option value="droit de la propriété intellectuelle">Droit de la propriété intellectuelle</option>
          <option value="droit immobilier">Droit immobilier</option>
          {/* Ajoutez d'autres options selon les spécialités disponibles */}
        </select>
        </div>
        <div>
          <label htmlFor="description">Description :</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default TrouverAvocat;
