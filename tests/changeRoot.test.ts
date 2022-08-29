import formTreeForNewRoot from '../src/processTree'
import { iTree } from '../src/utilities/interfaces'

const tree = {
  root: 'A',
  children: [
    {
      root: 'B',
      children: [

      ]
    },
    {
      root: 'C',
      children: [
        {
          root: 'D',
          children: [
            {
              root: 'E',
              children: []
            }
          ]
        },
        {
          root: 'F',
          children: [
            {
              root: 'G',
              children: []
            }
          ]
        }
      ]
    }
  ]
}

describe('Positive cases :: ', () => {
  it('should return expected reformed tree with newRoot as D.', () => {
    const reformedTree: iTree = formTreeForNewRoot(tree, 'D') as iTree

    expect(reformedTree).not.toBeNull()
    expect(reformedTree.root).toEqual("D")
  })

  it('should return the existing tree with root already being A.', () => {
    const reformedTree: iTree = formTreeForNewRoot(tree, 'A') as iTree

    expect(reformedTree).not.toBeNull()
    expect(reformedTree.root).toEqual("A")
  })

})

describe('Negative cases :: ', () => {
    it('on failing to find the node having the newRoot within the tree.', () => {
      const errorMessage: string = formTreeForNewRoot(tree, 'I') as string
  
      expect(errorMessage).not.toBeNull()
      expect(errorMessage).toEqual("Provided new root is not a part of the Tree, hence no new tree was formed!")
    })

    it('on failing to find the node in an empty tree.', () => {
        const errorMessage: string = formTreeForNewRoot({
            root: '',
            children: []
        }, 'I') as string
    
        expect(errorMessage).not.toBeNull()
        expect(errorMessage).toEqual("Provided new root is not a part of the Tree, hence no new tree was formed!")
    })
  })
