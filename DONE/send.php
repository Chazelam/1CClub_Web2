<?php

// Проверяем, были ли переданы данные
if (!isset($_POST['name']) || !isset($_POST['email']) || !isset($_POST['msg'])) {
    echo json_encode(['Status' => 'error', 'Message' => 'Missing data']);
    exit;
}

// Обрабатываем данные
$name = trim(urldecode(htmlspecialchars($_POST['name'])));
$email = trim(urldecode(htmlspecialchars($_POST['email'])));
$msg = trim(urldecode(htmlspecialchars($_POST['msg'])));

// Генерируем имя файла
$filename = 'заявка_' . date('Y-m-d_H-i-s') . '.txt';

// Формируем содержимое файла
$content = "На сайт поступила новая заявка\n";
$content .= "от: " . $name . "\n";
$content .= "e-mail: " . $email . "\n";
$content .= "пользователь оставил комментарий: " . $msg . "\n";
$content .= "Свяжитесь с ним как можно быстрей\n";

// Пытаемся сохранить файл
if (file_put_contents($filename, $content)) {
    echo json_encode(['Status' => 'ok']);
} else {
    echo json_encode(['Status' => 'error', 'Message' => 'Failed to save file']);
}

?>