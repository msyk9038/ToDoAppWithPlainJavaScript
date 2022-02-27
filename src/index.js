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

  //子要素の設定
  li.appendChild(div);
  div.appendChild(p);

  //タスクリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("addButton")
  .addEventListener("click", () => onClickAdd());
