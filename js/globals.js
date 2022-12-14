// const themeColors = ['#1e3799', '#3880ff', '#ff7426', '#3dc2ff', '#5260ff', '#2dd36f', '#eb445a'];


export const themeColors = [
    {
        // royalblue
        color: '#3880ff',
        colorRgb: '56, 128, 255',
        colorContrast: '#ffffff',
        colorContrastRgb: '255, 255, 255',
        colorShade: '#3171e0',
        colorTint: '#4c8dff'
    },
    {
        // orange
        color: '#ff7426',
        colorRgb: '255, 116, 38',
        colorContrast: '#000000',
        colorContrastRgb: '0, 0, 0',
        colorShade: '#e06621',
        colorTint: '#ff823c'
    },
    {
        // lightblue
        color: '#50c8ff',
        colorRgb: '61, 194, 255',
        colorContrast: '#ffffff',
        colorContrastRgb: '255, 255, 255',
        colorShade: '#46b0e0',
        colorTint: '#62ceff'
    },
    {
        // voilet
        color: '#5260ff',
        colorRgb: '82, 96, 255',
        colorContrast: '#ffffff',
        colorContrastRgb: '255, 255, 255',
        colorShade: '#4854e0',
        colorTint: '#6370ff'
    },
    {
        // green
        color: '#28ba62',
        colorRgb: '45, 211, 111',
        colorContrast: '#ffffff',
        colorContrastRgb: '255, 255, 255',
        colorShade: '#23a456',
        colorTint: '#3ec172'
    },
    {
        // red
        color: '#eb445a',
        colorRgb: '235, 68, 90',
        colorContrast: '#ffffff',
        colorContrastRgb: '255, 255, 255',
        colorShade: '#cf3c4f',
        colorTint: '#ed576b'
    },
    {
        // dark
        color: '#292929',
        colorRgb: '40, 40, 40',
        colorContrast: '#ffffff',
        colorContrastRgb: '255, 255, 255',
        colorShade: '#232323',
        colorTint: '#3e3e3e'
    },
];


export const hexToRgb = (hex) => {
    var red = parseInt(hex[1] + hex[2], 16);
    var green = parseInt(hex[3] + hex[4], 16);
    var blue = parseInt(hex[5] + hex[6], 16);
    return `${red}, ${green}, ${blue}`;
}


