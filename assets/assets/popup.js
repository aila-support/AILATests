(function () {
  function open() {
    var m = document.getElementById('aila-popup');
    if (m) { m.classList.add('is-open'); m.setAttribute('aria-hidden','false'); }
  }
  function close() {
    var m = document.getElementById('aila-popup');
    if (m) { m.classList.remove('is-open'); m.setAttribute('aria-hidden','true'); }
  }
  document.addEventListener('DOMContentLoaded', function () {
    var m = document.getElementById('aila-popup');
    if (!m) return;
    // افتح عند التحميل
    open();
    // اغلاق بالزر
    var btn = document.getElementById('aila-close');
    if (btn) btn.addEventListener('click', close);
    // اغلاق بالضغط على الخلفية
    var bd = m.querySelector('.aila-modal__backdrop');
    if (bd) bd.addEventListener('click', close);
    // Esc
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  });
})();
