// function MyString(string){
//     this.string = string;
//     this.toString = function(){
//         return `${this.string}`
//     }
// }

function StringErrorHandler(e){

    this.toString = function(){
        return `${e} is not a string`
    }
    
}

function verifyString(str){
    try {
        if(typeof str === 'string'){
            console.log('It is a string!')
        }else{
            throw `${str}`
        }
    } catch (e) {
        throw new StringErrorHandler(e)
    }
}

verifyString('12321321')