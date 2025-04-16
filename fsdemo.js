//import fs from 'fs';
import fs from 'fs/promises';

// //readFile() - callback (asynchronous version)
// fs.readFile('./test.txt', 'utf-8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });

// //readFileSync() - Synchronous version
// const data = fs.readFileSync('./test.txt', 'utf-8');
// console.log(data);

//readFile() - Promise .then()
// fs.readFile('./test.txt', 'utf-8')
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

//readFile() - async/await
const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf-8');
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

// writeFile()
const writeFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'test write file');
        console.log('Written to file...');
    } catch (error) {
        console.log(error);
    }
};

// appendFile()
const appendFile = async () => {
    try {
        await fs.appendFile('./test.txt', '\nappended to file ok');
        console.log('Appended to file...');
    } catch (error) {
        console.log(error);
    }
};


writeFile();
appendFile();
readFile();