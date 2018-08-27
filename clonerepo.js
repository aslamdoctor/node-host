const fs = require('fs');
const fse = require('fs-extra');
const mv = require('mv');
const nodegit = require("nodegit");
Clone = nodegit.Clone;


var path = process.argv[2];
var repo = "https://github.com/aslamdoctor/boilerplate";
//var repo = "https://github.com/aslamdoctor/bootstrap4-boilerplate-html";

if(path !== undefined){
	path = "../" + path + "/"

	var dir = "cloned";
	var repo_path = path + dir;
	var files_to_delete = [
		".git",
		"delete_this",
		"docs",
		"html"
	];

	// Create directory for cloning repo
	if (!fs.existsSync(repo_path)){
		fs.mkdir(repo_path, function(){
			console.log(repo_path + ': Folder created!');
			clone_repo();	
		});
	}
	else{
		console.log(path + dir + ': Folder already exists!');
	}
}
else{
	console.log('Please provide project folder name');
}


// Clone Repo
function clone_repo(){
	Clone.clone(repo, repo_path).then(function(repository) {
		// Use repository
		console.log('Boilerplate cloned successfully!');

		// Delete unwanted files
		files_to_delete.forEach(the_file => {
			fs.stat(repo_path + "/" + the_file, function(err, stat) {
				if(err == null) {
					fse.remove(repo_path + "/" + the_file, err => {
						if (err) return console.error(err)
					
						console.log('Deleted: ' + repo_path + "/" + the_file);
					});
				}
				else{
					console.log(repo_path + "/" + the_file + ': file/folder not exists!')
				}
			});
		});

		//move_repo();
	});
	  
}


// Move cloned directory content to main directory
function move_repo(){
	mv(repo_path, path, {mkdirp: true}, function(err) {
		if (err) return console.error(err);

		console.log('Moved files successfully !');
  	});
	  
}