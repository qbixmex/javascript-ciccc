let familyTree = {
  name: 'John',
  children: [
    { name: 'Jim', children: [] },
    {
      name: 'Joe',
      children: [
        {
          name: 'Kyle',
          children: [
            {  name: 'Kyle Jr', children: [] }
          ]
        },
        { name: 'Sophia', children: [] },
      ],
    },
    
  ],
};

// const printChildrenNames = (family) => {
//   for (let i = 0; i < family.children.length; i++) {
//     for (let j = 0; j < family.children[i].length; j++) {
//       console.log(family.children[i].children[j].name);
//     }
//   }
// };

const printChildrenNames = (family) => {
  if (family.children.length == 0) {
    return;
  }
  for (let i = 0; i < family.children.length; i++) {
    console.log(family.children[i].name);
    printChildrenNames(family.children[i]);
  }
};

printChildrenNames(familyTree);
