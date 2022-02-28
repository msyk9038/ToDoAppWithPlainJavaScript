import "./styles.css";

// タスク登録
const onClickAdd = () => {
  // テキストボックスの値を取得し，初期化する
  const text = document.getElementById("addText").value;
  document.getElementById("addText").value = "";
  //li 生成
  const li = document.createElement("li");
  //div 生成
  const div = document.createElement("div");
  div.className = "list-row";
  //li に div を子として設定
  li.appendChild(div);
  // div 内に タスクとボタンを生成
  createIncompleteItem(div, text);
  //タスクリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

// div 内にタスクとボタンを生成
const createIncompleteItem = (div, text) => {
  //p 生成
  const p = document.createElement("p");
  p.innerText = text;
  //done button生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "done";
  completeButton.addEventListener("click", () => {
    const target = completeButton.parentNode.parentNode;
    onDoneClick(target);
  });
  //delete button生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  deleteButton.addEventListener("click", () => {
    deleteButton.parentNode.parentNode.remove();
  });

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
};

// 完了ボタン
const onDoneClick = (li) => {
  li.remove();
  const text = li.firstElementChild.firstElementChild.innerText;
  //p 生成
  const p = document.createElement("p");
  p.innerText = text;
  //back button 生成
  const backButton = document.createElement("button");
  backButton.innerText = "move back";
  backButton.addEventListener("click", () => {
    const target = backButton.parentNode.parentNode;
    onMoveBackClick(target);
  });
  li.firstElementChild.innerHTML = "";
  li.firstElementChild.appendChild(p);
  li.firstElementChild.appendChild(backButton);
  document.getElementById("complete-list").appendChild(li);
};

// 戻すボタン
const onMoveBackClick = (li) => {
  li.remove();
  const div = li.firstElementChild;
  const text = div.firstElementChild.innerText;
  div.innerHTML = "";
  createIncompleteItem(div, text);
  document.getElementById("incomplete-list").appendChild(li);
};

// エンター押したらタスク登録
const onEnterInInputArea = (e) => {
  if (e.keyCode === 13) {
    onClickAdd();
  }
  return false;
};

// add task area でエンターしたらタスク登録
document
  .getElementById("addText")
  .addEventListener("keypress", (e) => onEnterInInputArea(e));

// add task area でボタン押したらタスク登録
document
  .getElementById("addButton")
  .addEventListener("click", () => onClickAdd());
