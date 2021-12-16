const express = require('express')
const api = require('./routers/route')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 8080

app.use(bodyParser.json())

//react로 빌드된 폴더를 연결
const root = require('path').join(__dirname, '..', '/', 'build');

app.use('/api',api)
// 정적 페이지를 로드
app.use(express.static(root));

app.get("*", (req,res)=>{
    res.sendFile('index.html', {root});
})

app.listen(port, () => {
    console.log(`express running on ${port}`)
})