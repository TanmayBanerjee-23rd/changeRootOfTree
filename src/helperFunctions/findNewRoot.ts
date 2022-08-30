'use strict'

import { iTree } from '../utilities/interfaces'

export default function findNewRoot (subTree: iTree, newRoot: string, treeParts: iTree[]): void {
  if (subTree.root === newRoot) {
    treeParts.push(subTree)
  }

  // if we don't have the subtree with newRoot found
  // only then check for it's children nodes for newRoot.
  if (treeParts[0] === undefined) {
    for (let i = 0; i < subTree.children.length; i++) {
      const childTree: iTree = {
        ...subTree,
        children: subTree.children.filter(child => child.root !== subTree.children[i].root)
      }

      // call itself to find the subTree with newRoot within the child object.
      findNewRoot(subTree.children[i], newRoot, treeParts)

      // once the sub tree with root equal to newRoot is found
      // push the reformed childTree as a tree part and break from the loop
      if (treeParts[0] !== undefined) {
        treeParts.push(childTree)
        break
      }
    }
  }
};
