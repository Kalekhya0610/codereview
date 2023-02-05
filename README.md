# codereview

## Are there any bugs in the code?
Yes, there are a few bugs in the code:
1. The line maxKey = Math.max(Object.keys(this.store)); should be changed to var maxKey = Math.max.apply(null, Object.keys(this.store));. The Math.max() function expects a list of numbers, but Object.keys(this.store) returns an array of strings, which need to be converted to numbers before finding the maximum value.
2. The line this.store.forEach(function(bucket) { should be changed to Object.values(this.store).forEach(function(bucket) { because this.store is an object, not an array.
3. In the changePriority method, the return false; statement inside the inner forEach should be changed to return; because return false; will not have the desired effect.
4. The length property of PriorityQueue should be a method, not a property, because it's expected to return a value that can change, i.e., the number of elements in the queue. It should be changed from this.length = function() { to this.length = function() {.

## Give examples of sample data you would use to test the functions. Why were they chosen, and what are they testing for?
Here is some sample data and test cases for the PriorityQueue class:

1. Test adding an element to the queue:  
    let queue = new PriorityQueue();  
    queue.add('A', 1);  
    queue.add('B', 2);  
    queue.add('C', 3);  
    queue.add('D', 2);  
    queue.add('E', 1);  

    console.log(queue.store);  
    // Output: {1: ['A', 'E'], 2: ['B', 'D'], 3: ['C']}.   
    This test case checks if elements are added to the queue and assigned the correct priority.

2. Test removing an element from the queue:  
    let queue = new PriorityQueue();    
    queue.add('A', 1);  
    queue.add('B', 2);  
    queue.add('C', 3);  

    let item = queue.Pop();  
    console.log(item);  
    // Output: 'C'. 

    console.log(queue.store);  
    // Output: {1: ['A'], 2: ['B']}.   
    This test case checks if the element with the highest priority is removed from the queue.

3. Test the length of the queue:  
    let queue = new PriorityQueue();  
    queue.add('A', 1);  
    queue.add('B', 2);  
    queue.add('C', 3);  

    console.log(queue.length());  
    // Output: 3. 

    queue.Pop();  
    queue.Pop();   

    console.log(queue.length());   
    // Output: 1     
    This test case checks if the length() method returns the correct number of elements in the queue.

4. Test getting all priority levels:  
    let queue = new PriorityQueue();
    queue.add('A', 1);  
    queue.add('B', 2);  
    queue.add('C', 3);  
    queue.add('D', 2);  
    queue.add('E', 1);  

    console.log(queue.get_all_priorities());  
    // Output: [1, 2, 3].   
    This test case checks if the get_all_priorities() method returns an array of all priority levels in the queue.

5. Test changing the priority of an element:  
    let queue = new PriorityQueue();  
    queue.add('A', 1);  
    queue.add('B', 2);  
    queue.add('C', 3);  
    queue.add('D', 2);  
    queue.add('E', 1);  

    queue.changePriority('B', 1);  
    console.log(queue.store);  
    // Output: {1: ['A', 'B', 'E'], 2: ['D'], 3: ['C']}.   
    This test case checks if the changePriority() method changes the priority of an element in the queue.  

## Develop some automated tests for this code. What are these tests designed to find?
Here are some automated tests for the PriorityQueue code:

Test 1: Adding an item to the queue. 
    * Input: queue.add("item1", 3). 
    * Expected Output: queue.store = {3: ["item1"]}. 
    * Purpose: This test is designed to check if the add() function is correctly adding elements to the queue and associating them with the correct priority.

Test 2: Popping an item from the queue. 
    * Input: queue.add("item1", 3); queue.add("item2", 2); queue.pop(). 
    * Expected Output: "item1". 
    * Purpose: This test is designed to check if the pop() function correctly retrieves and removes the oldest-added item with the highest priority from the queue.

Test 3: Changing priority of an item. 
    * Input: queue.add("item1", 3); queue.add("item2", 2); queue.changePriority("item1", 1). 
    * Expected Output: queue.store = {2: ["item2"], 1: ["item1"]}. 
    * Purpose: This test is designed to check if the changePriority() function correctly changes the priority of an item in the queue.

Test 4: Length of the queue. 
    * Input: queue.add("item1", 3); queue.add("item2", 2); queue.length(). 
    * Expected Output: 2. 
    * Purpose: This test is designed to check if the length() function correctly returns the number of items in the queue.  
Test 5: Getting all priorities. 
    * Input: queue.add("item1", 3); queue.add("item2", 2); queue.get_all_priorities(). 
    * Expected Output: [2, 3]. 
    * Purpose: This test is designed to check if the get_all_priorities() function correctly returns an array of all priorities in the queue.

Above tests can be found in PriorityQueue.test.js class This code uses Mocha to test each function of the PriorityQueue class. The assert library is used to check if the expected output matches the actual output.
