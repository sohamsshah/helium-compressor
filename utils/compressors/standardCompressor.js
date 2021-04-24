const heliumZip = (string) => {
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
    res = res = [...res, `${stringArr[parseInt(char)]}${(state.curr_count > 1)?(state.curr_count):""}`].join("")
  
    return res;
  }
  
  const freqDict = (stringArr) => {
    const state = {frequency:0, curr_digit:"", prev:stringArr[0]}
    let res = {}
    for(let char in stringArr){
      if(!isNaN(parseInt(stringArr[char]))){
        state.curr_digit+=stringArr[char]
      }else{
        if(state.curr_digit.length === 0){
          state.frequency = 1
        }else{
          state.frequency = parseInt(state.curr_digit)
        }
        res[state.prev] = state.frequency
  
        state.frequency = 0
        state.curr_digit = ""
        state.prev = stringArr[char]
      }
      
    }
    if(state.curr_digit.length === 0){
          state.frequency = 1
      }else{
        state.frequency = parseInt(state.curr_digit)
      }
    res[state.prev] = state.frequency
    return res
    
  }
  
  const heliumUnZip = (string) => {
    const stringArr = string.split("");
    const frequencies = freqDict(stringArr);
    let res = []
    for(char in frequencies){
      res = [...res, ...Array(frequencies[char]).fill(char)]
    }
    return res.join("")
  
  }
   
  // heliumZip("aabbccddessssssssssssssssssssssssssssss");
  heliumUnZip("a1b1c1d20");
  
  module.exports = {heliumUnZip, heliumZip}