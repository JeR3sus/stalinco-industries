document.querySelectorAll('.mann-sidebar h4').forEach(el => {
  el.addEventListener('click', () => {
    alert(`Раздел "${el.textContent}" пока недоступен. Но скоро будет!`);
  });
});
