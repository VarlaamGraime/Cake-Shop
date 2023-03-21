import { makeAutoObservable } from 'mobx';
import br from '../assets/br.png'
import pink from '../assets/pink.png'
import yel from '../assets/yel.png'
import dressing from '../assets/dressing.png'
import dressingPink from '../assets/dressingPink.png'
import dressBanana from '../assets/dressBanana.png'

export default class LayStore {
    constructor() {
        this._layers = [
            { id: 1, name: 'Банановый', pic: { br } },
            { id: 2, name: 'Сдобный', pic: { pink } },
            { id: 3, name: 'Малиновый', pic: { yel } }

        ]
        this._creams = [
            { id: 1, name: 'Ванильный', pic: { dressing } },
            { id: 2, name: 'Карамельный', pic: { dressBanana } }

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
