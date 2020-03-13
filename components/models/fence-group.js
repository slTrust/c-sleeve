import { Matrix } from "./matrix";
import { Fence } from "./fence";

class FenceGroup{
    spu
    spuList = []

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