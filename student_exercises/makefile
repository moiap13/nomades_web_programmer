test : test_arithmetique test_affichageNombres test_array test_divers test_maths test_strings 

test_arithmetique : 
	jest ./implementations/basics/arithmetic/arithmetique.test.js

test_affichageNombres : 
	jest implementations/basics/affichageNombres/affichageNombres.test.js

test_array : 
	jest implementations/basics/arrays/arrays.test.js

test_divers : 
	jest implementations/basics/divers/divers.test.js

test_maths : 
	jest implementations/basics/maths/maths.test.js

test_strings : 
	jest implementations/basics/strings/strings.test.js

coverage : 
	jest --coverage && jest --coverageProvider=v8

install : 
	npm install -g jest

configure :
	jest --config ./jest.config.js
