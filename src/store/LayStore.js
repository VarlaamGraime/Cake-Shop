import { makeAutoObservable } from 'mobx';

export default class LayStore {
    constructor() {
        this._layers = [
            { id: 1, name: 'Банановый' },
            { id: 2, name: 'Сдобный' },
            { id: 3, name: 'Малиновый' }

        ]
        this._creams = [
            { id: 1, name: 'Ванильный' },
            { id: 2, name: 'Карамельный' }

        ]

        this._selectedLayer = {}
        this._selectedCream = {}
        makeAutoObservable(this)
    }

    setLayer(layers) {
        this._layers = layers
    }

    setBrands(creams) {
        this._creams = creams
    }


    setSelectedLayer(layer) {
        this._selectedLayer = layer
    }

    setSelectedCream(cream) {
        this._selectedCream = cream
    }

    get layers() {
        return this._layers
    }

    get creams() {
        return this._creams
    }


    get selectedLayer() {
        return this._selectedLayer
    }

    get selectedCream() {
        return this._selectedCream
    }
}
