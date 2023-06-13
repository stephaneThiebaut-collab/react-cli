const fs = require('fs');
const prettier = require('prettier');

exports.createdComponent = (name) => {
    const code = `import './${name}.css'; function ${name}() { return ( <div> Component ${name} Work! </div> ) } export default ${name}`;
    const formattedCode = prettier.format(code, { parser: 'babel' });

    if (!fs.existsSync(`src/component/${name}`)) {
        fs.mkdirSync(`src/component/${name}`);
    }
    
    console.log(`\x1b[32m folder ${name} created \x1b[0m`); //text vert

    fs.appendFile(`src/component/${name}/${name}.js`, formattedCode, function (err) {
        if (err) throw err;
        console.log(`\x1b[32m Component ${name}.js created \x1b[0m`); //text vert
    });
    fs.appendFile(`src/component/${name}/${name}.css`, "", function (err) {
        if (err) throw err;
        console.log(`\x1b[32m Component ${name}.css created \x1b[0m`); //text vert
    })
}

exports.createEvent = (name) => {
    const code = `function handleClick() {
        alert("Hello World");
    }
    
    export default handleClick`;
    const formattedCode = prettier.format(code, { parser: 'babel' });

    if (!fs.existsSync(`src/event/${name}`)) {
        fs.mkdirSync(`src/event/${name}`);
    }

    console.log(`\x1b[32m folder ${name} created \x1b[0m`); //text vert

    fs.appendFile(`src/event/${name}/${name}.js`, formattedCode, function (err) {
        if (err) throw err;
        console.log(`\x1b[32m Component event ${name}.js created \x1b[0m`); //text vert
    });
}
