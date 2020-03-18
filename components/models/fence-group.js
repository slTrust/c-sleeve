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

    getDefaultSku(){
        const defaultSkuId = this.spu.default_sku_id;
        if(!defaultSkuId){
            return
        }
        return this.sku_list.find(s=>s.id === defaultSkuId);
    }

    getSku(skuCode){
        const fullSkuCode = this.spu.id + '$' + skuCode;
        const sku = this.spu.sku_list.find(s=>s.code === fullSkuCode);
        return sku?sku:null
    }

    setCellStatusById(cellId,status){
        this.eachCell(cell=>{
            if(cell.id === cellId){
                cell.status = status;
            }
        })
    }
    setCellStatusByXY(x,y,status){
        this.fences[x].cells[y].status = status;
    }


    initFences(){
        const matrix = this._createMatrix(this.sku_list);
        const fences = [];

        const AT = matrix.transpose()
        AT.forEach(r=>{
            const fence = new Fence(r);
            fence.init();
            if(this._hasSketchFence() && this._isSketchFence(fence.id)){
                fence.setFenceSketch(this.sku_list);
            }
            fences.push(fence)
        })
        this.fences = fences;
    }

    _hasSketchFence(){
        // api 里 sketch_spec_id 用来标示 是否含有可视规格
        return this.spu.sketch_spec_id?true:false;
    }

    _isSketchFence(fenceId){
        return this.spu.sketch_spec_id === fenceId ? true : false;
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