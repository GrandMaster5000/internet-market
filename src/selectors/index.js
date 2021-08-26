import * as R from 'ramda';

export const getPhoneById = (state, id) => R.prop(id, state.phones);

export const getPhones = state => {
    const applySearch = item => R.includes(
        (state.phonesPage.search).toLowerCase(),
        R.prop('name', item).toLowerCase()
    )
    const phones = R.compose(
        R.filter(applySearch),
        R.map(id => getPhoneById(state, id))
    )(state.phonesPage.ids);

    return phones;
}

export const getRenderedPhonesLenght = state => R.length(state.phones.ids);

export const getTotalBasketCount  = state => R.length(state.basket);

export const getTotalBasketPrice  = state => {
    const totalPrice = R.compose(
        R.sum,
        R.pluck('price'),
        R.map(id => getPhoneById(state, id))
    )(state.basket);

    return totalPrice;
}