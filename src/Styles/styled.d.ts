import 'styled-components'

export type Utils = {
    borderRadius:string
    boxShadow:string
    fontFamily?:string
}

export type Color = {
    bg:{
        0:string
        1:string
    }
    green:string
    red:string
    cyan:string
    yellow:string
    icon:string
    purple:string
}

declare module 'styled-components' {
  export interface DefaultTheme {
        title:string
        utils:Utils
        color:Color
    }
}