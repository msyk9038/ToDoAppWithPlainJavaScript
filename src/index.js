import "./styles.css";

// タスク登録
const onClickAdd = () => {
  // テキストボックスの値を取得し，初期化する
  const inputText = document.getElementById("addText").value;
  document.getElementById("addText").value = "";
  // alert(inputText); // check input value

  //li 生成
  const li = document.createElement("li");

  //div 生成
  const div = document.createElement("div");
  div.className = "list-row";

  //p 生成
  const p = document.createElement("p");
  p.innerText = inputText;

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
    const target = deleteButton.parentNode.parentNode;
    onDeleteClick(target);
  });

  //子要素の設定
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //タスクリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

// 完了ボタン
const onDoneClick = (target) => {
  onDeleteClick(target);
  const text = target.firstElementChild.firstElementChild.innerText;
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
  target.firstElementChild.innerHTML = "";
  target.firstElementChild.appendChild(p);
  target.firstElementChild.appendChild(backButton);
  document.getElementById("complete-list").appendChild(target);
};

// 削除ボタン
const onDeleteClick = (target) => {
  target.remove();
};

// 戻すボタン
const onMoveBackClick = (target) => {
  onDeleteClick(target);
  const text = target.firstElementChild.firstElementChild.innerText;
  //p 生成
  const p = document.createElement("p");
  p.innerText = text;
  //done / deleteボタン 生成
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
    const target = deleteButton.parentNode.parentNode;
    onDeleteClick(target);
  });
  target.firstElementChild.innerHTML = "";
  target.firstElementChild.appendChild(p);
  target.firstElementChild.appendChild(completeButton);
  target.firstElementChild.appendChild(deleteButton);
  document.getElementById("incomplete-list").appendChild(target);
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
