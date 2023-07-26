let chess = ''
for(let i = 0; i < 8; i+=1){
    for(let j = 0; j <8; j+=1){
        if((i+j)%2!==0){
            chess+='*'
        }else{
            chess+=' '
        }
    }
    chess+='\n '
}
console.log(chess)