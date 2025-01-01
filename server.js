const express = require('express');
const multer = require('multer');
const path = require('path');
const NeDB = require('nedb');

const app = express();
const port = 3000;

// 配置 NeDB
const db = new NeDB({
    filename: 'cards.db',
    autoload: true,
});

// 配置 multer 上傳文件的存儲目錄和檔名
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // 上傳目錄
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // 獨一無二檔名
    },
});
const upload = multer({ storage });

// 靜態文件服務
app.use(express.static('FW_main_website'));
app.use('/uploads', express.static('uploads'));

// JSON 解析中間件
app.use(express.json());

// 提供首頁
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'FW_main_website', 'finalweb.html'));
});

// 處理文件上傳與表單數據
app.post('/api/upload', upload.single('file'), (req, res) => {
    const { title, description } = req.body;
    const imageUrl = `/uploads/${req.file.filename}`; // 儲存圖片路徑

    const newCard = { title, description, imageUrl };

    // 將卡片資料保存到 NeDB
    db.insert(newCard, (err, newDoc) => {
        if (err) {
            return res.status(500).send('新增卡片失敗');
        }
        res.status(201).json(newDoc); // 回傳新增的卡片資料
    });
});
app.get('/api/cards', (req, res) => {
    db.find({}, (err, cards) => {
        if (err) {
            return res.status(500).send('資料讀取錯誤');
        }
        res.json(cards); // 返回卡片資料
    });
});


// 啟動伺服器
app.listen(port, () => {
    console.log(`伺服器運行中，請訪問：http://localhost:${port}`);
});
