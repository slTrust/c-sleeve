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
        let currentJ = -1;
        matrix.forEach((element,i,j)=>{
            if(currentJ !== j){
                // 开启新列，创建新的 Fence
                currentJ = j;
                fences[currentJ] = this._createFence(element)
                
            }
            fences[currentJ].pushValueTitle(element.value)
        })
        console.log(fences);
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