# ALGORITHM

## [Standard Helium Compressor](https://github.com/sohamsshah/helium-compressor/blob/main/utils/compressors/heliumCompressor.js)

The Standard Helium Compressor is based on [Run Length Encoding Algorithm](https://en.wikipedia.org/wiki/Run-length_encoding), which is a lossless Data Compression Algorithm. 

---

## COMPRESSION 

### FEATURES
* Accepted Inputs: Alphabets (both small-case, upper-case), Special Characters. NOTE: Currently Helium doesn't support compression for strings with Numeric Values. Algorithm needs enhancement for the same.
* Ideal for: String inputs that has frequent substrings of long consecutive repeating characters
* Time Complexity: O(n), n = length of input string
* Space Complexity: O(m), m = length of output string NOTE: To make the function pure as per ES6+ guidelines, an extra `res` array is maintained where the desired output is stored and returned.  

### WORKING

#### Steps:
1. Take Input String
2. Convert to an character Array (for simplicity)
3. Defining the variables
  * Initialize an empty `res` array
  * Make an object that stores the `state` of the algorithm. It stores `curr` -> the character to be processed and `curr_count` -> Count of the repetitions for curr element
  * Initialize: `state.curr`: stringArr[0] and `state.curr_count`: 0
4. Loop through the array 
  * IF: char === `state.curr` THEN `state.curr_count`+=1
  * ELSE:
    - IF: `state.curr_count` > 1: append a string to res -> `previous_char + state.curr_count`
      ELSE: append a string to res -> `previous_char`
      RESET `state.curr_count` = 1
  * Make state.curr = char 
5. There will be some surplus playload values in the state. Append it to the res as a final step
6. return: concatanated string of the res array (i.e. res.join(""))

#### EXPLANATION:

The idea is to loop through the input string and check if the iterating character is equal to the curr processing one. If it is, it means that it is in a repeating sequence, thus we shall increment our counter. When we hit a point where the iterating character is not equal to the processing one, we simply update our result and put the curr processing one/previous iterated character with the count to the result and then reset our counter to 1. Continue this process till we come out of the loop. As expected, there is a possibility of some payload residing in the state. We clear it by add those data to our final result array. Now, finally we return the result string i.e. concatenating the res array.

---

## DECOMPRESSION

### FEATURES
* Accepted Inputs: Strictly consecutive sequence of Alphabets/SpecialChars and Numbers starting with Alphabets/SpecialChars.
* Ideal for: String inputs that has frequent substrings of long consecutive repeating characters
* Time Complexity: O(n), n = length of input string
* Space Complexity: O(m), m = length of output string NOTE: To make the function pure as per ES6+ guidelines, an extra `res` array is maintained where the desired output is stored and returned.  

### WORKING

#### Steps:
1. Take Input String (vaild form)
2. Convert to an character Array (for simplicity)
3. Defining the variables
  * Initialize an empty `res` array 
  * Initialize an empty `freq` dictionary. This will store the count of the processing character.
  * Make an object that stores the `state` of the algorithm. It stores `prev` -> the previous character and `curr_digit` -> The encountered digits substring in the form of string
  * Initialize: `state.prev`: "" and `state.curr_digit`: ""
4. Loop through the array
  * IF: char is a Number THEN: update `state.curr_digit`+=char 
  * ELSE: check if state.prev.length !== 0 (because prev will be empty string only for first iteration)
    - IF: state.curr_digit.length !== 0, add this to freq dict i.e. freq[state.prev] = parseInt(state.curr_digit)
    - Update the res by appending the `prev` characters. The total prev characters to be added to the res will be obtained from the freq dict.
    - Once, the res is updated, reinitialize freq and state.curr_digit
  * Set the state.prev = char
  * Add the char to freq dict with the freq[char] = 1 
5. There will be some surplus playload values in the state. Append it to the res as a final step
6. return: concatanated string of the res array (i.e. res.join(""))

#### EXPLANATION:
The idea is loop through the valid decompressible string and if the iterating char is a number, then we concat it to the curr_digit state. So, for example we have multiple length substring of numbers (ex. a22, here it means 'a' must 22 times in output. So we have to store '22' in curr_digit). If we encounter a NaN, so we check if the curr_digit is a non-empty string. This is the point where before moving furthur, we update the res and clear our payload in state. If yes, then we simply update the freq dict with the prev(processing element) equal to its frequency i.e. the curr_digit value from state. Then, we update the res. Once it is done, we set the prev to the present char and add freq=1 to the dict corresponding to it. Continue this process till we come out of the loop. As expected, there is a possibility of some payload residing in the state. We clear it by add those data to our final result array. Now, finally we return the result string i.e. concatenating the res array.  

---

### Example Test Cases (Tested for working to and fro lossless):
1. Input: abbcccddddeeeee
   Output: ab2c3d4e5
2. Input: abcdeeeeeeeeeeeeeeeeeeeeeeeee
   Output: abcde25
3. Input: abcdefg
   Output: abcdefg
4. Input: terribly tiny tales
   Output: ter2ibly tiny tales
5. Input: JavaScript is      awesome
   Output: JavaScript is 6awesome
6. Input: #$%%%%abbbCcDDdFFFFFF
   Output: #$%4ab3CcD2dF6
