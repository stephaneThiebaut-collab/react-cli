# react-cli


## Installation

Generally, to install React CLI

```bash
    npm i -g @alkantarade/react-cli
```

## Usage/Examples

### Generate component

```bash 
    react-cli component ComponentName
```

```javascript
import 'ComponentName.css';

function ComponentName() {
    <div>ComponentName Works!</div>
}

export default ComponentName
```
- Generate 

    src/                       
    └── component/             
        ├── CompentName.js     
        └── CompentName.css    
=======
src/                       
└── component/             
   ├── CompentName.js     
   └── CompentName.css    
>>>>>>> 8a50338ea838518a33190b66dad8874f82b9f550

### Generate event 

```bash 
    react-cli event eventName
```

```javascript
function eventName() {
    alert('Cliked!')
}

export default eventName
```

### Generate state 

```bash 
    react-cli state stateName
```

```javascript
const code = `import { useState } from "react";
    import  "../style/stateName.css";
    function stateName() {
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
    
    export default stateName
```
- Generate 

    src/                       
    └── state/             
        ├── stateName.js     
        └── stateName.css    

### Use Tailwind css

```bash 
    react-cli use Tailwind
```

This command will generate a tailwind.config.css file at the root of your project, install Tailwind CSS in your project, and add the CSS dependencies to the src/App.css file.

<<<<<<< HEAD
    - Root Directory           
=======
- Root Directory           
>>>>>>> 8a50338ea838518a33190b66dad8874f82b9f550
    |- tailwind.config.css     
    |- src/                    
        |- App.css             


## Next maj

- use bootstrap
- generate router
- generate page
