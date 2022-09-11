const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
  //.some() this will check atleast one element meets the condition
  // method checks if any array elements pass a test 
  //This will not change the original array elements
  // returns true or false

  const isAdult=people.some(person=>{
    const curYear=(new Date()).getFullYear()
    return (curYear-person.year)>=19;
  })
  console.log({isAdult})


   // Array.prototype.every() // is everyone 19 or older?
   // checks whether all the elements meets the condition
   // returns true or false
   const isEvery=people.every(person=>{
    const curYear=(new Date()).getFullYear()
    return (curYear-person.year)>=19;
  })
  console.log({isEvery})


  // Array.prototype.find()
  //Finds the first element that meet the condition and returns it.
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423
  const findPpl=comments.find(comment=>{
    return comment.id==823423
  })
  console.log({findPpl})

  // Array.prototype.findIndex()
  //to find the index of an element 
  // Find the comment with this ID
  const findIndex=comments.findIndex(comment=>{
    return comment.id ===  123523 
  })
  console.log({findIndex})

  //to delete this value 
  comments.splice(findIndex,1)
  console.table(comments)