<?php
/**
 * C.S.I. Ewart Women's Christian College
 * Database Connection & Environment Config (MySQL PDO)
 */

$db_host = getenv('DB_HOST') ?: '127.0.0.1';
$db_port = getenv('DB_PORT') ?: '3306';
$db_name = getenv('DB_NAME') ?: 'csi_ewart_college';
$db_user = getenv('DB_USER') ?: 'root';
$db_pass = getenv('DB_PASS') ?: '';

$pdo = null;

try {
    $dsn = "mysql:host={$db_host};port={$db_port};dbname={$db_name};charset=utf8mb4";
    $options = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ];
    // Attempt connection if database credentials are configured
    if (extension_loaded('pdo_mysql')) {
        $pdo = new PDO($dsn, $db_user, $db_pass, $options);
    }
} catch (PDOException $e) {
    // Graceful fallback for environments where local MySQL is being set up
    $db_connection_error = $e->getMessage();
}

/**
 * Helper to sanitize user input
 */
function clean_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    return $data;
}
?>
