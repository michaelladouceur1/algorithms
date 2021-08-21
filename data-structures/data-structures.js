class TriangleMesh {
  constructor() {
    this.nodes = new Map();
    this.edges = new Map();
    this.triangles = new Map();
  }

  addNode(x, y, z) {
    const index = this.nodes.size + 1;
    this.nodes.set(index, [x, y, z]);
    // this._checkTriangles()
  }

  _checkTriangles() {
    if (this.nodes.size > 3) {
      const triVals = Array.from(this.triangles.values());
      const triValsPower = triVals.map((tri) => {
        return Math.pow(tri[0] * tri[1], tri[2]);
      });
      console.log(triValsPower);
    }
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

mesh.addNode(0, 0, 0);
mesh.addNode(1, 0, 0);
mesh.addNode(0, 1, 0);
mesh.addNode(0, 0, 1);
mesh._addTriangle(1, 2, 3);
mesh._addTriangle(1, 2, 4);
mesh.printNodes();
mesh._checkTriangles();
