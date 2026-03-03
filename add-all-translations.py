#!/usr/bin/env python3
"""
Complete script to add all translation attributes to the HTML file
"""
import re

# Read the HTML
with open('BoundlesslyTealHTML.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Navigation
html = html.replace('>Home</a>', ' data-i18n="nav.home">Home</a>')
html = html.replace('>About</a>', ' data-i18n="nav.about">About</a>', 1)
html = html.replace('>Services</a>', ' data-i18n="nav.services">Services</a>', 1)
html = html.replace('>Why Choose Us</a>', ' data-i18n="nav.why">Why Choose Us</a>')
html = html.replace('>Clients</a>', ' data-i18n="nav.clients">Clients</a>', 1)
html = html.replace('>Let\'s Talk</a>', ' data-i18n="nav.cta">Let\'s Talk</a>')

# Hero section
html = html.replace('Empowering <em>Growth</em> Through Compassionate Coaching', 
                   '<span data-i18n="hero.tagline">Empowering <em>Growth</em> Through Compassionate Coaching</span>')
html = html.replace('Transform your life with personalized coaching that honors your unique journey and helps you achieve lasting change.',
                   '<span data-i18n="hero.subtitle">Transform your life with personalized coaching that honors your unique journey and helps you achieve lasting change.</span>')
html = html.replace('>Start Your Journey</a>', ' data-i18n="hero.btn.primary">Start Your Journey</a>')
html = html.replace('>Learn More</a>', ' data-i18n="hero.btn.secondary">Learn More</a>')

# Save
with open('BoundlesslyTealHTML.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("✅ Translation attributes added!")
print("Refresh your browser to see the language switcher work!")
