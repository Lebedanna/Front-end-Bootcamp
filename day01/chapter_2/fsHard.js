const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'files/fsHard');

const calculateTotalSize = async (folderPath) => {
    const files = await fs.promises.readdir(folderPath);
    let totalSize = 0;
    for (const file of files) {
        const filePath = path.join(folderPath, file);
        const stats = await fs.promises.stat(filePath);
        totalSize += stats.size;
    }
    return totalSize;
};

const displayProgressBar = (currentSize, totalSize) => {
    const percentage = (currentSize / totalSize) * 100;
    const progressBar = '|'.repeat(Math.floor(percentage / 2)) ;
    process.stdout.write(`\rProgress: [${progressBar.padEnd(50)}] ${percentage.toFixed(2)}%`);
};

const progressbar = async () => {
    const files = await fs.promises.readdir(folderPath);
    const totalSize = await calculateTotalSize(folderPath);
    let currentSize = 0;

    console.log(`Total size to download: ${totalSize} bytes`);

    for (const file of files) {
        const filePath = path.join(folderPath, file);
        const stats = await fs.promises.stat(filePath);
        const fileSize = stats.size;

        await new Promise((resolve) => {
            setTimeout(() => {
                currentSize += fileSize;
                displayProgressBar(currentSize, totalSize);

                if (currentSize === totalSize) {
                    console.log('\nDone!\n');
                }

                resolve();
            }, Math.random().toFixed(2) * 1000 + 1000);
        });
    }
}

progressbar();