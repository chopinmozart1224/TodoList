// var ​action = require(​ '../src/actions/index.js'​ );

module.exports = {
	src_folders: ['tests'],
  	page_objects_path: 'tests/Nightwatch.js',

	'Adding test': function(browser) {
 	 browser
     	.setValue('#new-todo', 'My new task')
     	.submitForm('#todo-form')
     	.assert.containsText('#todo-list ul:first-child label', 'My new task')
     	.end();
	},

	'Editing test': function(browser) {
  	 browser
  	 	.setValue('#new-todo', 'My new task')
     	.submitForm('#todo-form')
     	.keys(['My other new task', '\uE006'])
     	.assert.containsText('#todo-list ul:first-child', 'My other new task')
     	.end();
	},

	'Removing test': function(browser) {
   	  browser
      	.setValue('#new-todo', 'My new task')
      	.submitForm('#todo-form')
      	.setValue('#new-todo', 'My other new task')
      	.submitForm('#todo-form')
      	.execute(function() {
        document.getElementById('todo-list').children[0].children[0].children[2].click();
      	})
      	.assert.containsText('#todo-count', '1 item left')
      	.assert.containsText('#todo-list ul:first-child', 'My other new task')
      	.end();
  	},
}
