<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Parallo - App Landing Page</title>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" />
    <link rel="stylesheet" href="./css/all.min.css" />
    <link rel="stylesheet" href="./css/bootstrap.min.css" />
    <link rel="stylesheet" href="./css/templatemo-style.css" />
<!--
Parallo Template
https://templatemo.com/tm-534-parallo
-->
  </head>
  <body>
    <div class="parallax-window" data-parallax="scroll" data-image-src="img/nyt.png">
      <div class="container-fluid">
      
      <?= $count = 0?>
        <!-- Features -->
        <div class="row" id="tmFeatures">
         
          <!------------------------>
          <?php for($i = 0; $i <= 5; $i++) : ?>

          <div class="col-lg-4" id="book<?=$count++?>">
            <div class="tm-bg-white-transparent tm-feature-box">
            <a> <h3 class="tm-feature-name"></h3></a>
      
            <div class="tm-feature-icon-container">
               <a> <img src="" width="50" height="auto"></a>
            </div>
             <h4>Ranking</h4>
            <span style="font-size: 3rem"></span>

            <p class="text-center"></p>
            </div>
          </div>
          <?php if($count == 3) : ?>
            <div class='container-fluid'>
            <br/>
               <hr/>
               <br/>
            </div>
          <?php endif; ?>
         <?php endfor; ?>


        <!-- Page footer -->
        <footer class="row">
        
            <div class="col-12 text-white text-center tm-copyright-text">
              <p id=copyright></p>&copy;
              <script>
                document.write(new Date().getFullYear())
              </script>,API Desarrolado <i class="material-icons"></i> por
              Herman Martinez</a>
            </div>
          
        </footer>
      </div>
      <!-- .container-fluid -->
    </div>

    <script src="./js/jquery.min.js"></script>
    <script src="./js/parallax.min.js"></script>
    <script src="./js/bootstrap.min.js"></script>
   <script src="./js/booknyt.js"></script>
     
  </body>
</html>