debug:
	#watching for changes, recompile .less files & restart server
	supervisor -w dev -e 'js|coffee|less|html|png|jpg|json' -x node utils/debug.js



MSG = magic stuff happened

deploy:

	#compile .less files
	node utils/less.js

	#copy files into prod/
	rm -rf prod/*
	cp -R dev/* prod
	#remove unneccessary files
	rm -rf prod/public/less prod/node_modules

	#optimize js
	dev/node_modules/requirejs/bin/r.js -o utils/build.js


	# push to github
	git add .
	git commit -am '$(MSG)'
	git push origin master

	# push to heroku
	cd prod
	git add .
	git commit -am '$(MSG)'
	git push heroku master