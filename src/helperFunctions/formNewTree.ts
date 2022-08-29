'use strict'

import { iTree } from '../utilities/interfaces'

export default function formNewTree (treeParts: iTree[]): void {
  for (let i = treeParts.length - 2; i >= 0; i--) {
    treeParts[i].children.push(treeParts[i + 1])
  }
};
