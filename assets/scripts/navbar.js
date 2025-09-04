  document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('navbar.html');
  let html = await response.text();
  
  // Get current page
  const path = window.location.pathname;
  
  // Determine active tab
  let activeTab = 'index';
  if (path.includes('submit')) activeTab = 'submit';
  if (path.includes('profile')) activeTab = 'profile';
  
  // Add 'active' class to the correct <a> tag
  html = html.replace(`<a href="${activeTab}.html">`, `<a href="${activeTab}.html" class="active font-bold shadow bg-primary-accent rounded-full">`);
  
  // Insert modified HTML
  document.getElementById('navbar-container').innerHTML = html;
});