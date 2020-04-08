Parse.serverURL = 'https://parseapi.back4app.com';
Parse.initialize('VtH137ysq3yyLOqa014TxxlIAVGwEbd9PvOYuTSD', 'pcGAl1MYs6UOiRESbDkIpyl9evmaAkKEL8IM8hko', '3OVHmZwktkpL4NANQ8728JIUnMMZfF49o8JwwiM6');

const Car_Model_List = Parse.Object.extend('Car_Model_List');
const myNewObject = new Car_Model_List();

myNewObject.set('Make', 'A string');
myNewObject.set('Year', 1);
myNewObject.set('Model', 'A string');
myNewObject.set('Category', 'A string');

myNewObject.save().then(
  (result) => {
    if (typeof document !== 'undefined') document.write(`Car_Model_List created: ${JSON.stringify(result)}`);
    console.log('Car_Model_List created', result);
  },
  (error) => {
    if (typeof document !== 'undefined') document.write(`Error while creating Car_Model_List: ${JSON.stringify(error)}`);
    console.error('Error while creating Car_Model_List: ', error);
  }
);
;