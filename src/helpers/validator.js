const buildingNumRegExp = /^([1-9]\d{0,3}[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]?)((( ?-|\/ ?)| |( [кК](\.|(орп(\.|(ус))?))? ?))(([1-9]\d{0,2})?[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]?))?((( ?-|\/ ?)| |( [Бб](\.|(лок)?) ?))([1-9]\d{0,2}[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]?))?$/

export const buildingNumberIsValid = (buildingNumber)=>{
    return buildingNumRegExp.test(buildingNumber)
}

const incorrectCharactersRegExp = /[^0-9а-щА-ЩЬьЮюЯяЇїІіЄєҐґ\-/ ]/g
const missingSpaceRegExp = /((?<=\d)[кК](\.|(орп(\.|(ус))?))?)|((?<=\d)[Бб](\.|(лок)?))/
const latinLettersAreUsedRegExp = /[A-Za-z]/
const startsFromZeroRegExp = /^0/
const numberIsTooLargeRegExp = /(^\d{5,})|(\d{4,})]/
const missingSeparator = /(?<=[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ])\d/

export const getExplanation = (buildingNumber) => {
    if(latinLettersAreUsedRegExp.test(buildingNumber)) return 'Використовуються латинські літери'

    if(startsFromZeroRegExp.test(buildingNumber)) return 'Номер будинку не може починатися з 0'

    if(numberIsTooLargeRegExp.test(buildingNumber)) return 'Номер будинку, корпусу, чи блоку занадто великий'

    if(missingSpaceRegExp.test(buildingNumber)) return 'Пропущений пробіл перед корпусом, або блоком'

    if(missingSeparator.test(buildingNumber)) return 'Пропущений роздільник'

    const incorrectCharacters = buildingNumber.match(incorrectCharactersRegExp)
    if(incorrectCharacters) return `Недопустимі символи: ${[...new Set(incorrectCharacters)].join('')}`


    return '-'
}
