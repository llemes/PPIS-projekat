import Promjena from '../models/promjena.model'

//create
exports.promjena_create = function (req, res) {
    let promjena = new Promjena(
        req.body
    );

    promjena.save(function (err) {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200);
			res.send('Promjena Created successfully')
        }
        
    })
};
//read
exports.promjena_details = function (req, res) {
    Promjena.findById(req.params.id, function (err, promjena) {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200);
			res.send(promjena);
        }
        
    })
};
//read all
exports.promjena_all = function (req, res) {
    Promjena.find( function (err, result) {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200);
			res.send(result);
        }
        
    })
};
//update
exports.promjena_update = function (req, res) {
    Promjena.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, promjena) {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200);
			res.send('Promjena udpated.');
        }
        
    });
};
//delete
exports.promjena_delete = function (req, res) {
    Promjena.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200);
			res.send('Deleted successfully!');
        }
        
    })
};
