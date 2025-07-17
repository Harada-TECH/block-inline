document.addEventListener("DOMContentLoaded", function () {
  // ページ内のすべてのimg要素を対象
  document.querySelectorAll("img").forEach(function (img) {
    // ラッパー要素を作成
    const wrapper = document.createElement("i");
    wrapper.classList.add("img-wrapper-js");

    // ラベルを作成
    const label = document.createElement("i");
    label.classList.add("tag-label");
    label.textContent = "<img>";

    // imgを包んでラベルを追加
    img.parentNode.insertBefore(wrapper, img); // wrapperをimgの前に挿入
    wrapper.appendChild(label);
    wrapper.appendChild(img); // imgをwrapperに移動
  });
});
