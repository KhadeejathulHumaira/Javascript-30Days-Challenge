const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];

  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];


    // Array.prototype.filter()
    // The  filter will return elements which passes the test or the function which we provide
    // Note: This filter function will not change the elements inside the array.
    // 1. Filter the list of inventors for those who were born in the 1500's
    
    let new_val=inventors.filter(inventor=> inventor.year>=1500 && inventor.year<1600?true:false)
    console.table(new_val)// will display in table format.
    
    //Another Way 
     let new1_val=inventors.filter(inventor=> inventor.year>=1500 && inventor.year<1600)
    console.table(new1_val)





    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names
    // Map will return array that has the new modified value
    // This will note change the original array . 
    //Note : Will return the same length of array
    const full=inventors.map(inventor=>inventor.first+" "+inventor.last)
    console.log(full)
 

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    // Gets two items and check which is greater then returns either 1 or -1 
    // this will overwrite the elements in array.
    //lastOne then comes firstOne
    const ordered=inventors.sort((a,b)=>a.year>b.year?1:-1)//ascending order
    console.table(ordered)


     // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?
    // The reduce() method does not change the original array.
    //This will return functions accumulated value.
    //array.reduce(function(total,currValue,currIndex,arr),initializer)
    // The initial value of thr total is set using this.
    //total=sum,inventor=currValue,0=initial  val of total
    const totalYears=inventors.reduce((total,inventor)=>total+=(inventor.passed-inventor.year),0)
    console.log(totalYears)

    // 5. Sort the inventors by years lived
    const oldest=inventors.sort((a,b)=>{
      const a_lifeTime=a.passed-a.year
      const b_lifeTime=b.passed-b.year
      return a_lifeTime>b_lifeTime?-1:1   //descending order
    })
    console.table(oldest)

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    //This is done on the console.log of the above website link
    const category=document.querySelector('.mw-category')
    const links=Array.from(category.querySelectorAll('a'))//convert it to array
    const de=links.map(link=>link.textContent).filter(link=>link.includes('de'))

    // 7. sort Exercise
    // Sort the people alphabetically by last name
    const alpha=people.sort((Last,Next)=>{
      const [aFirst,aLast]=Last.split(', ')
      const [bFirst,bLast]=Next.split(', ')
      return aLast>bLast?1:-1
    })
    console.log(alpha)


    // 8. Reduce Exercise
    // Sum up the instances of each of these
    //the initial value is empty object
    const transport=data.reduce((obj,item)=>{
      if(!obj[item]){
        obj[item]=1
      }
      obj[item]++;
      return obj;
    },{})
    console.log(transport)