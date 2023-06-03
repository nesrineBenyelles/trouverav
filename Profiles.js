import React, { useState } from 'react';
//import './Profiles.css';
import axios from 'axios';
import { useEffect } from 'react';


export default function Profiles() {
  const [avocats,setAvocats] =useState('');
  const urlParams = new URLSearchParams(window.location.search);

  const wilaya = urlParams.get('wilaya');
    const specialite = urlParams.get('specialite');
    const description = urlParams.get('description');

const fetchAvocats = async () => {
  try {
    const response = await axios.get(`http://localhost:8081/Profiles?wilaya=${wilaya}&specialite=${specialite}&description=${description}`); // Remplacez avec votre URL d'API
    setAvocats(response.data);
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la récupération des profils d\'avocats', error);
  }
};

useEffect(() => {
  fetchAvocats();
}, []);

const handleProfileClick = (avocatId) => {
    console.log(avocatId);
    // Redirection vers la page de profil de l'avocat
    window.location.href = `/ProfileAvocat/${avocatId}`;
  };
  return (
    <div className='profile-page'>
      <h2 className='profile-title'>Résultats de recherche</h2>
      {avocats.length === 0 ? (
        <p>Aucun avocat trouvé.</p>
      ) : (
        <ul className='profile-list'>
          {avocats.map((avocat) => (
            <li key={avocat.code_barrau} className='profile-item' onClick={() => handleProfileClick(avocat.code_barrau)} >
              <h3 className='profile-name'>{avocat.nom_av} {avocat.prenom_av}</h3>
              <p className='profile-email'>Email : {avocat.email}</p>
              <p className='profile-specialite'>Spécialité : {avocat.spécialité}</p>
              <p className='profile-ville'>Ville : {avocat.wilaya}</p>
              {/* Ajoutez ici d'autres informations du profil */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
