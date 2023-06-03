
app.get('/Profiles', (req, res) => {
  const { wilaya, specialite, description } = req.query;
  console.log(wilaya,specialite);
 const sql="SELECT * FROM avocat where wilaya=? and spécialité=?"
 const values = [
  wilaya,
  specialite
];
db.query(sql,values,(err,result)=>{
  if (err) {
    console.log("err app.get");
    console.log(err);
    return res.status(500).json({ error: 'Erreur lors de la récupération des Profile davocats' });
  }

  if (result.length === 0) {
    console.log("result=0")
    return res.status(404).json({ error: 'Avocat non trouvé' });
  }
  const avocats = result;
  res.json(avocats);

}
)

});
