<?php
include 'connect.php'; // Your database connection file

// Check which action is requested (register or login)
if (isset($_GET['action'])) {
    $action = $_GET['action'];

    if ($action == 'register' && $_SERVER["REQUEST_METHOD"] == "POST") {
        // Handle Registration
        $student_number = $_POST['student_number']; // Add student number
        $fName = $_POST['fName'];
        $lName = $_POST['lName'];
        $email = $_POST['email'];
        $password = $_POST['password']; // Store password as plain text

        // Check if email already exists in studinfo table
        $checkEmail = $conn->prepare("SELECT * FROM studinfo WHERE email = ?");
        $checkEmail->bind_param("s", $email);
        $checkEmail->execute();
        $result = $checkEmail->get_result();

        if ($result->num_rows > 0) {
            echo "<p>Email already exists! Please use a different email.</p>";
        } else {
            // Prepare SQL statement to insert data into studinfo table
            $sql = "INSERT INTO studinfo (student_number, first_name, last_name, email, password) VALUES (?, ?, ?, ?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("sssss", $student_number, $fName, $lName, $email, $password);

            if ($stmt->execute()) {
                // Redirect to index.html after successful registration
                header("Location: index.html");
                exit();
            } else {
                echo "<p>Error: " . $conn->error . "</p>";
            }

            $stmt->close();
        }

        $checkEmail->close();
    }

    if ($action == 'login' && $_SERVER["REQUEST_METHOD"] == "POST") {
        // Handle Login
        $email = $_POST['email'];
        $password = $_POST['password'];

        // Check if the email exists in the database
        $sql = "SELECT * FROM studinfo WHERE email = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $user = $result->fetch_assoc();
            // Compare the entered password with the stored password
            if ($password === $user['password']) { // Use plain text comparison
                // Redirect to index.html after successful login
                header("Location: index.html");
                exit();
            } else {
                echo "<p>Incorrect password. Please try again.</p>";
            }
        } else {
            echo "<p>Email not found. Please register first.</p>";
        }

        $stmt->close();
    }

    $conn->close();
}
?>
