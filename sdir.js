
(function(){

    var colors = require('colors');
    var home_path=getUserHome(),
        myArgs = process.argv.slice(2)[0],
        filter1 = new RegExp(myArgs);
    var findit  = require('findit'),
        path    = require('path'),
        finder  = findit(path.resolve(home_path));


        function getUserHome() {
        return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
    }


    function findDirectories(){
        finder.on('directory', function (dir) {

            var directories = dir.split('\\');
            var last= directories[directories.length-1].toLowerCase();

            if(filter1.test(last)){
                console.log(dir.green);
            }
        });
    }

    findDirectories()

})();



