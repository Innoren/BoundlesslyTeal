#!/usr/bin/env python3
"""
Script to add translation data attributes to HTML file
Run this to make the entire page bilingual
"""

import re

# Read the HTML file
with open('BoundlesslyTealHTML.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Mapping of text to translation keys
translations_map = {
    # Navigation
    '>Home<': ' data-i18n="nav.home">Home<',
    '>About<': ' data-i18n="nav.about">About<',
    '>Services<': ' data-i18n="nav.services">Services<',
    '>Why Choose Us<': ' data-i18n="nav.why">Why Choose Us<',
    '>Clients<': ' data-i18n="nav.clients">Clients<',
    '>Let\'s Talk<': ' data-i18n="nav.cta">Let\'s Talk<',
    
    # Hero
    'Empowering <em>Growth</em> Through Compassionate Coaching': 'data-i18n="hero.tagline">Empowering <em>Growth</em> Through Compassionate Coaching',
    'Transform your life with personalized coaching': 'data-i18n="hero.subtitle">Transform your life with personalized coaching',
    '>Start Your Journey<': ' data-i18n="hero.btn.primary">Start Your Journey<',
    '>Learn More<': ' data-i18n="hero.btn.secondary">Learn More<',
}

# Apply translations
for old_text, new_text in translations_map.items():
    html = html.replace(old_text, new_text)

# Save the updated HTML
with open('BoundlesslyTealHTML.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Translation attributes added successfully!")
print("Open the HTML file in a browser and click EN/ES buttons to switch languages.")
