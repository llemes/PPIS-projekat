import UposlenikKomitet from '../models/uposlenikkomitet.model'

//create
exports.uposlenikkomitet_create = function (req, res) {
    let uposlenikkomitet = new UposlenikKomitet(
        req.body
    );

    uposlenikkomitet.save(function (err) {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200);
			res.send('Uposlenikkomitet Created successfully')
        }
        
    })
};
//read
exports.uposlenikkomitet_details = function (req, res) {
    UposlenikKomitet.findById(req.params.id, function (err, uposlenikkomitet) {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200);
			res.send(uposlenikkomitet);
        }
        
    })
};
//read all
exports.uposlenikkomitet_all = function (req, res) {
    UposlenikKomitet.find( function (err, result) {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200);
			res.send(result);
        }
        
    })
};
//update
exports.uposlenikkomitet_update = function (req, res) {
    UposlenikKomitet.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, uposlenikkomitet) {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200);
			res.send('Uposlenikkomitet udpated.');
        }
        
    });
};
//delete
exports.uposlenikkomitet_delete = function (req, res) {
    UposlenikKomitet.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200);
			res.send('Deleted successfully!');
        }
        
    })
};

