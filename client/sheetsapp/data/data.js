const user1 = {
    createdOn: new Date(),
    firstName: 'Test',
    lastName: 'User',
    email: 'test@gmail.com',
    password: 'Testing123',
    age: 24,
    userName: 'testUser',
    gender: 'Male',
    isOnline: true
  };
  
  const cell1 = {
    rowPosition: 0,
    columnPosition: 0,
    textData: '',
    lastUpdatedDate: new Date(),
    lastUpdatedUser: user1
  };
  
  const cell2 = {
    rowPosition: 0,
    columnPosition: 1,
    textData: '',
    lastUpdatedDate: new Date(),
    lastUpdatedUser: user1
  };
  
  const cell3 = {
    rowPosition: 1,
    columnPosition: 0,
    textData: '',
    lastUpdatedDate: new Date(),
    lastUpdatedUser: user1
  };
  
  const cell4 = {
    rowPosition: 1,
    columnPosition: 1,
    textData: '',
    lastUpdatedDate: new Date(),
    lastUpdatedUser: user1
  };
  
  const sheet1 = {
    sheetName: 'TestSheet',
    createdBy: user1,
    sheetAccess: 'private',
    collaborator: user1,
    noOfRows: 2,
    noOfColumns: 2,
    grid: [
      [cell1, cell2],
      [cell3, cell4]
    ]
  };
  
module.export({user1,sheet1})