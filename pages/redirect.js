const path = window.location.pathname.split('/').pop();
if (shortlinks[path]) {
  const targetUrl = shortlinks[path];
  document.getElementById("https://s.shopee.co.id/9zkwXh2Vlc").href = targetUrl;
  setTimeout(() => {
    window.location.href = targetUrl;
  }, 3000); // 3 detik delay
} else {
  document.body.innerHTML = "<h2>Link tidak ditemukan</h2>";
}
