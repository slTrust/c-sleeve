import {SkuCode} from "./sku-code";
import {CellStatus} from "../../core/enum";
import {Cell} from "./cell";

class Judger{

    fenceGroup
    pathDict = [];

    constructor(fenceGroup) {
        this.fenceGroup = fenceGroup;
        this._initPathDict();
    }

    _initPathDict(){
        this.fenceGroup.spu.sku_list.forEach(s=>{
            const skuCode = new SkuCode(s.code);
            this.pathDict = this.pathDict.concat(skuCode.totalSegments); // 所有可能存在的路径
            console.log(this.pathDict)
        })
    }

    judge(cell,x,y){
        this._changeCellStatus(cell,x,y);
    }

    _changeCellStatus(cell,x,y){
        if(cell.status === CellStatus.WAITING){
            // cell.status = CellStatus.SELECTED; 传递进来的 cell 是小程序自己渲染后的 并不是原来的索引
            // 所以通过 x / y 在 fenceGroup 查找 cell并修改
            this.fenceGroup.fences[x].cells[y].status = CellStatus.SELECTED;
        }
        if(cell.status === CellStatus.SELECTED){
            // cell.status = CellStatus.WAITING
            this.fenceGroup.fences[x].cells[y].status = CellStatus.WAITING;
        }

    }

}

export {
    Judger
}