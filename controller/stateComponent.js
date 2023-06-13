const fs = require('fs');
const prettier = require('prettier');

exports.createStateComponent = (name) => {
    const code = `import { useState } from "react";
    import  "../style/${name}.css";
    function ${name}() {
        const price = 8;
        const [cart, updateCart] = useState(0);
        const [isOpen, setIsOpen] = useState(false);
    
        return isOpen ? (
            <div className='lmj-cart'>
                <button onClick={() => setIsOpen(false)}>Close</button>
                <h2>Basket</h2>
                <div>
                    Monstera : {price}€
                    <button onClick={() => updateCart(cart + 1)}>
                        Add
                    </button>
                </div>
                <h3>Total : {price * cart}€</h3>
            </div>
        ) : (
            <button onClick={() => setIsOpen(true)}>Open the basket</button>
        )
    }
    
    export default ${name}`;
    const formattedCode = prettier.format(code, { parser: 'babel' });

    if (!fs.existsSync(`src/state/${name}`)) {
        fs.mkdirSync(`src/state/${name}`);
    }
    
    console.log(`\x1b[32m folder ${name} created \x1b[0m`); //text vert

    fs.appendFile(`src/state/${name}/${name}.js`, formattedCode, function (err) {
        if (err) throw err;
        console.log(`\x1b[32m state ${name}.js created \x1b[0m`); //text vert
    });
    fs.appendFile(`src/state/${name}/${name}.css`, "", function (err) {
        if (err) throw err;
        console.log(`\x1b[32m state ${name}.css created \x1b[0m`); //text vert
    })
}
