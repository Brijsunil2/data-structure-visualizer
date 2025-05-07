export const dataStructures = [
  {
    name: "Linked List",
    description:
      "A linked list is a linear data structure where each element is a separate object, and each element (node) contains a reference (link) to the next node in the sequence.",
    timeComplexity: {
      access: "O(n)",
      search: "O(n)",
      insertion: "O(1)",
      deletion: "O(1)",
    },
    spaceComplexity: "O(n)",
    functions: [
      {
        name: "append",
        description: "Adds a new node at the end of the linked list.",
        timeComplexity: "O(1)",
        spaceComplexity: "O(1)",
      },
      {
        name: "prepend",
        description: "Adds a new node at the beginning of the linked list.",
        timeComplexity: "O(1)",
        spaceComplexity: "O(1)",
      },
      {
        name: "remove",
        description: "Removes a node from the linked list.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
      },
      {
        name: "get",
        description: "Retrieves a node from the linked list by index.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
      },
    ],
  },
];
