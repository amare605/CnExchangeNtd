//使用者輸入人民幣金額
var CNY = window.prompt("請輸入人民幣金額");

//輸入條檢檢查須為數字，沒有就顯示紅字(not done)

//計算公式，再無條件進位到十位數
var NTD = Math.ceil(((CNY * 1.03 * 5 + 30) * 1.06 *2) / 10) * 10;


//顯示計算出來的結果，獨立一個欄位顯示在網頁上)
document.write(NTD); 
