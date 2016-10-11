# qamcom-intranet-pdf-export.
## installation:
1. install java jdk and latest NodeJS (sorry for inconsistent languages, just google that shit and install it)
2. cd into repository root
3. run command: npm install


## import project:
1. export a page from qamcom intranet
2. ask Morten (or whoever's in charge at the time) to email you the pdf-XXXXXXX folder and "pdf-XXXXXXX.export" that are the latest in temp folder (read more here: )
3. copy that folder and .export file into workingDir and rename them into export and export.export
4. in "watcher.js", rename the filename variable to match the name of the file "CLEANED_XXXXXX.xhtml" that resides inside workingDir/export/


## work on project
1. cd into repository root
2. run command: npm run run
3. in workingDir/export, edit the CLEANED_XXXXXX.xhtml file. The last "style" tag with "media='print'" is the css you'll want to change
4. every time you save the file, watcher.js will run and if you have the pdf open in ex. chrome, you'll just need to update it to see your changes.


## export
1. inside the CLEANED_XXXXXX.xhtml file. The last "style" tag with "media='print'" is the css you'll want to copy into the pdf template in confluence.
