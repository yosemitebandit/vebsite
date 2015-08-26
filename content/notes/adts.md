+++
date = "2015-08-12T12:11:05-07:00"
description = "binary trees, red-black trees and other data structures"
menu = ""
tags = ["reading", "cs"]
title = "adts"

+++


some notes on abstract data types
compiled from [Think CS](http://www.openbookproject.net/thinkcs/python/english2e/)
and [this blog](http://alextrle.blogspot.com/2011/05/write-linked-list-in-python.html)


### asides on the "why" of certain python practices
* new style classes should be used in python 2
so that static and class methods can be defined,
so that `type` works correctly
and for [other reasons](https://docs.python.org/release/2.2.3/whatsnew/sect-rellinks.html).
* the `if __name__ == '__main__'` guard works
because when the python interpreter runs a module
it will set the `__name__` variable.
If the module is just imported, `__name__` will be set to the module's name.


### linked lists
* LLs are either the empty list or a node that contains some value and a reference to a linked list
* you can reference an entire collection just by the root node
* my [python implementation](https://gist.github.com/yosemitebandit/ecc007634641de5b5f43)


### stacks
* very simple with python lists since there are already `pop` and `append` methods
* [my implementation](https://gist.github.com/yosemitebandit/1c874b8b154d76418974) in python


### fifo queues
* for add/remove operations to be constant time,
you need to track both the head node and the tail node
* [my implementation](https://gist.github.com/yosemitebandit/a585a301d24a73d0deb3) in python
from the Think CS example


### binary search trees
* each node in the tree may have a max of two subtrees
* all values in the "left" subtree are less than the value of the node itself
* whereas all values in the "right" subtree are greater than the node's value
* each node's value must be unique
* search, insertion and removal can all be ~`log(n)` operations if the tree is balanced
(and not just a linked list)
* much like the other structures above, the implementation is all about recursion,
[here's mine in python](https://gist.github.com/yosemitebandit/66d30bc11193bd52f70d),
based loosely on [this post](http://www.laurentluce.com/posts/binary-search-tree-library-in-python/)
and this diagram:

![binary tree](/img/binary-tree.png)


### binary heaps
* these are complete binary trees that satisfy a heap-ordering property, either:
the value of each node is greater than or equal to the value of its parent (min-heap)
or each node is less than or equal its parent (max-heap)
* ("complete" in that every level, except possibly the last, is completely filled
and all nodes in the last level are as far to the left as possible)
* think of it like a priority queue -- in a min heap the "highest" priority element is at the root
(er, for some def of highest)
* suppose you had data streaming in, like in a scheduler, and you wanted fast inserts,
but you also want to be able to easily (`O(1)` in fact) retrieve the smallest item
* heaps are partially ordered (at a given level, there is no particular relationship between sibling nodes)
* the neat thing about heaps is that they can be represented as an array,
they don't need a linked list like an ordinary binary tree:
for the `kth` element of the array, the left child is at `2k`,
the right child is at `2k+1` and the parent is at `k/2`
* in the OS world, the heap is just any memory not on the stack
(and the stack is the organized chunk of memory where functions, parameters and return values
get passed around)

![min heap](/img/min-heap.png)
