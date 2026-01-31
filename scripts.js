
// Translation dictionary 
const translations = {
    en: {
        aboutDescription: "Anisferdi (AnaIsabel Fernández) is an illustrator in training.\
         With a previous formation inhealthcare, her interest in telling stories through art has taken her to LaCoruña,\
          to deepen into this profession.",
        welcome: "Welcome",
        navAbout: "About me",
        navInk: "Ink",
        navEditorial: "Editorial",
        navMusic: "Music",
        mareNostrum: "Book cover illustration for a personal project. Mix media",
        editorialNocheTitle: "It's nighttime",
        editorialNocheText: "Illustrations for a personal picture book project. Mixed media.",
        editorialBoloniaText: "Collection of five illustrations.",
        musicDesc: "Spotify song cover arts. Digital technique",
        musicGata: "Cover Art Proposal",
        inkDesc: "Indian ink technique for INKTOBER Domestika. ",
        inkNoche: "Night",
        inkEspacio: "Space",
        inkExtinto: "Extint",
        inkCuervo: "Raven",
        buttonComics: "Comics",
        buttonOthers: "Others"
    },
    es: {
        aboutDescription: "Anisferdi (Ana Isabel Fernández) es una ilustradora con formación previa en el ámbito de la salud.\
         Su interés por contar historias a través del arte la llevó a La Coruña a profundizar en esta profesión.",
        welcome: "Bienvenido",
        navAbout: "Sobre mí",
        navInk: "Tinta",
        navEditorial: "Editorial",
        navMusic: "Música",
        mareNostrum: "Ilustración para portada de proyecto personal. Técnica mixta.",
        editorialNocheTitle: "Es de noche",
        editorialNocheText: "Ilustraciones para proyecto personal de álbum ilustrado. Técnica mixta.",
        editorialBoloniaText: "Colección de cinco ilustraciones.",
        musicDesc: "Portadas para canciones de Spotify. Técnica digital.",
        musicGata: "Propuesta de portada.",
        inkDesc: "Ilustraciones en tinta china para concurso INKTOBER Domestika. ",
        inkNoche: "Noche",
        inkEspacio: "Espacio",
        inkExtinto: "Extinto",
        inkCuervo: "Cuervo",
        buttonComics: "Comics",
        buttonOthers: "Otros"
    },
    fr: {
        aboutDescription: "Anisferdi (Ana Isabel Fernández) est une illustratrice avec une formation dans le domaine de la santé.\
         Son intérêt pour la narration d'histoires à travers l'art l'a conduite à La Corogne (Espagne) afin d'approfondir cette profession.",
        welcome: "Bienvenido",
        navAbout: "À propos",
        navInk: "Illustration à l'encre",
        navEditorial: "Illustration éditoriale",
        navMusic: "Illustration musicale",
        mareNostrum: "Illustration pour la couverture d'un projet personnel. Technique mixte",
        editorialNocheTitle: "C'est la nuit",
        editorialNocheText: "Illustrations pour un projet de livre d'images personnelles. Technique mixte.",
        editorialBoloniaText: "Collection de cinq illustrations.",
        musicDesc: "Création de couvertures d'albums de chansons Spotify. Technique numérique ",
        musicGata: "Proposition de couverture d'album de chansons",
        inkDesc: "Illustrations à l'encre de Chine pour le concours INKTOBER Domestika ",
        inkNoche: "Nuit",
        inkEspacio: "Espace",
        inkExtinto: "Éteint",
        inkCuervo: "Corbeau",
        buttonComics: "BD",
        buttonOthers: "Autres"
    },
    it: {
        aboutDescription: "Anisferdi (Ana Isabel Fernández) è un'illustratrice con una formazione\
         precedente nel campo della salute. Il suo interesse per la narrazione attraverso l'arte l'ha portata\
          a La Coruña (Spagna) per approfondire in questa professione.",
        welcome: "Bienvenido",
        navAbout: "Su di me",
        navInk: "Illustrazioni ad inchiostro",
        navEditorial: "Illustrazione editoriale",
        navMusic: "Illustrazione musicale",
        mareNostrum: "illustrazione di una copertina per un progetto personale. Tecnica mista.",
        editorialNocheTitle: "È notte",
        editorialNocheText: "Illustrazioni per un progetto personale di un album illustrato. Tecnica mista.",
        editorialBoloniaText: "Collezione di cinque illustrazioni.",
        musicDesc: "Copertine per le canzioni di Spotify. Tecnica digitale.",
        musicGata: "Proposta per la progettazione della copertina di un album musicale",
        inkDesc: "Illustrazioni ad inchiostro cinese per il concorso INKTOBER Domestika ",
        inkNoche: "Notte",
        inkEspacio: "Spazio",
        inkExtinto: "Estinto",
        inkCuervo: "Corvo",
        buttonComics: "Fumetti",
        buttonOthers: "Altri"
    }
};



const comicTags = document.querySelectorAll('.tagComic');
const otherTags = document.querySelectorAll('.tagOther');



function showComics() {
    otherTags.forEach(section => section.classList.add('hidden'));
    comicTags.forEach(section => section.classList.remove('hidden'));
    console.log("Comis");
}

function showOthers() {
    comicTags.forEach(section => section.classList.add('hidden'));
    otherTags.forEach(section => section.classList.remove('hidden'));
    console.log("Otros");
}


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


