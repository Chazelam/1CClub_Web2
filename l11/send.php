<?php
header('Content-Type: application/json');

// Получение данных из формы
$name = isset($_POST['name']) ? trim(urldecode(htmlspecialchars($_POST['name']))) : '';
$email = isset($_POST['email']) ? trim(urldecode(htmlspecialchars($_POST['email']))) : '';
$message = isset($_POST['message']) ? trim(urldecode(htmlspecialchars($_POST['message']))) : '';

// Проверка обязательных полей
if (empty($name) || empty($email)) {
    echo json_encode(['status' => 'error', 'message' => 'Заполните обязательные поля']);
    exit;
}

// Настройки письма
$to = 'andreilaymzin@gmail.com'; // Замените на ваш email
$subject = 'Новая заявка с сайта';
$body = "
    От: $name\n
    Email: $email\n
    Сообщение: $message
";
$headers = "From: no-reply@ваш_сайт.ru\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8";

// Отправка письма
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['status' => 'ok']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Ошибка отправки']);
}
?>