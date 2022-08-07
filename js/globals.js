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
        color: '#3dc2ff',
        colorRgb: '61, 194, 255',
        colorContrast: '#ffffff',
        colorContrastRgb: '255, 255, 255',
        colorShade: '#36abe0',
        colorTint: '#50c8ff'
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
        // success
        color: '#2dd36f',
        colorRgb: '45, 211, 111',
        colorContrast: '#ffffff',
        colorContrastRgb: '255, 255, 255',
        colorShade: '#28ba62',
        colorTint: '#42d77d'
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
];


export const hexToRgb = (hex) => {
    var red = parseInt(hex[1] + hex[2], 16);
    var green = parseInt(hex[3] + hex[4], 16);
    var blue = parseInt(hex[5] + hex[6], 16);
    return `${red}, ${green}, ${blue}`;
}