import {SkuCode} from "./sku-code";

class Judger{

    fenceGroup
    pathDict = [];

    constructor(fenceGroup) {
        this.fenceGroup = fenceGroup;
        this.initPathDict();
    }

    initPathDict(){
        this.fenceGroup.spu.sku_list.forEach(s=>{
            const skuCode = new SkuCode(s.code);
            this.pathDict = this.pathDict.concat(skuCode.totalSegments); // 所有可能存在的路径
            console.log(this.pathDict)
        })
    }

}

export {
    Judger
}