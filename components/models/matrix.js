class Matrix{
    m

    constructor(matrix){
        this.m = matrix
    }

    get rowsNum(){
        return this.m.length;
    }

    get colsNum(){
        return this.m[0].length;
    }
    
    transpose(){
        const destArr = [];
        for(let j=0; j< this.colsNum;j++){
            destArr[j] = [];
            for(let i=0;i<this.rowsNum;i++){
                destArr[j][i] = this.m[i][j]
            }
        }
        return destArr
    }
}

export{
    Matrix
}