const heliumCompress = (string) => {
    if(string.trim() === ""){
      return ""
    }
    const stringArr = string.split("")
    const state = {curr: stringArr[0], curr_count:0}
    let res = []
    for(char in stringArr){
      if(stringArr[char] === state.curr){
        state.curr_count+=1
      }else{
        res = [...res, `${stringArr[parseInt(char)-1]}${(state.curr_count > 1)?(state.curr_count):""}`]
        state.curr_count=1
      }
      state.curr = stringArr[parseInt(char)];
    }
    res = res = [...res, `${stringArr[parseInt(char)]}${(state.curr_count > 1)?(state.curr_count):""}`]
  
    return res.join("");
}
  
const heliumDecompress = (string) => {
  const stringArr = string.split("");
  const state = {curr_digit:"", prev:""}
  let freq = {}
  let res = []
  for(char in stringArr){
    if(!(isNaN(parseInt(stringArr[char])))){
      state.curr_digit+=stringArr[char]
      
    }else{
      if(state.prev.length !== 0){
        if(state.curr_digit.length !== 0){
          freq[state.prev] = parseInt(state.curr_digit)
        }
        res = [...res, ...Array(freq[state.prev]).fill(state.prev)]
        freq = {}
        state.curr_digit = ""
      }
      state.prev = stringArr[char]
      freq[stringArr[char]] = 1 
    }
    
  }
  if(state.curr_digit.length === 0){
    res = [...res, state.prev]
  }else{
    res = [...res, ...Array(parseInt(state.curr_digit)).fill(state.prev)]
  }
  
  res = res.join("")
  return res
}
  
module.exports = {heliumCompress, heliumDecompress}