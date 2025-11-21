
// Translation dictionary 
const translations = {
    en: {
        aboutDescription: "Ana Isabel Fernández (Anisferdi) is an illustration student in A Coruña, Spain.\
        Although she previously studied and worked in another field, her interest in storytelling through art\
        led her to pursue this profession.",
        welcome: "Welcome",
        navAbout: "About me",
        navInk: "Ink",
        navEditorial: "Editorial",
        navMusic: "Music",
        mareNostrum: "Book cover illustration for a personal project. Mix media",
        editorialNocheTitle: "It's nighttime",
        editorialNocheText: "Illustrations for a personal picture book project. Mixed media.",
        editorialBoloniaText: "Collection of five illustrations about massive forest fires.",
        musicDesc: "Spotify song cover arts. Digital technique",
        musicGata: "Cover Art Proposal",
        inkDesc: "Indian ink technique for INKTOBER Domestika. ",
        inkNoche: "Night",
        inkEspacio: "Space",
        inkExtinto: "Extint",
        inkCuervo: "Raven"
    },
    es: {
        aboutDescription: "Ana Isabel Fernández (Anisferdi) es estudiante de ilustración en A Coruña (España).\
         Aunque anteriormente estudió y trabajó en otro ámbito, su interés por contar historias a través del arte\
          la llevó a querer profundizar en esta profesión.",
        welcome: "Bienvenido",
        navAbout: "Sobre mí",
        navInk: "Tinta",
        navEditorial: "Editorial",
        navMusic: "Música",
        mareNostrum: "Ilustración para portada de proyecto personal. Técnica mixta.",
        editorialNocheTitle: "Es de noche",
        editorialNocheText: "Ilustraciones para proyecto personal de álbum ilustrado. Técnica mixta.",
        editorialBoloniaText: "Una colección de cinco ilustraciones sobre los incendios forestales masivos.",
        musicDesc: "Portadas para canciones de Spotify. Técnica digital.",
        musicGata: "Propuesta de portada.",
        inkDesc: "Ilustraciones en tinta china para concurso INKTOBER Domestika. ",
        inkNoche: "Noche",
        inkEspacio: "Espacio",
        inkExtinto: "Extinto",
        inkCuervo: "Cuervo"
    },
    fr: {
        aboutDescription: "Ana Isabel Fernández (Anisferdi) est étudiante en illustration à La Corogne (Espagne).\
         Bien qu'elle ait auparavant étudié et travaillé dans un autre domaine,\
          son intérêt pour la narration d'histoires à travers l'art l'a amenée à vouloir approfondir cette profession.",
        welcome: "Bienvenido",
        navAbout: "À propos",
        navInk: "Illustration à l'encre",
        navEditorial: "Illustration éditoriale",
        navMusic: "Illustration musicale",
        mareNostrum: "Illustration pour la couverture d'un projet personnel. Technique mixte",
        editorialNocheTitle: "C'est la nuit",
        editorialNocheText: "Illustrations pour un projet de livre d'images personnelles. Technique mixte.",
        musicDesc: "Création de couvertures d'albums de chansons Spotify. Technique numérique ",
        musicGata: "Proposition de couverture d'album de chansons",
        inkDesc: "Illustrations à l'encre de Chine pour le concours INKTOBER Domestika ",
        inkNoche: "Nuit",
        inkEspacio: "Espace",
        inkExtinto: "Éteint",
        inkCuervo: "Corbeau"
    },
    it: {
        aboutDescription: "Ana Isabel Fernández (Anisferdi) è attualmente una studentessa di illustrazione. \
         Dal 2021 illustra coperetine di canzoni, ma il suo interesse principale è l'illustrazione editoriale,\
          dove attualmente concentra i suoi progetti.",
        welcome: "Bienvenido",
        navAbout: "Su di me",
        navInk: "Illustrazioni ad inchiostro",
        navEditorial: "Illustrazione editoriale",
        navMusic: "Illustrazione musicale",
        mareNostrum: "illustrazione di una copertina per un progetto personale. Tecnica mista.",
        editorialNocheTitle: "È notte",
        editorialNocheText: "Illustrazioni per un progetto personale di un album illustrato. Tecnica mista.",
        musicDesc: "Copertine per le canzioni di Spotify. Tecnica digitale.",
        musicGata: "Proposta per la progettazione della copertina di un album musicale",
        inkDesc: "Illustrazioni ad inchiostro cinese per il concorso INKTOBER Domestika ",
        inkNoche: "Notte",
        inkEspacio: "Spazio",
        inkExtinto: "Estinto",
        inkCuervo: "Corvo"
    }
};


function switchLanguage(lang) {
    localStorage.setItem('preferredLang', lang);
    document.documentElement.lang = lang;

    Object.entries(translations[lang]).forEach(([key, value]) => {
        document.querySelectorAll(`[data-i18n="${key}"]`).forEach(el => {
            el.textContent = value;
        });
    });
}

function getCurrentLang() {

    try {
        const storedLang = typeof localStorage !== 'undefined'
            ? localStorage.getItem('preferredLang')
            : null;

        return storedLang !== null && storedLang !== undefined
            ? storedLang
            : 'es';
    } catch (e) {
        return 'es';
    }
}

const currentLang = getCurrentLang();
console.log(currentLang);
switchLanguage(currentLang);








document.addEventListener('DOMContentLoaded', function () {
    const languageSwitchers = document.querySelectorAll('.languageSwitcher');

    languageSwitchers.forEach(switcher => {
        const button = switcher.querySelector('.languageButton');
        const dropdown = switcher.querySelector('.languageDropdown');
        const options = switcher.querySelectorAll('.languageOption');

        const currentOption = switcher.querySelector(`.languageOption[data-lang="${currentLang}"]`);
        if (currentOption) {
            button.textContent = currentOption.textContent;
        }

        button.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('show');
        });

        document.addEventListener('click', () => {
            dropdown.classList.remove('show');
        });

        options.forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = option.dataset.lang;
                button.textContent = option.textContent;
                dropdown.classList.remove('show');

                switchLanguage(lang);
            });
        });
    });
});








const fileStorage = {
    'PortfolioES.pdf': 'Files/PortfolioES.pdf',
    'PortfolioEN.pdf': 'Files/PORTFOLIO_EN.pdf',
    'PortfolioFR.pdf': 'Files/PORTFOLIO_FR.pdf',
    'PortfolioIT.pdf': 'Files/PORTFOLIO_IT.pdf'
};


function downloadFile(filename, displayName = filename) {
    const filePath = fileStorage[filename];
    if (!filePath) {
        console.error('File not found in storage:', filename);
        return;
    }

    const link = document.createElement('a');
    link.href = filePath;
    link.download = displayName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


document.querySelectorAll('.download-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filename = button.dataset.filename;
        const displayName = button.dataset.displayname;
        downloadFile(filename, displayName);
    });
});