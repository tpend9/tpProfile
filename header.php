<?php
        include 'script/function.php';
        
        
        
        
    ?>

<!DOCTYPE html>

<html>
<head>
    <title><?php echo $title ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="style.css" />
    <script src="script/js/main.js"></script>
</head>

<body
      <?php
      if($title == "Home") {
        echo 'onload="img_slider ();"';
      }
      ?>>
    <div id="lightbox" class="lightbox" onclick="show('none', 'login'); show('none', 'vr_viewer'); show('none', 'lightbox');"></div>
    <div class='login' id="login">
        <h2 class="close" onclick="show('none', 'login'); show('none', 'lightbox');">X</h2>
            
            
        <form class='signup_form' action='script/signup.php' method="post">
            <label>Signup</label><br /><br />
            <input type='text' id="user_name" name='user_name' placeholder='Name' /><br />
    
            <input type="email" id="user_email" name="user_email" placeholder='Email' /><br />
                    
            <input type='tel' id='user_phone' name='user_phone' placeholder='Phone' /><br />
            
            <input type="password" id="user_password" name="user_password" placeholder='Password' /><br />
                    
            <input type="date" id="user_dob" name="user_dob" placeholder='DOB' /><br />
            
                    
            <input type='submit' value='Signup' />
        </form>
                
                
                
        <form class='login_form' method='post' action="script/login.php">
            <label>Login</label><br /><br />
            <input type="email" id="login_email" name="login_email" placeholder='Email' required /><br />
                    
            <input type="password" id="login_password" name="login_password" placeholder='Password' required /><br />
                    
            <input type='submit' value='Login' />
                    
        </form>
    </div>
    
    
    <header>
        <a href="index.php">
            <img src="img/logo.png" />
        </a>
        <nav>
            
            <ul>
                <a href="buy.php">
                    <li>Buy</li>
                </a>
                <a href="rent.php">
                    <li>Rent</li>
                </a>
                <a href="sell.php">
                    <li>Sell</li>
                </a>
                <a href="about_us.php">
                    <li>About Us</li>
                </a>
                <a href="contact_us.php">
                    <li>Countact Us</li>
                </a>
                <a href="staff.php">
                    <li>Staff</li>
                </a>
                
                <span class='login_a'>
                <?php
                if(isset($_SESSION['table'])) {
                    ?>
                <a
                   <?php
                    if($_SESSION['table'] == 'staff') {
                        echo "href='admin_dashboard.php'";
                    } else {
                        echo "href='dashboard.php'";
                    }
                    
                    ?>
                >Dashboard</a>
                <a href='script/logout.php'>Logout</a>
                <?php
                } else {
                ?>
                    <a onclick="show('block', 'login'); show('block', 'lightbox');">
                        <li>Login/Signup</li>
                    </a>
                <?php
                }
                
                ?>
                </span>
            </ul>
            
        </nav>
        
       
    </header>
    
    
    
    
    
    
    
    