const languages = [
    {
        "iso_639_1": "bi",
        "english_name": "Bislama",
        "name": ""
    },
    {
        "iso_639_1": "cs",
        "english_name": "Czech",
        "name": "??esk??"
    },
    {
        "iso_639_1": "ba",
        "english_name": "Bashkir",
        "name": ""
    },
    {
        "iso_639_1": "ae",
        "english_name": "Avestan",
        "name": ""
    },
    {
        "iso_639_1": "av",
        "english_name": "Avaric",
        "name": ""
    },
    {
        "iso_639_1": "de",
        "english_name": "German",
        "name": "Deutsch"
    },
    {
        "iso_639_1": "mt",
        "english_name": "Maltese",
        "name": "Malti"
    },
    {
        "iso_639_1": "om",
        "english_name": "Oromo",
        "name": ""
    },
    {
        "iso_639_1": "rm",
        "english_name": "Raeto-Romance",
        "name": ""
    },
    {
        "iso_639_1": "so",
        "english_name": "Somali",
        "name": "Somali"
    },
    {
        "iso_639_1": "ts",
        "english_name": "Tsonga",
        "name": ""
    },
    {
        "iso_639_1": "vi",
        "english_name": "Vietnamese",
        "name": "Ti???ng Vi???t"
    },
    {
        "iso_639_1": "gn",
        "english_name": "Guarani",
        "name": ""
    },
    {
        "iso_639_1": "ig",
        "english_name": "Igbo",
        "name": ""
    },
    {
        "iso_639_1": "it",
        "english_name": "Italian",
        "name": "Italiano"
    },
    {
        "iso_639_1": "ki",
        "english_name": "Kikuyu",
        "name": ""
    },
    {
        "iso_639_1": "ku",
        "english_name": "Kurdish",
        "name": ""
    },
    {
        "iso_639_1": "la",
        "english_name": "Latin",
        "name": "Latin"
    },
    {
        "iso_639_1": "ln",
        "english_name": "Lingala",
        "name": ""
    },
    {
        "iso_639_1": "lb",
        "english_name": "Letzeburgesch",
        "name": ""
    },
    {
        "iso_639_1": "ny",
        "english_name": "Chichewa; Nyanja",
        "name": ""
    },
    {
        "iso_639_1": "pl",
        "english_name": "Polish",
        "name": "Polski"
    },
    {
        "iso_639_1": "si",
        "english_name": "Sinhalese",
        "name": "???????????????"
    },
    {
        "iso_639_1": "to",
        "english_name": "Tonga",
        "name": ""
    },
    {
        "iso_639_1": "az",
        "english_name": "Azerbaijani",
        "name": "Az??rbaycan"
    },
    {
        "iso_639_1": "ce",
        "english_name": "Chechen",
        "name": ""
    },
    {
        "iso_639_1": "cu",
        "english_name": "Slavic",
        "name": ""
    },
    {
        "iso_639_1": "da",
        "english_name": "Danish",
        "name": "Dansk"
    },
    {
        "iso_639_1": "hz",
        "english_name": "Herero",
        "name": ""
    },
    {
        "iso_639_1": "ie",
        "english_name": "Interlingue",
        "name": ""
    },
    {
        "iso_639_1": "rw",
        "english_name": "Kinyarwanda",
        "name": "Kinyarwanda"
    },
    {
        "iso_639_1": "mi",
        "english_name": "Maori",
        "name": ""
    },
    {
        "iso_639_1": "no",
        "english_name": "Norwegian",
        "name": "Norsk"
    },
    {
        "iso_639_1": "pi",
        "english_name": "Pali",
        "name": ""
    },
    {
        "iso_639_1": "sk",
        "english_name": "Slovak",
        "name": "Sloven??ina"
    },
    {
        "iso_639_1": "se",
        "english_name": "Northern Sami",
        "name": ""
    },
    {
        "iso_639_1": "sm",
        "english_name": "Samoan",
        "name": ""
    },
    {
        "iso_639_1": "uk",
        "english_name": "Ukrainian",
        "name": "??????????????????????"
    },
    {
        "iso_639_1": "en",
        "english_name": "English",
        "name": "English"
    },
    {
        "iso_639_1": "ay",
        "english_name": "Aymara",
        "name": ""
    },
    {
        "iso_639_1": "ca",
        "english_name": "Catalan",
        "name": "Catal??"
    },
    {
        "iso_639_1": "eo",
        "english_name": "Esperanto",
        "name": "Esperanto"
    },
    {
        "iso_639_1": "ha",
        "english_name": "Hausa",
        "name": "Hausa"
    },
    {
        "iso_639_1": "ho",
        "english_name": "Hiri Motu",
        "name": ""
    },
    {
        "iso_639_1": "hu",
        "english_name": "Hungarian",
        "name": "Magyar"
    },
    {
        "iso_639_1": "io",
        "english_name": "Ido",
        "name": ""
    },
    {
        "iso_639_1": "ii",
        "english_name": "Yi",
        "name": ""
    },
    {
        "iso_639_1": "kn",
        "english_name": "Kannada",
        "name": "?????"
    },
    {
        "iso_639_1": "kv",
        "english_name": "Komi",
        "name": ""
    },
    {
        "iso_639_1": "li",
        "english_name": "Limburgish",
        "name": ""
    },
    {
        "iso_639_1": "oj",
        "english_name": "Ojibwa",
        "name": ""
    },
    {
        "iso_639_1": "ru",
        "english_name": "Russian",
        "name": "P????????????"
    },
    {
        "iso_639_1": "sr",
        "english_name": "Serbian",
        "name": "Srpski"
    },
    {
        "iso_639_1": "sv",
        "english_name": "Swedish",
        "name": "svenska"
    },
    {
        "iso_639_1": "ty",
        "english_name": "Tahitian",
        "name": ""
    },
    {
        "iso_639_1": "zu",
        "english_name": "Zulu",
        "name": "isiZulu"
    },
    {
        "iso_639_1": "ka",
        "english_name": "Georgian",
        "name": "?????????????????????"
    },
    {
        "iso_639_1": "ch",
        "english_name": "Chamorro",
        "name": "Finu' Chamorro"
    },
    {
        "iso_639_1": "be",
        "english_name": "Belarusian",
        "name": "???????????????????? ????????"
    },
    {
        "iso_639_1": "br",
        "english_name": "Breton",
        "name": ""
    },
    {
        "iso_639_1": "kw",
        "english_name": "Cornish",
        "name": ""
    },
    {
        "iso_639_1": "fi",
        "english_name": "Finnish",
        "name": "suomi"
    },
    {
        "iso_639_1": "sh",
        "english_name": "Serbo-Croatian",
        "name": ""
    },
    {
        "iso_639_1": "nn",
        "english_name": "Norwegian Nynorsk",
        "name": ""
    },
    {
        "iso_639_1": "tt",
        "english_name": "Tatar",
        "name": ""
    },
    {
        "iso_639_1": "tg",
        "english_name": "Tajik",
        "name": ""
    },
    {
        "iso_639_1": "vo",
        "english_name": "Volap??k",
        "name": ""
    },
    {
        "iso_639_1": "ps",
        "english_name": "Pushto",
        "name": "????????"
    },
    {
        "iso_639_1": "mk",
        "english_name": "Macedonian",
        "name": ""
    },
    {
        "iso_639_1": "fr",
        "english_name": "French",
        "name": "Fran??ais"
    },
    {
        "iso_639_1": "bm",
        "english_name": "Bambara",
        "name": "Bamanankan"
    },
    {
        "iso_639_1": "eu",
        "english_name": "Basque",
        "name": "euskera"
    },
    {
        "iso_639_1": "fj",
        "english_name": "Fijian",
        "name": ""
    },
    {
        "iso_639_1": "id",
        "english_name": "Indonesian",
        "name": "Bahasa indonesia"
    },
    {
        "iso_639_1": "mg",
        "english_name": "Malagasy",
        "name": ""
    },
    {
        "iso_639_1": "na",
        "english_name": "Nauru",
        "name": ""
    },
    {
        "iso_639_1": "xx",
        "english_name": "No Language",
        "name": "No Language"
    },
    {
        "iso_639_1": "qu",
        "english_name": "Quechua",
        "name": ""
    },
    {
        "iso_639_1": "sq",
        "english_name": "Albanian",
        "name": "shqip"
    },
    {
        "iso_639_1": "ti",
        "english_name": "Tigrinya",
        "name": ""
    },
    {
        "iso_639_1": "tw",
        "english_name": "Twi",
        "name": ""
    },
    {
        "iso_639_1": "wa",
        "english_name": "Walloon",
        "name": ""
    },
    {
        "iso_639_1": "ab",
        "english_name": "Abkhazian",
        "name": ""
    },
    {
        "iso_639_1": "bs",
        "english_name": "Bosnian",
        "name": "Bosanski"
    },
    {
        "iso_639_1": "af",
        "english_name": "Afrikaans",
        "name": "Afrikaans"
    },
    {
        "iso_639_1": "an",
        "english_name": "Aragonese",
        "name": ""
    },
    {
        "iso_639_1": "fy",
        "english_name": "Frisian",
        "name": ""
    },
    {
        "iso_639_1": "gu",
        "english_name": "Gujarati",
        "name": ""
    },
    {
        "iso_639_1": "ik",
        "english_name": "Inupiaq",
        "name": ""
    },
    {
        "iso_639_1": "ja",
        "english_name": "Japanese",
        "name": "?????????"
    },
    {
        "iso_639_1": "ko",
        "english_name": "Korean",
        "name": "?????????/?????????"
    },
    {
        "iso_639_1": "lg",
        "english_name": "Ganda",
        "name": ""
    },
    {
        "iso_639_1": "nl",
        "english_name": "Dutch",
        "name": "Nederlands"
    },
    {
        "iso_639_1": "os",
        "english_name": "Ossetian; Ossetic",
        "name": ""
    },
    {
        "iso_639_1": "el",
        "english_name": "Greek",
        "name": "????????????????"
    },
    {
        "iso_639_1": "bn",
        "english_name": "Bengali",
        "name": "???????????????"
    },
    {
        "iso_639_1": "cr",
        "english_name": "Cree",
        "name": ""
    },
    {
        "iso_639_1": "km",
        "english_name": "Khmer",
        "name": ""
    },
    {
        "iso_639_1": "lo",
        "english_name": "Lao",
        "name": ""
    },
    {
        "iso_639_1": "nd",
        "english_name": "Ndebele",
        "name": ""
    },
    {
        "iso_639_1": "ne",
        "english_name": "Nepali",
        "name": ""
    },
    {
        "iso_639_1": "sc",
        "english_name": "Sardinian",
        "name": ""
    },
    {
        "iso_639_1": "sw",
        "english_name": "Swahili",
        "name": "Kiswahili"
    },
    {
        "iso_639_1": "tl",
        "english_name": "Tagalog",
        "name": ""
    },
    {
        "iso_639_1": "ur",
        "english_name": "Urdu",
        "name": "????????"
    },
    {
        "iso_639_1": "ee",
        "english_name": "Ewe",
        "name": "????egbe"
    },
    {
        "iso_639_1": "aa",
        "english_name": "Afar",
        "name": ""
    },
    {
        "iso_639_1": "co",
        "english_name": "Corsican",
        "name": ""
    },
    {
        "iso_639_1": "et",
        "english_name": "Estonian",
        "name": "Eesti"
    },
    {
        "iso_639_1": "is",
        "english_name": "Icelandic",
        "name": "??slenska"
    },
    {
        "iso_639_1": "ks",
        "english_name": "Kashmiri",
        "name": ""
    },
    {
        "iso_639_1": "kr",
        "english_name": "Kanuri",
        "name": ""
    },
    {
        "iso_639_1": "ky",
        "english_name": "Kirghiz",
        "name": "??????"
    },
    {
        "iso_639_1": "kj",
        "english_name": "Kuanyama",
        "name": ""
    },
    {
        "iso_639_1": "nr",
        "english_name": "Ndebele",
        "name": ""
    },
    {
        "iso_639_1": "or",
        "english_name": "Oriya",
        "name": ""
    },
    {
        "iso_639_1": "wo",
        "english_name": "Wolof",
        "name": "Wolof"
    },
    {
        "iso_639_1": "za",
        "english_name": "Zhuang",
        "name": ""
    },
    {
        "iso_639_1": "ar",
        "english_name": "Arabic",
        "name": "??????????????"
    },
    {
        "iso_639_1": "cv",
        "english_name": "Chuvash",
        "name": ""
    },
    {
        "iso_639_1": "fo",
        "english_name": "Faroese",
        "name": ""
    },
    {
        "iso_639_1": "hr",
        "english_name": "Croatian",
        "name": "Hrvatski"
    },
    {
        "iso_639_1": "ms",
        "english_name": "Malay",
        "name": "Bahasa melayu"
    },
    {
        "iso_639_1": "nb",
        "english_name": "Norwegian Bokm??l",
        "name": "Bokm??l"
    },
    {
        "iso_639_1": "rn",
        "english_name": "Rundi",
        "name": "Kirundi"
    },
    {
        "iso_639_1": "sn",
        "english_name": "Shona",
        "name": ""
    },
    {
        "iso_639_1": "st",
        "english_name": "Sotho",
        "name": ""
    },
    {
        "iso_639_1": "tr",
        "english_name": "Turkish",
        "name": "T??rk??e"
    },
    {
        "iso_639_1": "am",
        "english_name": "Amharic",
        "name": ""
    },
    {
        "iso_639_1": "fa",
        "english_name": "Persian",
        "name": "??????????"
    },
    {
        "iso_639_1": "hy",
        "english_name": "Armenian",
        "name": ""
    },
    {
        "iso_639_1": "pa",
        "english_name": "Punjabi",
        "name": "??????????????????"
    },
    {
        "iso_639_1": "as",
        "english_name": "Assamese",
        "name": ""
    },
    {
        "iso_639_1": "ia",
        "english_name": "Interlingua",
        "name": ""
    },
    {
        "iso_639_1": "lv",
        "english_name": "Latvian",
        "name": "Latvie??u"
    },
    {
        "iso_639_1": "lu",
        "english_name": "Luba-Katanga",
        "name": ""
    },
    {
        "iso_639_1": "mr",
        "english_name": "Marathi",
        "name": ""
    },
    {
        "iso_639_1": "mn",
        "english_name": "Mongolian",
        "name": ""
    },
    {
        "iso_639_1": "pt",
        "english_name": "Portuguese",
        "name": "Portugu??s"
    },
    {
        "iso_639_1": "th",
        "english_name": "Thai",
        "name": "?????????????????????"
    },
    {
        "iso_639_1": "tk",
        "english_name": "Turkmen",
        "name": ""
    },
    {
        "iso_639_1": "ve",
        "english_name": "Venda",
        "name": ""
    },
    {
        "iso_639_1": "dv",
        "english_name": "Divehi",
        "name": ""
    },
    {
        "iso_639_1": "gv",
        "english_name": "Manx",
        "name": ""
    },
    {
        "iso_639_1": "kl",
        "english_name": "Kalaallisut",
        "name": ""
    },
    {
        "iso_639_1": "kk",
        "english_name": "Kazakh",
        "name": "??????????"
    },
    {
        "iso_639_1": "lt",
        "english_name": "Lithuanian",
        "name": "Lietuvi??"
    },
    {
        "iso_639_1": "my",
        "english_name": "Burmese",
        "name": ""
    },
    {
        "iso_639_1": "sl",
        "english_name": "Slovenian",
        "name": "Sloven????ina"
    },
    {
        "iso_639_1": "sd",
        "english_name": "Sindhi",
        "name": ""
    },
    {
        "iso_639_1": "cn",
        "english_name": "Cantonese",
        "name": "????????? / ?????????"
    },
    {
        "iso_639_1": "hi",
        "english_name": "Hindi",
        "name": "??????????????????"
    },
    {
        "iso_639_1": "cy",
        "english_name": "Welsh",
        "name": "Cymraeg"
    },
    {
        "iso_639_1": "ht",
        "english_name": "Haitian; Haitian Creole",
        "name": ""
    },
    {
        "iso_639_1": "iu",
        "english_name": "Inuktitut",
        "name": ""
    },
    {
        "iso_639_1": "jv",
        "english_name": "Javanese",
        "name": ""
    },
    {
        "iso_639_1": "mh",
        "english_name": "Marshall",
        "name": ""
    },
    {
        "iso_639_1": "sa",
        "english_name": "Sanskrit",
        "name": ""
    },
    {
        "iso_639_1": "ss",
        "english_name": "Swati",
        "name": ""
    },
    {
        "iso_639_1": "te",
        "english_name": "Telugu",
        "name": "??????????????????"
    },
    {
        "iso_639_1": "kg",
        "english_name": "Kongo",
        "name": ""
    },
    {
        "iso_639_1": "ml",
        "english_name": "Malayalam",
        "name": ""
    },
    {
        "iso_639_1": "uz",
        "english_name": "Uzbek",
        "name": "ozbek"
    },
    {
        "iso_639_1": "sg",
        "english_name": "Sango",
        "name": ""
    },
    {
        "iso_639_1": "xh",
        "english_name": "Xhosa",
        "name": ""
    },
    {
        "iso_639_1": "es",
        "english_name": "Spanish",
        "name": "Espa??ol"
    },
    {
        "iso_639_1": "su",
        "english_name": "Sundanese",
        "name": ""
    },
    {
        "iso_639_1": "ug",
        "english_name": "Uighur",
        "name": ""
    },
    {
        "iso_639_1": "yi",
        "english_name": "Yiddish",
        "name": ""
    },
    {
        "iso_639_1": "yo",
        "english_name": "Yoruba",
        "name": "??d?? Yor??b??"
    },
    {
        "iso_639_1": "zh",
        "english_name": "Mandarin",
        "name": "?????????"
    },
    {
        "iso_639_1": "he",
        "english_name": "Hebrew",
        "name": "????????????????"
    },
    {
        "iso_639_1": "bo",
        "english_name": "Tibetan",
        "name": ""
    },
    {
        "iso_639_1": "ak",
        "english_name": "Akan",
        "name": ""
    },
    {
        "iso_639_1": "mo",
        "english_name": "Moldavian",
        "name": ""
    },
    {
        "iso_639_1": "ng",
        "english_name": "Ndonga",
        "name": ""
    },
    {
        "iso_639_1": "dz",
        "english_name": "Dzongkha",
        "name": ""
    },
    {
        "iso_639_1": "ff",
        "english_name": "Fulah",
        "name": "Fulfulde"
    },
    {
        "iso_639_1": "gd",
        "english_name": "Gaelic",
        "name": ""
    },
    {
        "iso_639_1": "ga",
        "english_name": "Irish",
        "name": "Gaeilge"
    },
    {
        "iso_639_1": "gl",
        "english_name": "Galician",
        "name": "Galego"
    },
    {
        "iso_639_1": "nv",
        "english_name": "Navajo",
        "name": ""
    },
    {
        "iso_639_1": "oc",
        "english_name": "Occitan",
        "name": ""
    },
    {
        "iso_639_1": "ro",
        "english_name": "Romanian",
        "name": "Rom??n??"
    },
    {
        "iso_639_1": "ta",
        "english_name": "Tamil",
        "name": "???????????????"
    },
    {
        "iso_639_1": "tn",
        "english_name": "Tswana",
        "name": ""
    },
    {
        "iso_639_1": "bg",
        "english_name": "Bulgarian",
        "name": "?????????????????? ????????"
    }
];

