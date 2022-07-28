class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
 insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
	
    extractMax(){
//EDGE CASE COME BACK TO THIS!!
    const max=this.values[0];
    const end=this.values.pop();
    if (this.values.length > 0) {
    this.values[0]=end;
    this.sinkDown();
	  }
     return max;
	}
		
    sinkDown() {
	const idx = 0;
	let length = this.values.length;
	let element = this.values[0];
	while (true) {
	let leftChildIdx = 2 * idx + 1;
	let rightChildIdx = 2*idx + 2;
	let swap = null;

	if ( leftChildIdx < length) {
	let leftChild = this.values[leftChildIdx];
		if (leftChild > element){
		swap = leftChildIdx;
		}
	}
    if ( rightChildIdx < length) {
	let rightChild = this.values[rightChildIdx];
		if (( swap === null && rightChildIdx > element) ||
		(swap !== null && rightChild > this.values[swap] )){ // this.values[swap] is leftChild 
		swap = rightChildIdx;
		}	
	}
	if (swap === null) break;
	this.values[idx] = this.values[swap]; 
	this.values[swap] = element;
  	}  
}}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);



