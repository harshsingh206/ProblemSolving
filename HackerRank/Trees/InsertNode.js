"use strict";

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insertNumberNode(data, left = null, right = null) {
    let Node = {
      data,
      left,
      right
    };

    let currentNumberNode;

    if (!this.root) {
      this.root = Node;
    } else {
      currentNumberNode = this.root;
      while (currentNumberNode) {
        if (data < currentNumberNode.data) {
          if (!currentNumberNode.left) {
            currentNumberNode.left = Node;
            break;
          } else {
            currentNumberNode = currentNumberNode.left;
          }
        } else if (data > currentNumberNode.data) {
          if (!currentNumberNode.right) {
            currentNumberNode.right = Node;
            break;
          } else {
            currentNumberNode = currentNumberNode.right;
          }
        } else {
          console.log("Try Different Value");
          break;
        }
      }
    }
  }
}

let BSTtest = new BinarySearchTree();

BSTtest.insertNumberNode(10);

BSTtest.insertNumberNode(7);

BSTtest.insertNumberNode(14);

BSTtest.insertNumberNode(5);

BSTtest.insertNumberNode(13);

BSTtest.insertNumberNode(8);

BSTtest.insertNumberNode(18);

BSTtest.insertNumberNode(15);

BSTtest.insertNumberNode(6);

BSTtest;
