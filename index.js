const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log("server Started ")
});

http://localhost:3000/createfile
app.get('/createFile', (req, res) => {
    const date = new Date();
    const filename = `${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}.txt`;
    const content = date.toString();

    fs.writeFile(`./files/${filename}`, content, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Failed to create file');
            return;
        }
        res.send('File created successfully');
    });
});

http://localhost:3000/getFiles
app.get('/getFiles', (req, res) => {
    fs.readdir('./files', (err, files) => {
        if (err) {
            console.error(err);
            res.status(500).send('Failed to read files');
            return;
        }
        res.send(files);
    });
});
