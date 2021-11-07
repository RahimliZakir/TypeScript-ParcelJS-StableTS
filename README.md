# TypeScript-ParcelJS-StableTS

-- Documentation of ParcelJS

   1. First of all we need a "package.json" file, for creating this file we must open terminal and type "npm init -y"
   2. Then we must type "npm i --save-dev parcel-bundler" to install parcel-bundler to our project
   3. Then we must include parcel scripts to "package.json", for including these scripts we must open "package.json" file and locate to object named "scripts" and type 
      "dev": "parcel index.html",
      "build": "parcel build index.html"
   4. We must create all our files except index.html in "src" folder.
   5. We must create main.js file then import all our "js, css, scss, less and etc." files here.
   6. If we want build our project we must type "npm run build" or if we want to build & start our project we must type "npm run dev".
