document.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', theme);
    document.getElementById('darkmodebutton').innerText = theme === 'light' ? 'Dark Mode' : 'Light Mode';
  
    document.getElementById('darkmodebutton').addEventListener('click', () => {
      const currentTheme = document.body.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      document.getElementById('darkmodebutton').innerText = newTheme === 'light' ? 'Dark Mode' : 'Light Mode';
    });
  });
  