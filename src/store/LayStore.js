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
            { id: 51, name: 'Банановый', pic: { br } },
            { id: 52, name: 'Сдобный', pic: { pink } },
            { id: 53, name: 'Малиновый', pic: { yel } }

        ]
        this._creams = [
            { id: 101, name: 'Ванильный', pic: { dressing } },
            { id: 102, name: 'Карамельный', pic: { dressBanana } }

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
