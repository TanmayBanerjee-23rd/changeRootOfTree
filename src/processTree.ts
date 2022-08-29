'use strict'

import findNewRoot from './helperFunctions/findNewRoot'
import formNewTree from './helperFunctions/formNewTree'
import { iTree } from './utilities/interfaces'

export default function formTreeForNewRoot (tree: iTree, newRoot: string): iTree | string {
  // If the provided new root is same as the existing root
  // then we will return the same tree without further execution.
  if (tree.root === newRoot) return tree

  // tree formation failure message.
  const treeReformationFailureMsg = 'Provided new root is not a part of the Tree, hence no new tree was formed!'

  // we are checking for children at first level of tree.
  // If no children are found then we will return our failure message.
  if (tree.children.length === 0) return treeReformationFailureMsg

  // container to contain parts of the tree as sub tree at different indexes.
  const treeParts = []

  findNewRoot(tree, newRoot, treeParts)

  // treeParts will be storing the sub tree with newRoot as it's root at index 0.
  const subTreeHavingNewRoot = treeParts[0]

  // if newRoot is not a part of the given tree
  // then we will return tree reformation failure message.
  if (subTreeHavingNewRoot === undefined) return treeReformationFailureMsg

  // we will push each tree part as a child to the tree part at it's previous index.
  formNewTree(treeParts)

  // tree part at index 0 will be reformed tree with root equal to newRoot with reformed child structure.
  return treeParts[0]
};
