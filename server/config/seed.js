/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Article = require('../api/article/article.model');


Article.find({}).remove(function() {
  Article.create({
    stub: 'stub 1',
    image: 'http://dummyimage.com/1280x480/666666/ffffff.png&text=test 1',
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
    content: '**test content 1**',
    site: 1,
    type: 1,
    category: [1]
  },{
    stub: 'stub 2',
    image: 'http://dummyimage.com/1280x480/ff0000/ffffff.png&text=test 1',
    title: 'Lorem Ipsum is simply dummy tex',
    content: '**test content 2**',
    site: 1,
    type: 1,
    category: [1]
  },{
    stub: 'stub 3',
    image: 'http://dummyimage.com/1280x480/00ff00/ffffff.png&text=test 1',
    title: 'Lorem Ipsum is simply dummy te',
    content: '**test content 3**',
    site: 1,
    type: 2,
    category: [1]
  },{
    stub: 'stub 4',
    image: 'http://dummyimage.com/1280x480/0000ff/ffffff.png&text=test 1',
    title: 'dsfds f8ur 283ru we8fjd fhksf89 2y2893y 3298 djskfh',
    content: '**test content 2**',
    site: 2,
    type: 2,
    category: [1]
  }, function() {
      console.log('finished populating Articles');
    }
  );
});



// Thing.find({}).remove(function() {
//   Thing.create({
//     name : 'Development Tools',
//     info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
//   }, {
//     name : 'Server and Client integration',
//     info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
//   }, {
//     name : 'Smart Build System',
//     info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
//   },  {
//     name : 'Modular Structure',
//     info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
//   },  {
//     name : 'Optimized Build',
//     info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
//   },{
//     name : 'Deployment Ready',
//     info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
//   });
// });

// User.find({}).remove(function() {
//   User.create({
//     provider: 'local',
//     name: 'Test User',
//     email: 'test@test.com',
//     password: 'test'
//   }, {
//     provider: 'local',
//     role: 'admin',
//     name: 'Admin',
//     email: 'admin@admin.com',
//     password: 'admin'
//   }, function() {
//       console.log('finished populating users');
//     }
//   );
// });