<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

$conexao = new PDO('mysql:host=br968.hostgator.com.br:2083; dbname=eagles29_sulpolform', 'eagles29_sulpolform' 'E@gl&$2709$')

$body = file_get_contents('php://input');

if(!$body) {
    echo('Teste');
    die;
}
$body = json_decode($body);
