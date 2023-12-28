const nodemailer = require('nodemailer');

// Создание объекта транспортера для отправки почты
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your_email@gmail.com',
        pass: 'your_password'
    }
});

// Настройка письма
let mailOptions = {
    from: 'your_email@gmail.com',
    to: 'recipient@example.com',
    subject: 'Тема письма',
    text: 'Текст письма'
};

// Отправка письма
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email отправлен: ' + info.response);
    }
});
