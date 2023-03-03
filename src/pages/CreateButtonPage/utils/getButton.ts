import InterimStyleStorage, { interimStyleStorage } from "../store/InterimStyleStorage";

export function getButton({cssStyles, text}: interimStyleStorage){
    const { 
        fontSize, fontFamily, color, paddingHor, paddingVer, borderRadius, cursor, transition, backgroundColor, borderWidth, borderColor, 
        shadowX, shadowY, shadowBlur, shadowColor, shadowSpread 
    } = cssStyles.styles;

    const { 
        colorHov, backgroundColorHov, borderColorHov,
        shadowXHov, shadowYHov, shadowBlurHov, shadowColorHov, shadowSpreadHov 
    } = cssStyles.stylesHover;

    const button = {
        text: text,
        cssStyles:{
            styles:{
                fontSize: `${fontSize}px`,
                fontFamily: fontFamily,
                color: color,

                padding: `${paddingVer}px ${paddingHor}px`,

                borderRadius: `${borderRadius}px`,
                cursor: cursor,
                transition: `${transition}s`,
                backgroundColor: backgroundColor,

                border: `${borderWidth}px solid ${borderColor}`,
                boxShadow: `${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowSpread}px ${shadowColor}`,
            },
            stylesHover: {
                backgroundColor:backgroundColorHov,
                color: colorHov,
                border: `${borderWidth}px solid ${borderColorHov}`,

                boxShadow: `${shadowXHov}px ${shadowYHov}px ${shadowBlurHov}px ${shadowSpreadHov}px ${shadowColorHov}`,
            }
        }
    }

    return {...button};
}