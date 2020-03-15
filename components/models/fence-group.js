import { Matrix } from "./matrix";
import { Fence } from "./fence";

class FenceGroup{
    spu
    spuList = []
    fences

    constructor(spu){
        this.spu = spu
        this.sku_list = spu.sku_list
    }

    initFences(){
        const matrix = this._createMatrix(this.sku_list);
        const fences = [];

        const AT = matrix.transpose()
        AT.forEach(r=>{
            const fence = new Fence(r);
            fence.init();
            fences.push(fence)
        })
        console.log(fences)
        this.fences = fences;
    }


    eachCell(cb){
        for (let i = 0; i < this.fences.length; i++) {
            for (let j = 0; j < this.fences[i].cells.length; j++) {
                const cell = this.fences[i].cells[j];
                cb(cell,i,j);
            }
        }
    }

    _createFence(element){
        const fence = new Fence();
        return fence;
    }

    _createMatrix(spuList){
        const m = [];
        spuList.forEach(sku=>{
            m.push(sku.specs)
        })
        return new Matrix(m);
    }
}

export{
    FenceGroup
}