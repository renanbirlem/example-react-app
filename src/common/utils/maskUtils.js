import {conformToMask} from 'react-text-mask'

export function documentMask(document){
    if(!document){
        return null;
    }

    if(document.length < 11){
        return shortCnpjMask(document);
    }else if(document.length === 11){
        return cpfMask(document);
    }else if(document.length === 14){
        return cnpjMask(document);
    }
}

export function cpfMask(cpf){
    let cpfMask = cpfPattern();
    
    return conformToMask(
        cpf,
        cpfMask
    ).conformedValue;
}

function cnpjMask(cnpj){
    let cnpjMask = cnpjPattern(false);
    
    return conformToMask(
        cnpj,
        cnpjMask
    ).conformedValue;
}

export function shortCnpjMask(cnpj){
    let cnpjMask = cnpjPattern(true);
    
    return conformToMask(
        cnpj,
        cnpjMask
    ).conformedValue;
}

export function xsdVersionPattern(){
    return ['v', /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
}

export function cnpjPattern(short){
    if(short){
        return[ /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/];
    }else{
        return [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/,'/', /\d/, /\d/, /\d/, /\d/,'-', /\d/, /\d/]
    }
}

export function cpfPattern(){
    return [ /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/,'-', /\d/, /\d/];
}

export function establishmentPattern(){
    return [ /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
}