class Node{
    constructor(value){
        this.value = value;
       this.left = null;
       this.right = null;
    }
}
   
   class BST{
       constructor(value){
            this.root = new Node(value);
           this.count = 1
       }
     
      size(){
          return this.count;
      }
     
     insert(value){
       this.count++
       
       let newNode = new Node(value);
       
       const searchTree = node => {
         if(value < node.value){
             if(!node.left){
               node.left = newNode
           }
           else{
               searchTree(node.left);
           }
         }
         else if(value > node.value){
         if(!node.right){
               node.right = newNode
           }
           else{
               searchTree(node.right);
           }
         }
       }

       searchTree(this.root);
       
     }
     
     min(){
      let currentNode = this.root;
       while(currentNode.left){
           currentNode = currentNode.left
       }
       return currentNode.value;
     }
     
     
     max(){
      let currentNode = this.root;
       while(currentNode.right){
           currentNode = currentNode.right
       }
       return currentNode.value;
     }
     
     contains(value){
         let currentNode = this.root;
       
       while(currentNode){
         if(value === currentNode.value){
          return true;
         }
         if(value < currentNode.left){
            currentNode = currentNode.left
         }else{
            currentNode = currentNode.right
         }
       }
       return false
     }
     
     dfsInOrder(){
         let result = [];
     
       const traverse = node => {
           if(node.left) traverse(node.left);
           result.push(node.value)
             if(node.right) traverse(node.right)
       }
       traverse(this.root)
       
       return result
     }
   
    dfsPreOrder(){
         let result = [];
     
       const traverse = node => {
           result.push(node.value)
           if(node.left) traverse(node.left);
             if(node.right) traverse(node.right)
       }
       traverse(this.root)
       
       return result
     }
   
     dfsPostOrder(){
         let result = [];
     
       const traverse = node => {
           if(node.left) traverse(node.left);
             if(node.right) traverse(node.right);
             result.push(node.value)
       }
       traverse(this.root)
       return result
     }

     bfs(){
        let result = []
        let queue = []
        
        queue.push(this.root);
         
         while(queue.length){
             let currentNode = queue.shift()
             result.push(currentNode.value)
           
             if(currentNode.left){
               queue.push(currentNode.left)
             }
             if(currentNode.right){
               queue.push(currentNode.right)
             } 
         }
        
        return result;
       } 

     //print all ancestor of element
     printAncestor(target){
        let currentNode = this.root;
        const getAncestor = (node, target) => {
            if(!node) return false
            if(node.value == target) return true;
            if(getAncestor(node.left, target) || getAncestor(node.right, target)){
                console.log(node.value);
                return true;
             }
             return false
        }
        getAncestor(currentNode, target);
     }

     //lowese common ancestor of BST tree
     commonAncestorBST(n1, n2){
        let currentNode = this.root;
        const getCommonAncestor = (node, target) => {
            if(!node) return;
            var val = node.value;
            if(n1 < val && n2<val){
              return commonAncestor(node.left, n1, n2);
            }
            if(n1<val && n2<val){
              return commonAncestor(node.right, n1, n2);
           }
           console.log('lowest common ancestor value: ', val);
           return node;
        }
        return getCommonAncestor(currentNode, n1, n2);
     }

     //lowese common ancestor of binary tree
     commonAncestorBinaryTree(n1, n2){
        let currentNode = this.root;
        const getCommonAncestor = (node, target) => {
            if(!node) return;
            var val = node.value;
            if(n1 == val || n2 ==val){
              return node;
            }
            var left = commonAncestorBT(node.left, n1, n2);
            var right = commonAncestorBT(node.right, n1, n2);
            if(left && right){
              return node;
           }
           return (left) ? left : right;
        }
        return getCommonAncestor(currentNode, n1, n2);
     }

     //check tree is BST or NOT
     checkBST(){
        let currentNode = this.root;
        const checkTreeBST = (node) => {
            if(!node){
                return true; 
             }         
             if(node.left != null && node.left.value > node.value){ 
               return false;
             }
             if(node.right !=null && node.right.value < node.value) {
               return false;
             }
             if(!checkTreeBST(node.left) || !checkTreeBST(node.right)) {
               return false;
             }
             return true; 
        }
        return checkTreeBST(currentNode);
     }
   }
   


const bst = new BST(15);
bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);

bst.size();

bst.min();
bst.max();

bst.contains(2);
bst.contains(9);

bst.dfsInOrder();
bst.dfsPreOrder();
bst.dfsPostOrder();

bst.bfs();