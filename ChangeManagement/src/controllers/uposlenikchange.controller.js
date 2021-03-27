import UposlenikChange from '../models/uposlenikchange.model'

//create
exports.uposlenikchange_create = function (req, res) {
    let uposlenikchange = new UposlenikChange(
        req.body
    );

    uposlenikchange.save(function (err) {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200);
			res.send('Uposlenikchange Created successfully')
        }
        
    })
};
//read
exports.uposlenikchange_details = function (req, res) {
    UposlenikChange.findById(req.params.id, function (err, uposlenikchange) {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200);
			res.send(uposlenikchange);
        }
        
    })
};
//read all
exports.uposlenikchange_all = function (req, res) {
    UposlenikChange.find( function (err, result) {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200);
			res.send(result);
        }
        
    })
};
//update
exports.uposlenikchange_update = function (req, res) {
    UposlenikChange.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, uposlenikchange) {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200);
			res.send('Uposlenikchange udpated.');
        }
        
    });
};
//delete
exports.uposlenikchange_delete = function (req, res) {
    UposlenikChange.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(400).send(err)
        } else {
            res.status(200);
			res.send('Deleted successfully!');
        }
        
    })
};