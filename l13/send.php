<?php
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

// Проверка обязательных полей
if (empty($name) || empty($email)) {
    //header("Location: index.html?error=empty_fields");
    header("Location: index.html?error=empty_fields#getintouch");
    exit;
}

// Сохранение в JSON
$data = json_decode(file_get_contents('form_data.json'), true) ?? [];
$data[] = [
    'name' => $name,
    'email' => $email,
    'message' => $message,
    'date' => date('Y-m-d H:i:s')
];

file_put_contents('form_data.json', json_encode($data));

// Перенаправление с параметром успеха
//header("Location: index.html?status=success");
header("Location: index.html?status=success#getintouch");
exit;
?>