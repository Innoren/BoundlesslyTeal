<?php
header('Content-Type: text/plain');
$dir = __DIR__;
$dest = dirname($dir, 3);
$htmlPath = $dir . '/index.html';
$imgPath = $dir . '/images/amarfis.jpg';
$html = file_get_contents($htmlPath);
echo "dir=" . $dir . "\n";
echo "dest=" . $dest . "\n";
echo "html_bytes=" . strlen($html) . "\n";
echo "outlook=" . substr_count($html, 'Boundlesslytealcoaching@outlook.com') . "\n";
echo "old=" . substr_count($html, 'amarfisdls@boundlesslytealcoaching.com') . "\n";
echo "portrait=" . substr_count($html, 'amarfis.jpg') . "\n";
echo "img_exists=" . (is_file($imgPath) ? 'yes' : 'no') . "\n";
if (!is_dir($dest . '/images')) {
  echo "mkdir=" . (mkdir($dest . '/images', 0755, true) ? 'yes' : 'no') . "\n";
}
echo "copy_html=" . (copy($htmlPath, $dest . '/index.html') ? 'yes' : 'no') . "\n";
echo "copy_img=" . (copy($imgPath, $dest . '/images/amarfis.jpg') ? 'yes' : 'no') . "\n";
echo "dest_html_mtime=" . date('c', filemtime($dest . '/index.html')) . "\n";
echo "dest_img_bytes=" . filesize($dest . '/images/amarfis.jpg') . "\n";
@unlink(__FILE__);
echo "removed_self\n";
