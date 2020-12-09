// モーダル要素の取得
const modal = document.getElementById('easyModal');

// 開くボタン取得
const open = document.getElementById('modalOpen');

// 閉じるボタン取得
const close = document.getElementById('modalClose');

// モーダルオープンの関数
function modalOpen() {
    modal.style.display = "block";
}

// クリックで開くイベントリスナー
open.addEventListener('click', modalOpen);

// モーダルを閉じる関数
function modalClose() {
    modal.style.display = "none";
}
// クリックで閉じるイベントリスナー
close.addEventListener('click', modalClose);

// モーダル以外がクリックされた時に閉じる関数 ifを使う
function anotherClose() {
    if (
        modal.style.display === "block"|| modal.style.display === "none"
    ){
        modal.style.display = "none";
    }else{
        modal.style.display = "block";
    }
}
console.log(anotherClose);
// モーダル以外の場所クリックのイベントリスナー
modal.addEventListener('click', anotherClose);

// // HTMLのmodalCloseをclass属性からid属性に変えちゃった