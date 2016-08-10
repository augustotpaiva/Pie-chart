<!DOCTYPE html>
<head lang="pt-br">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
	<title>Gráfico de Pizza em Canvas</title>
	
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript"></script>
    <script src="dados.js" type="text/javascript"></script>
    <script src="pizza.js" type="text/javascript"></script>
    <link rel="stylesheet" href="css.css" type="text/css" />
</head>
<body>
	<div class="clear"></div>
    <div id="chart">
    	<canvas width="500" height="500" id="grafic">Seu navegador não suporta canvas</canvas>
    </div>
    
    <div id="handler">
        <div class="buttons">
            <div id="draw">Draw!</div>
            <div id="reset">Reset</div>
            <div id="add">Adicionar Dados</div>
        </div>
        
        <div class="clear"></div>
        
        <ul id="inputs">
            <li rel="1"><span id="num_input_dados">1&ordm; dado: </span><input type="text" size="30" name="dados[]" class="input_dados" placeholder="Digite os dados" /></li>
        </ul>
    </div>
</body>
</html>