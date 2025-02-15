class NestedIterator {
    constructor(nestedList) {
        this.flattenedList = []; 
        this.index = 0;
        
        
        const flatten = (list) => {
            for (let item of list) {
                if (item.isInteger()) {
                    this.flattenedList.push(item.getInteger());
                } else {
                    flatten(item.getList());
                }
            }
        };
        
        flatten(nestedList);
    }
    next() {
        return this.flattenedList[this.index++];
    }
    hasNext() {
        return this.index < this.flattenedList.length;
    }
}