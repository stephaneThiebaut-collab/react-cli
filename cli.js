#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();
const figlet = require('figlet');
const fs = require('fs');
const { exec } = require('child_process');
const configTailind = require('./controller/forTailwindcss');

const controllerComponent = require('./controller/functionComponent');

const sayCli = figlet.textSync("React-cli", {
        font: "Standard",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
    });

program.version('1.0.0')
    .description(sayCli)

program
    .command('component <name>')
    .description('Generate a component <name> with a JavaScript and CSS file in a folder.')
    .action((name) => {
        try {
            if (!fs.existsSync("src")) {
                fs.mkdirSync(`src`);
            }
            if (!fs.existsSync(`src/component`)) {
                fs.mkdirSync(`src/component`);
                fs.mkdirSync(`src/component/${name}`);
                console.log(`\x1b[32m folder component created and folder ${name} created \x1b[0m`); //text vert
                controllerComponent.createdComponent(name);
            } else {
                controllerComponent.createdComponent(name);
            }
        } catch (error) {
            console.log('\x1b[31m A component with this name already exists. \x1b[0m'); //text rouge
        }
    });

program
    .command('event <name>')
    .description('Generate a event component <name>.')
    .action((name) => {
        try {
            if (!fs.existsSync("src")) {
                fs.mkdirSync(`src`);
            }
            if (!fs.existsSync(`src/event`)) {
                fs.mkdirSync(`src/event`);
                fs.mkdirSync(`src/event/${name}`);
                console.log(`\x1b[32m The event component ${name} created \x1b[0m`); //text vert
                controllerComponent.createEvent(name);
            } else if(fs.existsSync(`src/event`)){
                controllerComponent.createEvent(name);
            }
        } catch (error) {
            console.log('\x1b[31m A component with this name already exists. \x1b[0m'); //text rouge
        }
    });

program
    .command('use Tailwind')
    .description('use Tailwind (This command installs and initializes TailwindCSS.)')
    .action(name => {
        exec('npm install -D tailwindcss', (error, stdout, stderr) => {
            if (error) {
                console.error(`Erreur lors de l'exécution de la commande : ${error}`);
                return;
            }
            console.log(`Résultat de la commande : ${stdout}`);
        });
        exec('npx tailwindcss init', (error, stdout, stderr) => {
            if (error) {
                console.error(`Erreur lors de l'exécution de la commande : ${error}`);
                return;
            }
            console.log(`Résultat de la commande : ${stdout}`);
            configTailind.configTailindCss();
            if (!fs.existsSync(`src`)) {
                fs.mkdirSync(`src`);
            } 
            if (!fs.existsSync(`src/App.css`)) {
                const code = `@tailwind base;\n@tailwind components;\n@tailwind utilities;\n`;
                fs.appendFile(`src/App.css`, code, function (err) {
                    if (err) throw err;
                    console.log(`\x1b[32m Component ${name}.js created \x1b[0m`); //text vert
                });
            } else {
                configTailind.depedenciesForCss()
            }

        });

    })

program.parse(process.argv);


