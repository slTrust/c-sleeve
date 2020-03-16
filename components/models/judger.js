import {SkuCode} from "./sku-code";
import {CellStatus} from "../../core/enum";
import {SkuPending} from "./sku-pending";
import {Joiner} from "../../utils/joiner";

class Judger{

    fenceGroup
    pathDict = [];
    skuPending

    constructor(fenceGroup) {
        this.fenceGroup = fenceGroup;
        this._initPathDict();
        this._initSkuPending();
    }

    _initSkuPending(){
        this.skuPending = new SkuPending();
        const defaultSku = this.fenceGroup.getDefaultSku();
        if(!defaultSku){
            return
        }
        this.skuPending.init(defaultSku);
        this._initSelectedCell();
        this.judge(null,null,null,true);

    }

    _initSelectedCell(){
        this.skuPending.pending.forEach(cell=>{
            this.fenceGroup.setCellStatusById(cell.id,CellStatus.SELECTED);
        })
    }

    _initPathDict(){
        this.fenceGroup.spu.sku_list.forEach(s=>{
            const skuCode = new SkuCode(s.code);
            this.pathDict = this.pathDict.concat(skuCode.totalSegments); // 所有可能存在的路径
            console.log(this.pathDict)
        })
    }

    judge(cell, x, y, isInit=false){
        if(!isInit){
            this._changeCurrentCellStatus(cell,x,y,isInit);
        }

        this.fenceGroup.eachCell((cell,x,y)=>{
            const path = this._findPotenialPath(cell,x,y);
            console.log(path);
            if(!path){
                return;
            }
            const isIn = this._isInDict(path);
            if(isIn){
                this.fenceGroup.setCellStatusByXY(x,y,CellStatus.WAITING);
            }else{
                this.fenceGroup.setCellStatusByXY(x,y,CellStatus.FORBIDDEN);
            }
        })
    }

    _isInDict(path){
        return this.pathDict.includes(path);
    }

    _findPotenialPath(cell,x,y){
        const joiner = new Joiner('#');

        for (let i = 0; i < this.fenceGroup.fences.length; i++) {
            const selected = this.skuPending.findSelectedCellByX(i);
            if(x === i){
                // 当前行
                if(this.skuPending.isSelected(cell,x)){
                    // 当前行当前元素
                    return;
                }
                const cellCode = this._getCellCode(cell.spec);
                joiner.join(cellCode)
            }else{
                // 其他行
                if(selected){
                    const selectedCellCode = this._getCellCode(selected.spec)
                    joiner.join(selectedCellCode)
                }
            }
        }
        return joiner.getStr()
    }

    _getCellCode(spec){
        return spec.key_id + '-'+ spec.value_id
    }

    _changeCurrentCellStatus(cell,x,y){
        if(cell.status === CellStatus.WAITING){
            this.fenceGroup.setCellStatusByXY(x,y,CellStatus.SELECTED);
            this.skuPending.insertCell(cell,x)
        }
        if(cell.status === CellStatus.SELECTED){
            this.fenceGroup.setCellStatusByXY(x,y,CellStatus.WAITING);
            this.skuPending.removeCell(cell,x)
        }

    }

}

export {
    Judger
}