// Node.js script to add translation attributes to HTML
const fs = require('fs');

const html = fs.readFileSync('BoundlesslyTealHTML.html', 'utf8');

// Add script tag before </body>
let updated = html.replace('</body>', `  <script src="translations.js"></script>
</body>`);

// Add language switcher to nav (after hamburger)
const langSwitcher = `
    <div class="lang-switcher">
      <button class="lang-btn active" data-lang="en" onclick="setLanguage('en')">EN</button>
      <button class="lang-btn" data-lang="es" onclick="setLanguage('es')">ES</button>
    </div>`;

updated = updated.replace('</nav>', `  ${langSwitcher}
</nav>`);

// Save
fs.writeFileSync('BoundlesslyTealHTML.html', updated);
console.log('Translation system added!');
