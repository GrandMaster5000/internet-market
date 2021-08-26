import * as R from 'ramda';

export const getPhoneById = (state, id) => R.prop(id, state.phones);

export const getPhones = state => {
    console.log(state.phones);
    const phones = R.map(id => getPhoneById(state, id), state.phonesPage.ids);
    return phones;
}

export const getRenderedPhonesLenght = state => R.length(state.phones.ids);