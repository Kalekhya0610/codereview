const assert = require('assert');
const PriorityQueue = require('./PriorityQueue');
const PriorityQueueTest = require('./PriorityQueue.test.js');

describe('PriorityQueue', function() {
  let queue;

  beforeEach(function() {
    queue = new PriorityQueue();
  });

  describe('#add', function() {
    it('should add an item to the queue', function() {
      queue.add("item1", 3);
      assert.equal(queue.count, 1);
    });
  });

  describe('#pop', function() {
    it('should return the oldest-added item with the highest priority', function() {
      queue.add("item1", 3);
      queue.add("item2", 2);
      assert.equal(queue.pop(), "item1");
    });
  });

  describe('#length', function() {
    it('should return the number of items in the queue', function() {
      queue.add("item1", 3);
      queue.add("item2", 2);
      assert.equal(queue.length(), 2);
    });
  });

  describe('#get_all_priorities', function() {
    it('should return an array of all the priority values', function() {
      queue.add("item1", 3);
      queue.add("item2", 2);
      assert.deepEqual(queue.get_all_priorities(), [2, 3]);
    });
  });

  describe('#forEach', function() {
    it('should iterate through all the queue elements in priority-then-FIFO order', function() {
      queue.add("item1", 3);
      queue.add("item2", 2);
      let result = [];
      queue.forEach((item) => {
        result.push(item);
      });
      assert.deepEqual(result, ['item1', 'item2']);
    });
  });

  describe('#changePriority', function() {
    it('should change the priority of an item in the queue', function() {
      queue.add("item1", 3);
      queue.add("item2", 2);
      queue.changePriority("item1", 1);
      assert.deepEqual(queue.get_all_priorities(), [1, 2]);
    });
  });
});