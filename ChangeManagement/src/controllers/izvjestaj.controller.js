import Izvjestaj from '../models/izvjestaj.model'

//create
exports.izvjestaj_create = function (req, res) {
    let izvjestaj = new Izvjestaj(
        req.body
    );

    izvjestaj.save(function (err) {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200);
			res.send('Izvjestaj Created successfully')
        }
        
    })
};
//read
exports.izvjestaj_details = function (req, res) {
    Izvjestaj.findById(req.params.id, function (err, izvjestaj) {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200);
			res.send(izvjestaj);
        }
        
    })
};
//read all
exports.izvjestaj_all = function (req, res) {
    Izvjestaj.find( function (err, result) {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200);
			res.send(result);
        }
        
    })
};
//update
exports.izvjestaj_update = function (req, res) {
    Izvjestaj.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, izvjestaj) {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200);
			res.send('Izvjestaj udpated.');
        }
        
    });
};
//delete
exports.izvjestaj_delete = function (req, res) {
    Izvjestaj.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200);
			res.send('Deleted successfully!');
        }
        
    })
};

