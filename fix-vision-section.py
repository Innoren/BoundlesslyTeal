#!/usr/bin/env python3
"""Add translation attributes to Vision & Mission section"""

with open('BoundlesslyTealHTML.html', 'r', encoding='utf-8') as f:
    html = f.read()

replacements = [
    # Section label and title
    ('        <div class="section-label" style="justify-content:center;">Our Foundation</div>',
     '        <div class="section-label" style="justify-content:center;" data-i18n="vision.foundation">Our Foundation</div>'),
    
    ('        <h2 class="section-title">Vision &amp; <em>Mission</em></h2>',
     '        <h2 class="section-title"><span data-i18n="vision.heading">Vision &amp;</span> <em data-i18n="vision.mission.word">Mission</em></h2>'),
    
    # Vision card
    ('          <h3>Vision Statement</h3>',
     '          <h3 data-i18n="vision.vision.title">Vision Statement</h3>'),
    
    ('          <p>To inspire and guide individuals toward lasting personal transformation, helping them realize their true potential and live with clarity and confidence. To empower people to break through limitations, embrace self-discovery, and achieve the goals that truly matter to them.</p>',
     '          <p data-i18n="vision.vision.text">To inspire and guide individuals toward lasting personal transformation, helping them realize their true potential and live with clarity and confidence. To empower people to break through limitations, embrace self-discovery, and achieve the goals that truly matter to them.</p>'),
    
    # Mission card
    ('          <h3>Mission Statement</h3>',
     '          <h3 data-i18n="vision.mission.title">Mission Statement</h3>'),
    
    ('          <p>To guide and support individuals in identifying their strengths, overcoming obstacles, and achieving meaningful personal and professional growth through personalized coaching, actionable strategies, and ongoing encouragement — cultivating the habits and mindset for sustainable success.</p>',
     '          <p data-i18n="vision.mission.text">To guide and support individuals in identifying their strengths, overcoming obstacles, and achieving meaningful personal and professional growth through personalized coaching, actionable strategies, and ongoing encouragement — cultivating the habits and mindset for sustainable success.</p>'),
]

for old, new in replacements:
    if old in html:
        html = html.replace(old, new)
        print(f"✅ Replaced: {old[:60]}...")
    else:
        print(f"❌ NOT FOUND: {old[:60]}...")

with open('BoundlesslyTealHTML.html', 'w', encoding='utf-8') as f:
    f.write(html)

print(f"\n✅ Vision & Mission section translation attributes added!")
