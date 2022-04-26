function tabela(x){
    let arr = [];
for(let i = 0; i <= x; i++){
    arr[i] = []
for(let o = 0; o <= x; o++){
    arr[i][o] = i * o
}    
}
console.table(arr)
}
tabela(10)