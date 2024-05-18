document.addEventListener('DOMContentLoaded', () => {
  const generateLinkBtn = document.getElementById('generate-link-btn');
  const generatedLinkDiv = document.getElementById('generated-link');
  const linkText = document.getElementById('link-text');
  const copyLinkBtn = document.getElementById('copy-link-btn');

  generateLinkBtn.addEventListener('click', () => {
      const fakeLink = `http://example.com/${Math.random().toString(36).substring(2, 15)}`;
      linkText.textContent = fakeLink;
      generatedLinkDiv.classList.remove('hidden');
  });

  copyLinkBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(linkText.textContent).then(() => {
          alert('Link copiat!');
      }).catch(err => {
          console.error('Eroare la copierea linkului:
