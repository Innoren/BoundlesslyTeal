#!/usr/bin/env python3
"""Add missing translation attributes to hero section"""

with open('BoundlesslyTealHTML.html', 'r', encoding='utf-8') as f:
    html = f.read()

replacements = [
    # Hero section main text
    ('      <h1 class="hero-title">You are not starting over.<br><span class="hero-subtitle">You are transitioning.</span></h1>',
     '      <h1 class="hero-title" data-i18n="hero.title">You are not starting over.<br><span class="hero-subtitle" data-i18n="hero.subtitle">You are transitioning.</span></h1>'),
    
    ('      <p class="hero-description">Certified personal development coaching to help you unlock your potential, set meaningful goals, and step boldly into your next chapter.</p>',
     '      <p class="hero-description" data-i18n="hero.description">Certified personal development coaching to help you unlock your potential, set meaningful goals, and step boldly into your next chapter.</p>'),
    
    # Hero buttons
    ('        <a href="#contact" class="btn-primary">Book a Discovery Call</a>',
     '        <a href="#contact" class="btn-primary" data-i18n="hero.cta1">Book a Discovery Call</a>'),
    
    ('        <a href="#services" class="btn-secondary">Explore Services</a>',
     '        <a href="#services" class="btn-secondary" data-i18n="hero.cta2">Explore Services</a>'),
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
