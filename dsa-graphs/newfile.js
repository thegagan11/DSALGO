class Node {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  class BinarySearchTree {
    constructor(root = null) {
      this.root = root;
    }
  
    insert(val) {
      let newNode = new Node(val);
      if (this.root === null) {
        this.root = newNode;
        return this;
      }
      let current = this.root;
      while (true) {
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        } else {
          return this;
        }
      }
    }
  
    insertRecursively(val) {
      const insertAt = (node, val) => {
        if (node === null) {
          return new Node(val);
        }
        if (val < node.val) {
          node.left = insertAt(node.left, val);
        } else if (val > node.val) {
          node.right = insertAt(node.right, val);
        }
        return node;
      };
      if (this.root === null) {
        this.root = new Node(val);
        return this;
      }
      insertAt(this.root, val);
      return this;
    }
  
    find(val) {
      let current = this.root;
      while (current !== null) {
        if (val === current.val) {
          return current;
        } else if (val < current.val) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      return undefined;
    }
  
    findRecursively(val) {
      const findIn = (node, val) => {
        if (node === null) {
          return undefined;
        }
        if (val === node.val) {
          return node;
        } else if (val < node.val) {
          return findIn(node.left, val);
        } else {
          return findIn(node.right, val);
        }
      };
      return findIn(this.root, val);
    }
  
    dfsPreOrder() {
      let result = [];
      const traverse = (node) => {
        if (node !== null) {
          result.push(node.val);
          traverse(node.left);
          traverse(node.right);
        }
      };
      traverse(this.root);
      return result;
    }
  
    dfsInOrder() {
      let result = [];
      const traverse = (node) => {
        if (node !== null) {
          traverse(node.left);
          result.push(node.val);
          traverse(node.right);
        }
      };
      traverse(this.root);
      return result;
    }
  
    dfsPostOrder() {
      let result = [];
      const traverse = (node) => {
        if (node !== null) {
          traverse(node.left);
          traverse(node.right);
          result.push(node.val);
        }
      };
      traverse(this.root);
      return result;
    }
  
    bfs() {
      let result = [];
      let queue = [this.root];
      while (queue.length) {
        let currentNode = queue.shift();
        result.push(currentNode.val);
        if (currentNode.left) {
          queue.push(currentNode.left);
        }
        if (currentNode.right) {
          queue.push(currentNode.right);
        }
      }
      return result;
    }
  
    remove(val) {
      let parent = null;
      let current = this.root;
      while (current !== null && current.val !== val) {
        parent = current;
        if (val < current.val) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      if (current === null) {
        return false;
      }
      if (current.left === null && current.right === null) {
        if (current !== this.root) {
          if (parent.left === current) {
            parent.left = null;
          } else {
            parent.right = null;
          }
        } else {
          this.root = null;
        }
      } else if (current.left === null || current.right === null) {
        let child = current.left !== null ? current.left : current.right;
        if (current !== this.root) {
          if (current === parent.left) {
            parent.left = child;
          } else {
            parent.right = child;
          }
        } else {
          this.root = child;
        }
      } else {
        let successor = this.getMinimumNode(current.right);
        let successorVal = successor.val;
        this.remove(successorVal);
        current.val = successorVal;
      }
      return true;
    }
  
    getMinimumNode(node) {
      while (node.left !== null) {
        node = node.left;
      }
      return node;
    }
  
    isBalanced() {
      const getHeight = (node) => {
        if (node === null) {
          return -1;
        }
        let leftHeight = getHeight(node.left);
        let rightHeight = getHeight(node.right);
        if (leftHeight === -2 || rightHeight === -2 || Math.abs(leftHeight - rightHeight) > 1) {
          return -2;
        }
        return Math.max(leftHeight, rightHeight) + 1;
      };
      return getHeight(this.root) !== -2;
    }
  
    findSecondHighest() {
      if (!this.root || (!this.root.left && !this.root.right)) {
        return "The tree does not have a second highest value.";
      }
      let current = this.root;
      let parent = null;
      while (current.right) {
        parent = current;
        current = current.right;
      }
      if (current.left) {
        current = current.left;
        while (current.right) {
          current = current.right;
        }
        return current.val;
      }
      return parent.val;
    }
  }
  
  module.exports = BinarySearchTree;