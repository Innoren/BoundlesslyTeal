#!/usr/bin/env python3
"""
Add remaining translation attributes
"""
import re

with open('BoundlesslyTealHTML.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Contact form
html = html.replace('placeholder="Tell me a little about where you are and what you\'re looking for..."',
                   'placeholder="Tell me a little about where you are and what you\'re looking for..." data-i18n-placeholder="contact.form.message.placeholder"')
html = html.replace('>Send Message ✦</button>', ' data-i18n="contact.form.submit">Send Message ✦</button>')
html = html.replace('✅ Thank you! Your message has been sent. I\'ll be in touch soon.',
                   '<span data-i18n="contact.form.success">✅ Thank you! Your message has been sent. I\'ll be in touch soon.</span>')

# Footer
html = html.replace('© 2024 Boundlessly Teal Coaching, LLC. All rights reserved.',
                   '<span data-i18n="footer.copyright">© 2024 Boundlessly Teal Coaching, LLC. All rights reserved.</span>')

with open('BoundlesslyTealHTML.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("✅ Additional translations added!")
print("Now refresh your browser and click the ES button to see Spanish translations!")
