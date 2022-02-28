import "./styles.css";

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

const onDoneClick = (target) => {
  onDeleteClick(target);
  const text = target.firstElementChild.firstElementChild.innerText;
  //p 生成
  const p = document.createElement("p");
  p.innerText = text;
  //back button 生成
  const backButton = document.createElement("button");
  backButton.innerText = "back";
  backButton.addEventListener("click", () => {
    alert("test");
  });
  target.firstElementChild.innerHTML = "";
  target.firstElementChild.appendChild(p);
  target.firstElementChild.appendChild(backButton);
  document.getElementById("complete-list").appendChild(target);
};

const onDeleteClick = (target) => {
  target.remove();
};

const onEnterInInputArea = (e) => {
  if (e.keyCode === 13) {
    onClickAdd();
  }
  return false;
};

document
  .getElementById("addText")
  .addEventListener("keypress", (e) => onEnterInInputArea(e));

document
  .getElementById("addButton")
  .addEventListener("click", () => onClickAdd());
