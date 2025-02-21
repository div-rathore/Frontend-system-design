const sortingByAge = require('./app');

test('testing if the first user is Elon after sorting', () => { 
    const sortedData = sortingByAge();
    expect(sortedData[0].name).toBe('Elon');
 })

 test('testing the length of sorted object is 4', ()=>{
    const sortedData = sortingByAge()
    expect(sortedData).toHaveLength(4)
 })

 test('testing if the object is not undefined', ()=>{
    const sortedData = sortingByAge()
    expect(sortedData).not.toBeUndefined();
 })