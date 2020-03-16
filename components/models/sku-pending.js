import {Cell} from "./cell";
import {Joiner} from "../../utils/joiner";

class SkuPending{
    pending = []
    size // 完整的sku 应该有多少个规格

    constructor(size){
        this.size = size;
    }

    init(sku){
        for (let i = 0; i < sku.specs.length; i++) {
            const cell = new Cell(sku.specs[i]);
            this.insertCell(cell,i);
        }
    }

    getSkuCode(){
        const joiner = new Joiner('#');
        this.pending.forEach(cell=>{
            const cellCode = cell.getSkuCode();
            joiner.join(cellCode);
        })

        return joiner.getStr();
    }

    isIntact(){
        for (let i = 0; i < this.size; i++) {
            if(this._isEmptyPart(i)){
                return false;
            }
        }
        return true;
    }

    _isEmptyPart(index){
        return this.pending[index]?false:true
    }

    insertCell(cell,x){
        this.pending[x] = cell

    }

    removeCell(cell,x){
        this.pending[x] = null
    }

    findSelectedCellByX(x){
        return this.pending[x]
    }

    isSelected(cell,x){
        const pendingCell = this.pending[x]
        if(!pendingCell){
            return false
        }
        return cell.id === pendingCell.id;
    }
}

export {
    SkuPending
}