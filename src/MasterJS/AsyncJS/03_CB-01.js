/*
  透過 Callback 函數來取得非同步資料 (交辦的事情完成之後才得到的資料)
  1. 先定義一個函數 cbf，cbf的參數是非同步工作完成後取得的資料
  2. 資料取得之後，會將資料帶入 cbf函數中，呼叫該cbf處理
*/

console.log("before");

const id = 1;
console.log("id: ", id);

const getUser = (id, cbf) => {
  setTimeout(() => {
    console.log(`Get user data of id:${id} from db`);
    cbf({ id: id, name: "John Doe" });
    console.log("after");
  }, 2000);
};

const cbFn1 = (user) => {
  console.log("user: ", user);
};

// async 交辦
getUser(id, cbFn1);

console.log("after");
