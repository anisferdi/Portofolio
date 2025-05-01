
// Translation dictionary 
const translations = {
    en: {
        aboutDescription: "Ana Isabel Fernández (Anisferdi) is currently an illustration student. \
        Since 2021, she has been creating song covers, but her main interest is editorial illustration, \
        which she is currently focusing on.",
        welcome: "Welcome",
        navAbout: "Contact",
        navInk: "Ink",
        navEditorial: "Editorial",
        navMusic: "Music",
        mareNostrum: "Book cover illustration for a personal project. Mix media",
        editorialNocheTitle: "It's nighttime",
        editorialNocheText: "Illustrations for a personal picture book project. Mixed media.",
        musicDesc: "Spotify song cover arts. Digital technique",
        musicGata: "Cover Art Proposal",
        inkDesc: "Indian ink technique for INKTOBER Domestika. ",
        inkNoche: "Night",
        inkEspacio: "Space",
        inkExtinto: "Extint",
        inkCuervo: "Raven"
    },
    es: {
        aboutDescription: "Ana Isabel Fernández (Anisferdi) es actualmente estudiante de ilustración. \
        Desde 2021 ha realizado portadas de canciones, pero su mayor interés es la ilustración editorial,\
         en la que está actualmente centrando sus proyectos.",
        welcome: "Bienvenido",
        navAbout: "Contacto",
        navInk: "Tinta",
        navEditorial: "Editorial",
        navMusic: "Música",
        mareNostrum: "Ilustración para portada de proyecto personal. Técnica mixta.",
        editorialNocheTitle: "Es de noche",
        editorialNocheText: "Ilustraciones para proyecto personal de álbum ilustrado. Técnica mixta.",
        musicDesc: "Portadas para canciones de Spotify. Técnica digital.",
        musicGata: "Propuesta de portada.",
        inkDesc: "Ilustraciones en tinta china para concurso INKTOBER Domestika. ",
        inkNoche: "Noche",
        inkEspacio: "Espacio",
        inkExtinto: "Extinto",
        inkCuervo: "Cuervo"
    },
    fr: {
        aboutDescription: "Ana Isabel Fernández (Anisferdi) est actuellement étudiante en illustration.\
         Depuis 2021, elle crée des couvertures d'ablums de musique, mais son intérêt principal est l'illustration éditoriale,\
          qui est actuellement au centre de ses projets",
        welcome: "Bienvenido",
        navAbout: "Contact",
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