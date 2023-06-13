const fs = require('fs');

exports.configTailindCss = () => {
    // Chemin du fichier source et destination
    const fichierSource = 'tailwind.config.js';

    // Lecture du contenu du fichier source
    fs.readFile(fichierSource, 'utf8', (err, data) => {
        if (err) {
            console.error(`Erreur lors de la lecture du fichier source : ${err}`);
            return;
        }

    // Parse le contenu du fichier source en tant qu'objet JavaScript
    const objetSource = eval(`(${data})`);

    // Ajoute un chemin au tableau content
    const cheminAjoute = "./src/**/*.{js,jsx,ts,tsx}";
    objetSource.content.push(cheminAjoute);

    // Convertit l'objet modifié en chaîne de caractères
    const contenuModifie = `module.exports = ${JSON.stringify(objetSource, null, 2)}`;

    // Écriture du contenu modifié dans le fichier source (qui fera office de fichier de destination)
    fs.writeFile(fichierSource, contenuModifie, 'utf8', (err) => {
        if (err) {
        console.error(`Erreur lors de l'écriture du fichier de destination : ${err}`);
        return;
        }
        console.log('Le fichier de destination a été créé avec succès !');
        });
    });
};

exports.depedenciesForCss = () => {
    const fs = require('fs');

    // Chemin du fichier CSS
    const fichierCSS = 'src/App.css';
    // Texte à ajouter au début du fichier
    const texteAjoute = `@tailwind base;\n@tailwind components;\n@tailwind utilities;\n`;
    
    // Lecture du contenu du fichier CSS
    fs.readFile(fichierCSS, 'utf8', (err, data) => {
        if (err) {
            console.error(`Erreur lors de la lecture du fichier CSS : ${err}`);
            return;
        }
    
      // Ajout du texte au début du contenu du fichier
        const contenuModifie = texteAjoute + data;
    
      // Écriture du contenu modifié dans le fichier CSS
        fs.writeFile(fichierCSS, contenuModifie, 'utf8', (err) => {
        if (err) {
            console.error(`Erreur lors de l'écriture du fichier CSS : ${err}`);
            return;
        }
        console.log('Le fichier CSS a été modifié avec succès !');
        });
    });
    
}
