class Nodes {
  constructor() {
    this.nodes = new Map();
  }

  addNode(x, y) {
    const index = this.nodes.size + 1;
    const node = new Node(index, x, y);
    this.nodes.set(index, node);
  }

  getNode(id) {
    return this.nodes.get(id);
  }
}

class Node {
  constructor(id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.extFX = 0;
    this.extFY = 0;
    this.beams = new Map();
  }

  addBeam(beam) {
    const index = this.nodes.size + 1;
    this.nodes.set(index, beam);
  }
}

// class Beam {
//   constructor(n1, n2) {
//     this.nodes = new Map();
//     this.addNode(n1);
//     this.addNode(n2);
//   }

//   addNode(node) {
//     if (this.nodes.size < 2) {
//       const index = this.nodes.size + 1;
//       this.nodes.set(index, node);
//     }
//   }
// }

const nodes = new Nodes();
nodes.addNode(0, 0);
nodes.addNode(1, 1);
nodes.addNode(2, 1);
nodes.addNode(3, 0);
console.log(nodes.nodes);