export const getFullLanguageName = (lcode) => {
    return languages.find(x => x.iso_639_1 == lcode)?.english_name;
}


function setThemeColor(colorIndex) {
    const themeColor = themeColors[colorIndex]; // Math.floor(Math.random() * themeColors.length)// Get the root element

    var r = document.querySelector(':root');

    // Set the value of accent color css variables
    r.style.setProperty('--color-accent', themeColor.color);
    r.style.setProperty('--color-accent-rgb', themeColor.colorRgb);
    r.style.setProperty('--color-accent-contrast', themeColor.colorContrast);
    r.style.setProperty('--color-accent-shade', themeColor.colorShade);
    r.style.setProperty('--color-accent-tint', themeColor.colorTint);
}

let colorIndex = 0;

function setColorPalette() {
    // get theme color lastly saved into localStorage
    const themeColorIndex = localStorage.getItem('themeColorIndex');
    if (themeColorIndex) {
        colorIndex = themeColorIndex;
        setThemeColor(themeColorIndex);
    } else {
        setThemeColor(colorIndex);
    }

    const themeContainer = document.querySelector('.theme-palette-container');

    for (let index = 0; index < themeColors.length; index++) {
        const color = themeColors[index];
        const themeBtn = `  <button class="btn-theme-palette" data-index="${index}" style="background-color:${color.color}; color:${index == colorIndex ? '#fff' : color.color}">
                                <i class="fas fa-fill-drip"></i>
                            </button>`;
        themeContainer.insertAdjacentHTML('beforeend', themeBtn);
    }

    document.querySelectorAll('.btn-theme-palette').forEach((e) => {
        e.addEventListener('click', (btn) => {
            const prevBtn = document.querySelector(`button[data-index='${colorIndex}']`);
            prevBtn.style.color = prevBtn.style.backgroundColor;

            colorIndex = btn.target.dataset.index;
            btn.target.style.color = '#fff';

            setThemeColor(colorIndex);

            // set theme color lastly saved into localStorage
            localStorage.setItem('themeColorIndex', colorIndex);
        })
    });
}
setColorPalette();

document.querySelector('.btn-theme').addEventListener('click', (e) => {
    const palette = document.querySelector('.theme-palette-container');
    if (palette.style.visibility == 'visible') {
        palette.style.visibility = 'collapse';
    } else {
        palette.style.visibility = 'visible';
    }
});

// CODE FOR GO TO TOP BUTTON
//Get the button
var mybutton = document.getElementById("btnGoToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

mybutton.addEventListener('click', topFunction);

