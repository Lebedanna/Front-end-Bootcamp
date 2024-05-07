const fs = require("fs")
const path = require('path')

const readingPath = path.resolve(__dirname, 'files/fsSimple/file1.txt')
const writingPath = path.resolve(__dirname, 'files/fsSimple/file2.txt')

const readAndWriteCallbackHell = () => {
    fs.readFile(readingPath, 'utf8', (err, data) => {
        if (err) {
            console.error('*CallbackHell* Error reading the file:', err);
            return;
        }
        console.log('*CallbackHell* File contains:', data);

        fs.writeFile(writingPath, data, 'utf8', (err) => {
            if (err) {
                console.error('*CallbackHell* Error writing the file:', err);
                return;
            }
            console.log('*CallbackHell* File updated successfully');
        });
    });
};

const readAndWritePromises = () => {
    const readingPromise = new Promise((resolve, reject) => {
        fs.readFile(readingPath, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                console.log('*Promise* File contains:', data);
                resolve(data)
            }
        })
    })

    readingPromise
        .then((data) => {
            return new Promise((resolve, reject) => {
                fs.writeFile(writingPath, data, 'utf8', (err => {
                        if (err) {
                            console.error('*Promise* Error writing the file:', err);
                            reject(err)
                        } else {
                            resolve('*Promise* File updated successfully')
                        }
                    }
                ))
            })

        })
        .then((message) => {
            console.log(message)
        })
        .catch((err) => {
            console.error('*Promise* ', err)
        })
};

const readAndWriteAsyncAwait = async () => {
    try {
        const data = await fs.promises.readFile(readingPath, 'utf8');
        console.log('*AsyncAwait* File contains:', data);
        await fs.promises.writeFile(writingPath, data, 'utf8');
        console.log('*AsyncAwait* File updated successfully')
    } catch (err) {
        console.error('*AsyncAwait* Error:', err);
    }
};
readAndWriteCallbackHell()
readAndWritePromises()
readAndWriteAsyncAwait()