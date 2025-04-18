/*Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

*/

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {

    let stack = [-1];  //underlow
    let maxArea = 0;
  
    for (let i = 0; i <= heights.length; i++) {
      let h = i === heights.length ? 0 : heights[i]; // Add height limit
  
      while (stack.length > 1 && h < heights[stack[stack.length - 1]]) {
        let height = heights[stack.pop()];
        let width = i - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, height * width);
      }
  
      stack.push(i);
    }
  
    return maxArea;
  
  
  };