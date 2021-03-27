var db = require('../db'); 
const express = require("express");
const router = express.Router();
const mysql = require('mysql');

router.get("/promjeneUser/:id", (req, res, next) => {
  let id = req.params.id;
  var sql = 'SELECT * FROM Promjenas where prijavio = ' + mysql.escape(id);
  db.query(sql, function(err, rez) {
	  if (err) console.log(err);
	  else res.status(200).send(rez);
  });

});

router.get("/promjeneDev/:id", (req, res, next) => {
  let id = req.params.id;
  var sql = 'SELECT * FROM Promjenas where izvrsitelj = ' + mysql.escape(id);
  db.query(sql, function(err, rez) {
	  if (err) console.log(err);
	  else res.status(200).send(rez);
  });

});
router.get("/promjeneKomitet/:id", (req, res, next) => {
  let id = req.params.id;
  var sql = 'SELECT * FROM Promjenas where odobrio = ' + mysql.escape(id);
  db.query(sql, function(err, rez) {
	  if (err) console.log(err);
	  else res.status(200).send(rez);
  });

});

router.get("/promjeneZadnja/:id", (req, res, next) => {
  let id = req.params.id;
  var sql = 'SELECT * FROM HistorijaPromjenas where datumOd = (SELECT max(h.datumOd) FROM HistorijaPromjenas h where h.promjenaId =' + mysql.escape(id) + ') and promjenaId =' + mysql.escape(id);
 
  db.query(sql, function(err, rez) {
	  if (err) console.log(err);
	  else res.status(200).send(rez);
  });

});
router.get("/promjenePrva/:id", (req, res, next) => {
  let id = req.params.id;
  var sql = 'SELECT * FROM HistorijaPromjenas where datumOd = (SELECT min(h.datumOd) FROM HistorijaPromjenas h where h.promjenaId =' + mysql.escape(id) + ') and promjenaId =' + mysql.escape(id);
 
  db.query(sql, function(err, rez) {
	  if (err) console.log(err);
	  else res.status(200).send(rez);
  });

});


router.get("/dogadjajZadnji/:id", (req, res, next) => {
  let id = req.params.id;
  var sql = 'SELECT * FROM HistorijaDogadjajs where datumOd = (SELECT max(h.datumOd) FROM HistorijaDogadjajs h where h.dogadjajId =' + mysql.escape(id) + ') and dogadjajId =' + mysql.escape(id);
 
  db.query(sql, function(err, rez) {
	  if (err) console.log(err);
	  else res.status(200).send(rez);
  });

});
router.get("/dogadjajPrvi/:id", (req, res, next) => {
  let id = req.params.id;
  var sql = 'SELECT * FROM HistorijaDogadjajs where datumOd = (SELECT min(h.datumOd) FROM HistorijaDogadjajs h where h.dogadjajId =' + mysql.escape(id) + ') and dogadjajId =' + mysql.escape(id);
 
  db.query(sql, function(err, rez) {
	  if (err) console.log(err);
	  else res.status(200).send(rez);
  });

});

router.get("/dogadjajUser/:id", (req, res, next) => {
  let id = req.params.id;
  var sql = 'SELECT * FROM Dogadjajs where inicijator = ' + mysql.escape(id);
  db.query(sql, function(err, rez) {
	  if (err) console.log(err);
	  else res.status(200).send(rez);
  });

});
router.get("/dogadjajPrioritet", (req, res, next) => {
  let id = req.params.id;
  var sql = 'SELECT * from PrioritetDogadjajas p right join Dogadjajs d   on d.prioritetId = p.id;'
  db.query(sql, function(err, rez) {
	  if (err) console.log(err);
	  else res.status(200).send(rez);
  });

});
router.get("/brojKorisnika", (req, res, next) => {
  let id = req.params.id;
  var sql = 'select count(*) brojKorisnika from Korisniks'
  db.query(sql, function(err, rez) {
	  if (err) console.log(err);
	  else res.status(200).send(rez);
  });

});


router.get("/promjenecr", (req, res, next) => {
  var sql = `SELECT * FROM Promjenas where opis like '%cekanje%' or opis like '%rjesavanje%'`;
  db.query(sql, function(err, rez) {
	  if (err) console.log(err);
	  else res.status(200).send(rez);
  });

});


router.get("/promjenekategorija", (req, res, next) => {
  var sql = `SELECT k.id, k.nazivKategorije, count(p.kategorijaPromjeneId) broj FROM KategorijaPromjenes k, Promjenas p where k.id=p.kategorijaPromjeneId group by k.nazivKategorije`;
  db.query(sql, function(err, rez) {
	  if (err) console.log(err);
	  else res.status(200).send(rez);
  });

});


router.get("/tipovidogadjaja", (req, res, next) => {
  var sql = `SELECT t.id, t.tipDogadjaja, count(d.tipId) broj FROM Dogadjajs d, TipDogadjajas t where t.id=d.tipId group by t.id`;
  db.query(sql, function(err, rez) {
	  if (err) console.log(err);
	  else res.status(200).send(rez);
  });

});

router.get("/korisnici", (req, res, next) => {

  var sql = `SELECT k.id, k.firstName, k.lastName, k.username, u.naziv FROM Korisniks k, Ulogas u where u.id=k.ulogaId`;
  db.query(sql, function(err, rez) {
	  if (err) console.log(err);
	  else res.status(200).send(rez);
  });

});

router.get("/status/:status", (req, res, next) => {
  let status = req.params.status;
  status.replace('_', ' ')
  var sql = `SELECT * FROM Promjenas where opis like '%${status}%'`;
  db.query(sql, function(err, rez) {
	  if (err) console.log(err);
	  else res.status(200).send({'wohoo':result.toString()});
  });

});

module.exports = router;