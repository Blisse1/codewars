function solution(str){
    let orderedStringArr = [];
    let reversedStringArr = [];
    for(const string of str){
        orderedStringArr.push(string);
    }
    while(orderedStringArr.length !== 0){
        for(let string of orderedStringArr){
            if(string === orderedStringArr[orderedStringArr.length - 1]){
                let deletedString = orderedStringArr.pop();
                reversedStringArr.push(deletedString);
            }else{
                continue;
            }
        }
    }
    return reversedStringArr.join("")
}

