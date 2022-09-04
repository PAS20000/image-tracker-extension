import 'styled-components';
import { Utils } from '../styled';


const utils : Utils = {
    borderRadius:'8px',
    boxShadow:'2px 2px 10px #000',
}

const Dark = {
    title:'dark',
    utils,
    color: {
        bg:{
            0:'#181818',
            1:'#282a36'
        },
        green:'#50fa7b',
        red:'#ff5555',
        cyan:'#00C3FF',
        yellow:'#ffbf00',
        icon:'#f8f8f2;',
        purple:'#bd93f9'
    }
}

const Light = {
    title:'light',
    utils,
    color: {
        bg:{
            0:'#f1e7db',
            1:'#c4c7b5'
        },
        green:'#005221',
        red:'#ff0000',
        cyan:'#0088c5',
        yellow:'#cca500',
        icon:'#111111',
        purple:'#562f7e'
    }
}

export {
    Dark,
    Light
}