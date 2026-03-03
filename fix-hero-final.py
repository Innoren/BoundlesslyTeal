#!/usr/bin/env python3
"""Add missing translation attributes to hero section"""

with open('BoundlesslyTealHTML.html', 'r', encoding='utf-8') as f:
    html = f.read()

replacements = [
    # Hero title and subtitle
    ('      <h1 class="hero-tagline">You are not starting over.<br><em>You are transitioning.</em></h1>',
     '      <h1 class="hero-tagline" data-i18n="hero.title">You are not starting over.<br><em data-i18n="hero.subtitle">You are transitioning.</em></h1>'),
    
    # Hero description
    ('      <p class="hero-sub">Certified personal development coaching to help you unlock your potential, set meaningful goals, and step boldly into your next chapter.</p>',
     '      <p class="hero-sub" data-i18n="hero.description">Certified personal development coaching to help you unlock your potential, set meaningful goals, and step boldly into your next chapter.</p>'),
]

for old, new in replacements:
    if old in html:
        html = html.replace(old, new)
        print(f"✅ Replaced: {old[:60]}...")
    else:
        print(f"❌ NOT FOUND: {old[:60]}...")

with open('BoundlesslyTealHTML.html', 'w', encoding='utf-8') as f:
    f.write(html)

print(f"\n✅ Hero section translations added!")
