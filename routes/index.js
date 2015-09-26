var express = require('express');
var router = express.Router();

/* GET portfolio pages */
router.get('/', function(req, res, next) {
  res.render('portfolio/home', {
      title: '<fractalStrategies>'
  });
});
router.get('/contact', function (req, res, next) {
    res.render('portfolio/contact', {
        title: 'Contact <fractalStrategies>'
    });
});
router.get('/tech', function (req, res, next) {
    res.render('portfolio/tech', {
        title: 'Technologies @ <fractalStrategies>'
    });
});

/* GET project pages */
router.get('/tasktree', function (req, res, next) {
    res.render('projects/tasktree', {
        title: 'TaskTree <fractalStrategies>'
    });
});
router.get('/reddit', function (req, res, next) {
    res.render('projects/reddit', {
        title: 'subMetrics <fractalStrategies>'
    });
});
router.get('/democracy', function (req, res, next) {
    res.render('projects/democracy', {
        title: 'Direct Democracy <fractalStrategies>'
    });
});
router.get('/orders', function (req, res, next) {
    res.render('projects/orders', {
        title: 'Catering Orders <fractalStrategies>'
    });
});
router.get('/calculator', function (req, res, next) {
    res.render('projects/calculator', {
        title: 'SnazzyCalc <fractalStrategies>'
    });
});

/* GET dataview page */
router.get('/dataview', function (req, res, next) {
    var db = req.db;
    var collection = db.get('project1');
    collection.find({}, {}, function (e, docs) {
        res.render('dataview', {
            title: 'TaskTree <fractalStrategies>',
            tasktree: docs
        });
    });
});

/* GET newtask page */
router.get('/newtask', function (req, res, next) {
    res.render('newtask', {
        title: 'New Task <fractalStrategies>'
    });
});

/* POST to add task service */
router.post('/newtask', function (req, res, next) {
    
    // set internal db variables
    var db = req.db;
    var collection = db.get('project1');
    
    // get form values
    var taskname = req.body.taskname
    var completion = req.body.completion
    
    // submit to the db
    collection.insert({
        'taskname': taskname,
        'completion': completion
    }, function (err, doc) {
        if (err) {
            res.send('There was a problem adding the information to the database.');
        } else {
            res.redirect('dataview');
        }
    });
    
    
    
});

module.exports = router;
