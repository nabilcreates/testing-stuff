// function MyString(string){
//     this.string = string;
//     this.toString = function(){
//         return `${this.string}`
//     }
// }

function StringErrorHandler(e){

    // IT RETURNS SAYING THAT THE STRING (GOT IT FROM THROW NEW STRINGERRORHANDLER) IT NOT A STRING!
    this.toString = function(){
        return `${e} is not a string`
    }
    
}

function verifyString(str){

    // TRY THIS
    try {

        // IF STR IS A STRING
        if(typeof str === 'string'){

            // CONSOLE.LOG
            console.log('It is a string!')
        }else{

            // THROW THE STR ITSELF
            throw `${str}`
        }
    }
    
    // IT WILL CATCH ANYTHING THAT IS A THROW
    catch (e) {

        // AND THROW A NEW ERROR TO THE STRINGERRORHANDLER PASSING THE ERROR AS THE ARG
        throw new StringErrorHandler(e)
    }
}

verifyString('12321321')