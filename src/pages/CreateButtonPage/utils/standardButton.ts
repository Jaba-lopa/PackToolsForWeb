export function standardButton(){
    return {
        text: 'Кнопка',
        cssStyles:{
            styles:{
                fontSize: '20',
                fontFamily: 'sans-serif',
                color: '#1f1f1f',

                paddingHor: '50',
                paddingVer: '15',

                borderRadius: '50',
                cursor: 'pointer',
                transition: '0.2',
                backgroundColor: '#ffffff',

                borderWidth: '2',
                borderColor: '#1f1f1f',

                shadowX: '0',
                shadowY: '0',
                shadowBlur: '0',
                shadowSpread: '0',
                shadowColor: '#ffffff'
            },
            stylesHover: {
                backgroundColorHov: '#1f1f1f',
                colorHov: '#ffffff',
                borderColorHov: '#1f1f1f',

                shadowXHov: '0',
                shadowYHov: '0',
                shadowBlurHov: '0',
                shadowSpreadHov: '0',
                shadowColorHov: '#ffffff'
            }
        }
    }
}