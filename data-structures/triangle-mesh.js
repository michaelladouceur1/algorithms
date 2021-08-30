class TriangleMesh {
  constructor() {
    this.nodes = new Map();
    this.edges = new Map();
    this.triangles = new Map();
  }

  addNode(x, y, z) {
    const index = this.nodes.size + 1;
    this.nodes.set(index, [x, y, z]);
    this._generateTriangles();
  }

  _generateTriangles() {
    if (this.nodes.size > 3) {
      const nodeKeys = Array.from(this.nodes.keys());
      this._choose(nodeKeys, 3).forEach((tri, idx) =>
        this.triangles.set(idx, tri)
      );
    }
  }

  _choose(arr, k, prefix = []) {
    if (k == 0) return [prefix];
    return arr.flatMap((v, i) =>
      this._choose(arr.slice(i + 1), k - 1, [...prefix, v])
    );
  }

  _addTriangle(n1, n2, n3) {
    const index = this.triangles.size + 1;
    this.triangles.set(index, [n1, n2, n3]);
  }

  printNodes() {
    console.log(this.nodes);
  }
}

const mesh = new TriangleMesh();

// mesh.addNode(0, 0, 0);
// mesh.addNode(1, 0, 0);
// mesh.addNode(0, 1, 0);
// mesh.addNode(0, 0, 1);
// mesh.addNode(-1, 0, 0);
// mesh.addNode(0, 1, 1);
// mesh.addNode(0, 1, 1);
// mesh.addNode(1, 1, 1);
// mesh.addNode(-1, 1, 1);
mesh.addNode(0, 0, 0);
mesh.addNode(1, 0, 0);
mesh.addNode(-1, 0, 0);
mesh.addNode(1, 1, 0);
mesh.addNode(-1, 1, 0);
mesh.addNode(0, 1, 0);
mesh.printNodes();
console.log(mesh.triangles);
console.log(mesh.triangles.size);
