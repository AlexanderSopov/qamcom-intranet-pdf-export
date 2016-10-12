# qamcom-intranet-pdf-export.
## installation:
1. install java jdk and latest NodeJS (sorry for inconsistent languages, just google that shit and install it)
2. cd into repository root
3. run command: npm install


## import project:
1. export a page from qamcom intranet
2. ask Morten (or whoever's in charge at the time) to email you the pdf-XXXXXXX folder and "pdf-XXXXXXX.export" that are the latest in temp folder (read more here: https://help.k15t.com/scroll-pdf-exporter/advanced-template-development-75367859.html)
3. copy that folder and .export file into workingDir and rename them into export and export.export
4. in "watcher.js", rename the filename variable to match the name of the file "CLEANED_XXXXXX.xhtml" that resides inside workingDir/export/


## work on project
1. cd into repository root
2. run command: npm run run
3. in workingDir/export, edit the CLEANED_XXXXXX.xhtml file. The last "style" tag with "media='print'" is the css you'll want to change
4. every time you save the file, watcher.js will run and convert the .xhtml into workingDir/test.pdf. If you have the pdf opened in  chrome, you'll just need to update the page to see your changes. (OBSERVE! Some pdf-readers, like MS Edge will "occupy" the file, meaning you won't be able to make changes to it while it's opened, so I suggest you open it in chrome or try out different readers. Remember that the point is to automate development)


## export
1. inside the CLEANED_XXXXXX.xhtml file. The last "style" tag with "media='print'" is the css you'll want to copy into the pdf template in confluence.
