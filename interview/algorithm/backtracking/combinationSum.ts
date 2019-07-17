/***
 * 从给定有序数组中选取任意个数(可重复)，使其和为给定值
 */
class Solution {
  candidates: number[];
  target: number;
  res: number[][];
  constructor(candidates: number[], target: number){
    this.candidates = candidates
    this.target = target
    this.res = []
  }
  public combinationSum():number[][]{
    this.helper(this.candidates, this.target, [],0)
    console.log(this.res);
    // todo 为什么res最终是[[],[],[],[],[],[],[],[],[],[],[]]
    return this.res
  }
  private helper(candidates: number[],target: number,list: number[],index: number){
    if (target<0){
      return;
    }
    if (target===0){
      console.log(list);
      this.res.push(list)
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      if (candidates[i]<=target){
        let kk = target- candidates[i]
        if (kk<0) continue;
        list.push(candidates[i])
        this.helper(candidates, kk,list,i)
        list.pop()
      }
    }
  }
}

const test = new Solution([1,2,3,4,5,6], 10)
const res = test.combinationSum()
console.log(res);