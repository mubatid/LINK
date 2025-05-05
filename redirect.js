const path = window.location.pathname.split('/').pop();
if (shortlinks[path]) {
  const targetUrl = shortlinks[path];
  document.getElementById("manual-link").href = targetUrl;
  setTimeout(() => {
    window.location.href = targetUrl;
  }, 3000);
} else {
  document.body.innerHTML = "<h2>Link tidak ditemukan</h2>";
}