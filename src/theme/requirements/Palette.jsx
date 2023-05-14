const colors = {
    primary: "#FF5F5F",
    background_light: "#FAF8ED",
    font: {
        title: "#2D3134",
        paragraph: "#5B5F62",
    }
}

export const LightPalette = ({
    mode: "light",
    primary: {
        main: colors.primary
    },
    background: {
        default: colors.background_light,
    },
    text: {
        primary: colors.font.title,
        secondary: colors.font.paragraph,
        //disabled: colors.grey.dark
    },
    /*common:{
        white:colors.white,
        black:colors.black
        
    } */
})


export const DarkPalette = ({
    mode: "dark",
    primary: {
        main: colors.primary
    },
    background: {
        default: colors.font.title,
    },
    /* text:{
        primary:colors.white,
        secondary:colors.grey.light,
        disabled:colors.grey.dark
    } */
})
