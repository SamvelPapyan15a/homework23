/*
1. Գրել ծրագիր որ թույլ կտա վերբեռնել ֆայլ և պահպանել Homework պապկայի upload պապակայում ՝ պահպանելիս ընտրել պատահական 6-անիշ թվերից կազմված անուն:

2. Ունենք users.json ֆայլ , այն սկզբում պարունակում է դատարկ օբյեկտ․ Ոնենալ users route որի վրա կարելի է կատարել get և post request : post -ի body-ն պարունակելու է username, name, image դաշտերը։
Post անելուց հետո users.json-ի պաունակությունը կարդալ ամբողյությամբ , հետո այդ json-ի մեջ ավելացնել username key-ով օբյեկ , որի մեջ կա username, name և image (image-ը save արած image-ի path-ն է, multer-ի միջոցով save անել) , հետո
փոխել json-ի պարունակությունը և գրել users.json-ի մեջ։ Նախքան ավելացնելը ստուգել եթե այս username-ով արդեն կա օբյեկ json ֆայլի մեջ , ապա վերադարձնել res.json()-ի մեջ {success: false, data: null, message: 'username is taken'}}, հակարակ դեպքում
վերադարձնել success-ը true , data-ն ավելացված օբյետը , իսկ message-ը "user created" :
Ոնենալ դինամիկ route 'users/:username' , որի վրա կարելի է կատարել get , delete մեթոդով request : get-ի դեպքում վերադարձնում է համապատասխան user-ի data-ն users.json ֆայլից ։
delete-ի դեպքում ջնջում է user-ի data-ն users.json ֆայլից ։
*/

const express = require('express');
const http = require('http');
const app = express();

const router = require('./router');

router(app);

app.listen(3000,(req,res)=>{
    console.log("localhost:3000");
});