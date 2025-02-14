import { makeAutoObservable } from 'mobx';

export default class CakeStore {
    constructor() {





        this._types = [
            { id: 1, name: 'Торты' },
            { id: 2, name: 'Пирожные' },
            { id: 3, name: 'Мороженое' },
            { id: 4, name: 'Леденцы' }

        ]
        this._brands = [
            { id: 21, name: 'Шоколадные' },
            { id: 22, name: 'Кремовые' },
            { id: 23, name: 'Вафельные' },
            { id: 24, name: 'Солёные' },

        ]
        this._cakes = [
            { id: 31, name: 'Наполеон', price: 1000, rating: 5 },
            { id: 32, name: 'Картошка', price: 1000, rating: 5 },
            { id: 33, name: 'Прага', price: 1000, rating: 5 },
            { id: 34, name: 'Кремовый', price: 1000, rating: 5 },
            { id: 35, name: 'Томатный', price: 1000, rating: 5 },
            { id: 36, name: 'Желейный', price: 1000, rating: 5 },


        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }
    setCake(cakes) {
        this._cakes = cakes
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get cakes() {
        return this._cakes
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}