export class CoreNode {
  constructor(item, selectedFn) {
    this.isExpanded = false;
    this.isLoading = false;
    this.childIDs = [];

    this.item = item;

    if (selectedFn) {
      this.selectedFn = selectedFn;
    }
  }

  get name() {
    return this.item ? this.item.name : "";
  }

  get hasChildren() {
    return this.childIDs.length !== 0;
  }

  set loading(value) {
    return (this.isLoading = value);
  }

  updateItem(item) {
    this.item = item;
  }

  addChild(id) {
    if (this.childIDs.indexOf(id) === -1) {
      this.childIDs.push(id);
    }
  }

  select() {
    this.isExpanded = true;
    this.selected();
  }

  toggleExpanded() {
    this.isExpanded = !this.isExpanded;
    this.selected();
  }

  selected() {
    if (this.isExpanded && this.selectedFn) {
      this.selectedFn(this.item.id);
    }
  }
}

export class CoreTree {
  constructor(selectedFn) {
    this.rootIDs = [];
    this.nodes = {};
    this.selectedFn = selectedFn;
  }

  update(items) {
    for (let item of items) {
      if (item.parentID) {
        if (!this.nodes[item.parentID]) {
          this.nodes[item.parentID] = new CoreNode(undefined, this.selectedFn);
        }

        this.nodes[item.parentID].addChild(item.id);
      } else {
        if (this.rootIDs.indexOf(item.id) === -1) {
          this.rootIDs.push(item.id);
        }
      }

      if (this.nodes[item.id]) {
        this.nodes[item.id].updateItem(item);
      } else {
        this.nodes[item.id] = new CoreNode(item, this.selectedFn);
      }
    }
  }
}
