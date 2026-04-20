<?php
$name = trim($_POST['name'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$message = trim($_POST['message'] ?? '');
$type = $_POST['type'] ?? 'call';

if (empty($name) || empty($phone)) {
  return json_encode(['success' => false, 'message' => 'Заполните имя и телефон']);
}

$modx->getService('mail', 'mail.modMail');
$modx->mail->set(modMail::MAIL_BODY, "Имя: $name\nТелефон: $phone\nТип: $type\nСообщение: $message");
$modx->mail->set(modMail::MAIL_FROM, 'noreply@site.ru');
$modx->mail->set(modMail::MAIL_SUBJECT, 'Заявка с сайта');
$modx->mail->address('manager@site.ru');
$sent = $modx->mail->send();
$modx->mail->reset();

return json_encode(['success' => $sent]);