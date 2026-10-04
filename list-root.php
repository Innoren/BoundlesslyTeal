<?php
header('Content-Type: text/plain');
$webroot = dirname(__DIR__, 3);
echo "webroot=$webroot\n";
echo "ROOT:\n";
foreach (scandir($webroot) as $item) {
  $p = $webroot . '/' . $item;
  $size = is_file($p) ? filesize($p) : 0;
  echo $item . "\t" . (is_dir($p) ? 'dir' : $size) . "\n";
}
echo "NESTED:\n";
$nested = $webroot . '/home2/odilaxmy/public_html';
if (is_dir($nested)) {
  foreach (scandir($nested) as $item) echo $item . "\n";
} else echo "missing\n";
@unlink(__FILE__);
