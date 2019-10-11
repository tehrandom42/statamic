<?php
header("Content-type: text/css"); /* define 5 colors used for menu bar */
$hilight_text = '#fff';
$hilight_bk = '#808080';
$normal_text = '#444';
$normal_bk = '#ddd';
$submenubk = '#fff';
?>

.ddsmoothmenu{
font: 15px Helvetica;
background:<?=$normal_bk?>; /*background of menu bar (default state)*/
width: 100%;
}

.ddsmoothmenu ul{
position: relative;
z-index:9999;
margin: 0;
padding: 0;
list-style-type: none;
}

/*Top level list items*/
.ddsmoothmenu ul li{
position: relative;
display: inline;
float: left;
}

/*Top level menu link items style*/
.ddsmoothmenu ul li a{
display: block;
padding: 6px 8px 6px 20px; /*padding inside each tab*/
color: <?=$normal_text?>;
text-decoration: none;
}

* html .ddsmoothmenu ul li a{ /*IE6 hack to get sub menu links to behave correctly*/
display: inline-block;
}

/* .ddsmoothmenu ul li a:link, .ddsmoothmenu ul li a:visited{
color: <?=$hilight_text?>;
} */

.ddsmoothmenu ul li a.selected{ /*CSS class that's dynamically added to the currently active menu items' LI A element*/
color: <?=$hilight_text?>;
background: <?=$hilight_bk?>;
}

.ddsmoothmenu ul li a:hover{
background: <?=$hilight_bk?>; /*background of menu items during onmouseover (hover state)*/
color: <?=$hilight_text?>;
border: white;
}
	
/*1st sub level menu*/
.ddsmoothmenu ul li ul{
position: absolute;
display: none; /*collapse all sub menus to begin with*/
visibility: hidden;
border: 1px solid black;
}

/*Sub level menu list items (undo style from Top level List Items)*/
.ddsmoothmenu ul li ul li{
display: list-item;
float: none;
}

/*All subsequent sub menu levels vertical offset after 1st level sub menu */
.ddsmoothmenu ul li ul li ul{
top: 0;
}

/* Sub level menu links style */
.ddsmoothmenu ul li ul li a{
font: normal 14px Helvetica;
width: auto; /*width of sub menus*/
padding: 3px 20px 4px 18px;
color: <?=$normal_text?>;
background-color: <?=$submenubk?>;
}


.ddsmoothmenu ul li ul li a.selected{ 
color: <?=$hilight_text?>;
background: <?=$hilight_bk?>; 
}

/* Holly Hack for IE \*/
* html .ddsmoothmenu{height: 1%;} /*Holly Hack for IE7 and below*/


/* ######### CSS classes applied to down and right arrow images  ######### */

.downarrowclass{
position: absolute;
top: 12px;
right: 7px;
}

.rightarrowclass{
position: absolute;
top: 6px;
right: 5px;
}

/* ######### CSS for shadow added to sub menus  ######### */

.ddshadow{ /*shadow for NON CSS3 capable browsers*/
position: absolute;
left: 0;
top: 0;
width: 0;
height: 0;
background: gray;
}

.toplevelshadow{ /*shadow opacity for NON CSS3 capable browsers. Doesn't work in IE*/
opacity: 0.8;
}