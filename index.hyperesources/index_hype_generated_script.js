//	HYPE.documents["index"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="index.hyperesources",f="index",g="index_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/index_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_708F||null!=window.HYPE_dtl_708F)||true==!0||null!=c&&10>c;a=!0==d?"HYPE-708.full.min.js":"HYPE-708.thin.min.js";c=!0==d?"F":"T";d=d?"":
"";if(false==!1&&(a=k("HYPE_708"+c,"HYPE_dtl_708"+c,a,d),false==!0&&(a=a||k("HYPE_w_708","HYPE_wdtl_708","HYPE-708.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_708","HYPE-708.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=document.getElementsByTagName("div"),
b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"initializeMain",source:"function(hypeDocument, element, event) {\t\n\tif (DIFFICULTY == \"easy\") {\n\t\tINITIALCOUNTDOWNVALUE = 60;\n\t\tdocument.getElementById(\"maskBox\").style.visibility = \"hidden\";\n\t} else {\n\t\tINITIALCOUNTDOWNVALUE = 45;\n\t\tdocument.getElementById(\"maskBox\").style.visibility = \"visible\";\n\t}\n\n\tdocument.getElementById(\"mask1\").style.top = \"-48px\";\n\tdocument.getElementById(\"mask1\").style.left = \"-848px\";\n\tdocument.getElementById(\"thermometer\").style.width = \"790px\";\n\tdocument.getElementById(\"player\").style.top = \"576px\";\n\tdocument.getElementById(\"player\").style.left = \"32px\";\n\tdocument.getElementById(\"blueDoor\").style.visibility = \"visible\";\n\tdocument.getElementById(\"redDoor\").style.visibility = \"visible\";\n\tdocument.getElementById(\"greenDoor\").style.visibility = \"visible\";\n\tdocument.getElementById(\"blueKey\").style.visibility = \"visible\";\n\tdocument.getElementById(\"redKey\").style.visibility = \"visible\";\n\tdocument.getElementById(\"greenKey\").style.visibility = \"visible\";\n\tdocument.getElementById(\"blueKeyDisplay\").style.visibility = \"hidden\";\n\tdocument.getElementById(\"redKeyDisplay\").style.visibility = \"hidden\";\n\tdocument.getElementById(\"greenKeyDisplay\").style.visibility = \"hidden\";\n\tdocument.getElementById(\"counter\").innerHTML = INITIALCOUNTDOWNVALUE;\n\tPLAYERMOVEABLE = true;\n\tvar counterSegments = 10;\n\t\n\tCOUNTDOWNINTERVAL = setInterval(decrementTimer, 100);\n\t\n\tfunction decrementTimer() {\n\t\tvar temp2 = parseFloat(document.getElementById(\"thermometer\").style.width);\n\t\tvar decrementAmount = 79/(INITIALCOUNTDOWNVALUE);\n\t\tdocument.getElementById(\"thermometer\").style.width = (temp2 - decrementAmount) + \"px\";\n\t\tcounterSegments--;\n\t\tif (counterSegments == 0) {\n\t\t\tcounterSegments = 10;\n\t\t\tvar temp1 = parseInt(document.getElementById(\"counter\").innerHTML);\n\t\t\ttemp1 = temp1 - 1;\n\t\t\tdocument.getElementById(\"counter\").innerHTML = temp1;\n\t\t}\n\t\tif (temp1 == 0) {\n\t\t\tclearInterval(COUNTDOWNINTERVAL);\n\t\t\tPLAYERMOVABLE = false;\n\t\t\tdocument.getElementById(\"gameOverMessage\").innerHTML = \"A FROG ATE YOU!\";\n\t\t\tdocument.getElementById(\"thermometer\").style.width = \"0px\";\n\t\t\thypeDocument.startTimelineNamed('playerLose');\n\t\t}\n\t}\n\t\t\t\n}",identifier:"30"},{name:"detectKeyDown",source:"function(hypeDocument, element, event) {\t\n\tif (PLAYERMOVEABLE == true) {\n\t\tvar topPosition = parseInt(document.getElementById('player').style.top);\n\t\tvar leftPosition = parseInt(document.getElementById('player').style.left);\n\t\tvar maskTopPosition = parseInt(document.getElementById('mask1').style.top);\n\t\tvar maskLeftPosition = parseInt(document.getElementById('mask1').style.left);\n\t\tvar playerTopGrid = topPosition/32;\n\t\tvar playerLeftGrid = leftPosition/32;\n\t\tvar keyPressed = event.key;\n\t\tvar keyCode = event.keyCode;\n\t\tif (keyCode == \"37\") \t\t{ playerLeftGrid = playerLeftGrid - 1; } // MOVE LEFT\n\t\telse if (keyCode == \"38\") { playerTopGrid = playerTopGrid - 1; } // MOVE UP\n\t\telse if (keyCode == \"39\") { playerLeftGrid = playerLeftGrid + 1; } // MOVE RIGHT\n\t\telse if (keyCode == \"40\")  { playerTopGrid = playerTopGrid + 1; } // MOVE DOWN\n\t\tvar string4 = \"GRID[\" + playerTopGrid + \"][\" + playerLeftGrid + \"]\";\n\t\tvar string5 = eval(string4);\n\t\t\n\t\t// REMINDER:\t\tGRID[14][3] = 2; // BLUE KEY\n\t\t// REMINDER:\t\tGRID[12][11] = 3; // BLUE DOOR\n\t\t// REMINDER:\t\tGRID[18][19] = 4; // RED KEY\n\t\t// REMINDER:\t\tGRID[6][7] = 5; // RED DOOR\n\t\t// REMINDER:\t\tGRID[9][19] = 6; // GREEN KEY\n\t\t// REMINDER:\t\tGRID[11][21] = 7; // GREEN DOOR\n\t\n\t\tif (string5 == 1) { // OPEN PATH\n\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\thypeDocument.startTimelineNamed('footstep');\n\t\t} else if (string5 == 0) { // OBSTACLE\n\t\t\thypeDocument.startTimelineNamed('badBeep');\n\t\t} else if (string5 == 2) { // BLUE KEY\n\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\tdocument.getElementById(\"blueKey\").style.visibility = \"hidden\";\n\t\t\tdocument.getElementById(\"blueKeyDisplay\").style.visibility = \"visible\";\n\t\t\tGRID[14][3] = 1;\n\t\t\thypeDocument.startTimelineNamed('pickup');\n\t\t} else if (string5 == 4) { // RED KEY\n\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\tdocument.getElementById(\"redKey\").style.visibility = \"hidden\";\n\t\t\tdocument.getElementById(\"redKeyDisplay\").style.visibility = \"visible\";\n\t\t\tGRID[18][19] = 1;\n\t\t\thypeDocument.startTimelineNamed('pickup');\n\t\t} else if (string5 == 6) { // GREEN KEY\n\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\tdocument.getElementById(\"greenKey\").style.visibility = \"hidden\";\n\t\t\tdocument.getElementById(\"greenKeyDisplay\").style.visibility = \"visible\";\n\t\t\tGRID[9][19] = 1;\n\t\t\thypeDocument.startTimelineNamed('pickup');\n\t\t} else if (string5 == 3) { // BLUE DOOR\n\t\t\tif (document.getElementById(\"blueKeyDisplay\").style.visibility == \"visible\") {\n\t\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\t\tdocument.getElementById(\"blueDoor\").style.visibility = \"hidden\";\n\t\t\t\tGRID[12][11] = 1;\n\t\t\t\thypeDocument.startTimelineNamed('doorOpen');\n\t\t\t} else {\n\t\t\t\thypeDocument.startTimelineNamed('badBeep');\n\t\t\t}\n\t\t} else if (string5 == 5) { // RED DOOR\n\t\t\tif (document.getElementById(\"redKeyDisplay\").style.visibility == \"visible\") {\n\t\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\t\tdocument.getElementById(\"redDoor\").style.visibility = \"hidden\";\n\t\t\t\tGRID[6][7] = 1;\n\t\t\t\thypeDocument.startTimelineNamed('doorOpen');\n\t\t\t} else {\n\t\t\t\thypeDocument.startTimelineNamed('badBeep');\n\t\t\t}\n\t\t} else if (string5 == 7) { // GREEN DOOR\n\t\t\tif (document.getElementById(\"greenKeyDisplay\").style.visibility == \"visible\") {\n\t\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\t\tdocument.getElementById(\"greenDoor\").style.visibility = \"hidden\";\n\t\t\t\tGRID[11][21] = 1;\n\t\t\t\thypeDocument.startTimelineNamed('doorOpen');\n\t\t\t} else {\n\t\t\t\thypeDocument.startTimelineNamed('badBeep');\n\t\t\t}\n\t\t} else if (string5 == 8) { // CHECKERED FLAG\n\t\t\tPLAYERMOVEABLE = false;\n\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\tdocument.getElementById(\"maskBox\").style.visibility = \"hidden\";\n\t\t\thypeDocument.startTimelineNamed('endMaze');\n\t\t\tclearInterval(COUNTDOWNINTERVAL);\n\t\t\tdocument.getElementById(\"gameOverMessage\").innerHTML = \"YOU'RE SAFE!\";\n\t\t\thypeDocument.startTimelineNamed('playerWin');\n\t\t}\n\t}\n\t\t\t\n}",identifier:"33"},{name:"initializeSplash",source:"function(hypeDocument, element, event) {\t\n\tif (element.id == \"easyButton\") {\n\t\tDIFFICULTY = \"easy\";\n\t} else {\n\t\tDIFFICULTY = \"hard\";\n\t}\n\t\n\thypeDocument.startTimelineNamed('splashStart');\n\t\n\tGRID = [\n\t\t[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\n\t\t[0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0],\n\t\t[0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0],\n\t\t[0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0],\n\t\t[0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],\n\t\t[0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0],\n\t\t[0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0],\n\t\t[0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0],\n\t\t[0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0],\n\t\t[0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0],\n\t\t[0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0],\n\t\t[0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0],\n\t\t[0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0],\n\t\t[0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0],\n\t\t[0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0],\n\t\t[0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0],\n\t\t[0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0],\n\t\t[0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0],\n\t\t[0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0],\n\t\t[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]\n];\n\n\t\n\tGRID[12][12] = 2; // BLUE KEY\n\tGRID[4][8] = 3; // BLUE DOOR\n\tGRID[13][23] = 4; // RED KEY\n\tGRID[10][18] = 5; // RED DOOR\n\tGRID[2][17] = 6; // GREEN KEY\n\tGRID[4][22] = 7; // GREEN DOOR\n\tGRID[1][26] = 8; // FINISH FLAG\n\t\n}",identifier:"65"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_708"+c](f,g,{"3":{p:2,n:"pickup.mp3",g:"39",t:"audio/mpeg"},"12":{p:1,n:"blueDoor.png",g:"103",t:"@1x"},"21":{p:1,n:"player-1.png",g:"173",t:"@1x"},"4":{p:2,n:"endMaze.mp3",g:"40",t:"audio/mpeg"},"30":{p:2,n:"badBeep-2.mp3",g:"202",t:"audio/mpeg"},"13":{p:1,n:"greenDoor.png",g:"104",t:"@1x"},"5":{p:2,n:"playerWin.mp3",g:"53",t:"audio/mpeg"},"22":{p:1,n:"lily-frog%2030526.png",g:"177",t:"@1x"},"6":{p:2,n:"playerLose.mp3",g:"58",t:"audio/mpeg"},"31":{p:1,n:"map1-1.png",g:"203",t:"@1x"},"14":{p:1,n:"redDoor.png",g:"105",t:"@1x"},"7":{p:2,n:"charge.mp3",g:"72",t:"audio/mpeg"},"23":{p:2,n:"Iced%20Village.mp3",g:"194",t:"audio/mpeg"},"8":{p:2,n:"creditRoll.mp3",g:"89",t:"audio/mpeg"},"15":{p:1,n:"goldfishSplash.png",g:"112",t:"@1x"},"24":{p:2,n:"Harp%20Short%20Music%202%20-%20Tad.mp3",g:"195",t:"audio/mpeg"},"9":{p:1,n:"greenKey-1.png",g:"100",t:"@1x"},"16":{p:1,n:"Splash%20Page2.jpg",g:"116",o:true,t:"@1x"},"25":{p:2,n:"Harp%20Loop%203%20-%20Tad.wav",g:"196",t:"audio/wav"},"17":{p:1,n:"Splash%20Page2_2x.jpg",g:"116",o:true,t:"@2x"},"26":{p:2,n:"Swish.mp3",g:"197",t:"audio/mpeg"},"18":{p:1,n:"GoldfishSplash2.png",g:"114",t:"@1x"},"27":{p:2,n:"badBeep-1.mp3",g:"198",t:"audio/mpeg"},"19":{p:1,n:"checkeredFlag-1.png",g:"172",t:"@1x"},"28":{p:2,n:"bubbles.mp3",g:"199",t:"audio/mpeg"},"-1":{n:"PIE.htc"},"29":{p:2,n:"OpenDoor.mp3",g:"201",t:"audio/mpeg"},"-2":{n:"blank.gif"},"10":{p:1,n:"blueKey-1.png",g:"101",t:"@1x"},"0":{p:2,n:"badBeep.mp3",g:"36",t:"audio/mpeg"},"1":{p:2,n:"doorOpen.mp3",g:"37",t:"audio/mpeg"},"11":{p:1,n:"redKey-1.png",g:"102",t:"@1x"},"2":{p:2,n:"footstep.mp3",g:"38",t:"audio/mpeg"},"20":{p:1,n:"mask1.png",g:"99",t:"@1x"}},l,[],e,[{n:"splash",o:"59",X:[0]},{n:"main",o:"1",X:[1]},{n:"credits",o:"73",X:[2]}],
[{o:"61",p:"600px",B:{a:[{p:13,o:"196",q:false}]},cA:false,Z:768,Y:1024,c:"#FFF",L:[],bY:1,d:1024,U:{},T:{"66_hover":{q:false,z:1,i:"66_hover",n:"66_hover",a:[{f:"c",y:0,z:1,i:"A",e:"#41C700",s:"#FF9300",o:"211"},{f:"c",y:0,z:1,i:"G",e:"#41C700",s:"#FF9300",o:"211"},{f:"c",y:0,z:1,i:"C",e:"#41C700",s:"#FF9300",o:"211"},{f:"c",y:0,z:1,i:"B",e:"#41C700",s:"#FF9300",o:"211"},{f:"c",y:0,z:1,i:"D",e:"#41C700",s:"#FF9300",o:"211"},{f:"c",y:0,z:1,i:"S",e:2,s:2,o:"211"},{f:"c",y:0,z:1,i:"T",e:2,s:2,o:"211"},{f:"c",y:0,z:1,i:"Q",e:14,s:3,o:"211"},{f:"c",y:0,z:1,i:"R",e:"#1840B7",s:"#1840B7",o:"211"},{y:1,i:"A",s:"#41C700",z:0,o:"211",f:"c"},{y:1,i:"G",s:"#41C700",z:0,o:"211",f:"c"},{y:1,i:"C",s:"#41C700",z:0,o:"211",f:"c"},{y:1,i:"B",s:"#41C700",z:0,o:"211",f:"c"},{y:1,i:"D",s:"#41C700",z:0,o:"211",f:"c"},{y:1,i:"S",s:2,z:0,o:"211",f:"c"},{y:1,i:"T",s:2,z:0,o:"211",f:"c"},{y:1,i:"Q",s:14,z:0,o:"211",f:"c"},{y:1,i:"R",s:"#1840B7",z:0,o:"211",f:"c"}],f:30,b:[]},"71":{j:{"3":[[1036,182,1036,182,1169,187,1169,187]],"1":[[324,112,324,112,737,108,737,108]],"2":[[737,108,737,108,760,116,814,134],[814,134,874,154,1036,182,1036,182]],"0":[[-108,161,-108,161,70,139,166,127],[166,127,273,114,324,112,324,112]]},q:false,z:4,i:"71",n:"splashStart",a:[{f:"c",y:0,z:0.02,i:"e",e:0,s:1,o:"204"},{f:"c",y:0,z:0.05,i:"a",e:319,s:-402,o:"213"},{f:"c",y:0,z:0.02,i:"e",e:0,s:0.74223695,o:"214"},{o:"209",y:0,z:0.21,i:"a",e:199,a:"0",f:"b",s:-233},{o:"209",y:0,z:0.21,i:"b",e:37,a:"0",f:"b",s:86},{f:"c",p:2,y:0.01,z:0.04,i:"ActionHandler",e:{a:[{p:12,o:"39",q:false}]},s:{a:[{p:12,o:"195",q:false}]},o:"71"},{y:0.02,i:"e",s:0,z:0,o:"214",f:"c"},{y:0.02,i:"e",s:0,z:0,o:"204",f:"c"},{f:"c",p:2,y:0.05,z:0.3,i:"ActionHandler",e:{a:[{p:12,o:"39",q:false}]},s:{a:[{p:12,o:"39",q:false}]},o:"71"},{f:"c",y:0.05,z:0.2,i:"a",e:319,s:319,o:"213"},{o:"209",y:0.21,z:1.01,i:"a",e:612,a:"1",f:"b",s:199},{o:"209",y:0.21,z:1.01,i:"b",e:33,a:"1",f:"b",s:37},{f:"c",y:0.25,z:0.05,i:"a",e:1041,s:319,o:"213"},{f:"c",y:1,z:0.05,i:"a",e:306,s:-416,o:"205"},{y:1,i:"a",s:1041,z:0,o:"213",f:"c"},{f:"c",p:2,y:1.05,z:1,i:"ActionHandler",e:{a:[{p:12,o:"39",q:false}]},s:{a:[{p:12,o:"39",q:false}]},o:"71"},{f:"c",y:1.05,z:0.2,i:"a",e:306,s:306,o:"205"},{o:"209",y:1.22,z:0.14,i:"a",e:911,a:"2",f:"b",s:612},{o:"209",y:1.22,z:0.14,i:"b",e:107,a:"2",f:"b",s:33},{f:"c",y:1.25,z:0.05,i:"a",e:1028,s:306,o:"205"},{f:"c",y:2,z:0.05,i:"a",e:303,s:-419,o:"208"},{y:2,i:"a",s:1028,z:0,o:"205",f:"c"},{f:"c",p:2,y:2.05,z:1,i:"ActionHandler",e:{a:[{p:12,o:"39",q:false}]},s:{a:[{p:12,o:"39",q:false}]},o:"71"},{f:"c",y:2.05,z:0.2,i:"a",e:303,s:303,o:"208"},{o:"209",y:2.06,z:0.25,i:"a",e:1044,a:"3",f:"b",s:911},{o:"209",y:2.06,z:0.25,i:"b",e:112,a:"3",f:"b",s:107},{f:"d",y:2.23,z:0.24,i:"a",e:731,s:1033,o:"210"},{f:"d",y:2.23,z:0.24,i:"b",e:89,s:93,o:"210"},{f:"c",y:2.25,z:0.05,i:"a",e:1025,s:303,o:"208"},{f:"c",y:3,z:0.05,i:"a",e:319,s:-419,o:"207"},{y:3,i:"a",s:1025,z:0,o:"208",f:"c"},{y:3.01,i:"a",s:1044,z:0,o:"209",f:"c"},{y:3.01,i:"b",s:112,z:0,o:"209",f:"c"},{f:"c",p:2,y:3.05,z:0.25,i:"ActionHandler",e:{a:[{d:1.1,p:1,g:1,e:"1"}]},s:{a:[{p:12,o:"39",q:false}]},o:"71"},{f:"c",y:3.05,z:0.2,i:"a",e:303,s:319,o:"207"},{y:3.17,i:"a",s:731,z:0,o:"210",f:"c"},{y:3.17,i:"b",s:89,z:0,o:"210",f:"c"},{f:"c",y:3.25,z:0.05,i:"a",e:1025,s:303,o:"207"},{f:"c",p:2,y:4,z:0,i:"ActionHandler",s:{a:[{d:1.1,p:1,g:1,e:"1"}]},o:"71"},{y:4,i:"a",s:1025,z:0,o:"207",f:"c"}],f:30,b:[]},"64_hover":{q:false,z:1,i:"64_hover",n:"64_hover",a:[{f:"c",y:0,z:1,i:"G",e:"#41C700",s:"#FF9300",o:"206"},{f:"c",y:0,z:1,i:"B",e:"#41C700",s:"#FF9300",o:"206"},{f:"c",y:0,z:1,i:"C",e:"#41C700",s:"#FF9300",o:"206"},{f:"c",y:0,z:1,i:"D",e:"#41C700",s:"#FF9300",o:"206"},{f:"c",y:0,z:1,i:"A",e:"#41C700",s:"#FF9300",o:"206"},{f:"c",y:0,z:1,i:"bA",e:"#000",s:"#000",o:"206"},{f:"c",y:0,z:1,i:"bB",e:0,s:0,o:"206"},{f:"c",y:0,z:1,i:"bC",e:0,s:0,o:"206"},{f:"c",y:0,z:1,i:"aZ",e:0,s:0,o:"206"},{f:"c",y:0,z:1,i:"S",e:2,s:2,o:"206"},{f:"c",y:0,z:1,i:"T",e:2,s:2,o:"206"},{f:"c",y:0,z:1,i:"Q",e:14,s:3,o:"206"},{f:"c",y:0,z:1,i:"R",e:"#1840B7",s:"#1840B7",o:"206"},{y:1,i:"G",s:"#41C700",z:0,o:"206",f:"c"},{y:1,i:"B",s:"#41C700",z:0,o:"206",f:"c"},{y:1,i:"C",s:"#41C700",z:0,o:"206",f:"c"},{y:1,i:"D",s:"#41C700",z:0,o:"206",f:"c"},{y:1,i:"A",s:"#41C700",z:0,o:"206",f:"c"},{y:1,i:"bA",s:"#000",z:0,o:"206",f:"c"},{y:1,i:"bB",s:0,z:0,o:"206",f:"c"},{y:1,i:"bC",s:0,z:0,o:"206",f:"c"},{y:1,i:"aZ",s:0,z:0,o:"206",f:"c"},{y:1,i:"S",s:2,z:0,o:"206",f:"c"},{y:1,i:"T",s:2,z:0,o:"206",f:"c"},{y:1,i:"Q",s:14,z:0,o:"206",f:"c"},{y:1,i:"R",s:"#1840B7",z:0,o:"206",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:0.01,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",p:2,y:0.01,z:0,i:"ActionHandler",s:{a:[{p:12,o:"196",q:false}]},o:"kTimelineDefaultIdentifier"}],f:30,b:[]}},bZ:180,O:["216","215","210","209","212","207","208","205","213","214","204","206","211"],n:"Untitled Layout","_":0,v:{"216":{h:"116",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:1,bF:"215",b:-20,d:788,k:"div",c:1024},"205":{aU:8,bB:6,G:"#41C700",b:249,c:404,aV:8,r:"inline",d:354,bC:6,s:"'Gill Sans','Lucida Grande',Helvetica,sans-serif",t:288,Z:"break-word",v:"bold",i:"title4",w:"2",j:"absolute",x:"visible",aZ:4,k:"div",y:"preserve",z:12,aS:8,tX:0.5,aT:8,a:-416,bA:"#1840B7",F:"center",tY:0.5},"211":{b:582,z:10,K:"Solid",c:161,L:"Solid",d:57,gg:"1",M:8,bD:"none",aS:6,N:8,aT:6,dB:"button",O:8,g:"#FFF",aU:6,P:8,Q:3,aV:6,i:"hardButton",R:"#1840B7",j:"absolute",S:2,k:"div",aI:20,T:2,aJ:20,aK:20,aL:20,A:"#FF9300",B:"#FF9300",aM:"66_hover",r:"inline",C:"#FF9300",Z:"break-word",s:"'Gill Sans','Lucida Grande',Helvetica,sans-serif",D:"#FF9300",t:48,F:"center",aA:{a:[{p:4,h:"65"}]},v:"bold",G:"#FF9300",aP:"pointer",w:"HARD",x:"visible",I:"Solid",a:684,y:"preserve",J:"Solid"},"208":{aU:8,bB:6,G:"#41C700",c:404,aV:8,r:"inline",d:354,bC:6,s:"Impact,'Arial Narrow Bold',Sans-Serif",t:288,Z:"break-word",i:"title5",w:"1",j:"absolute",x:"visible",aZ:4,k:"div",y:"preserve",z:13,aS:8,aT:8,a:-419,bA:"#1840B7",F:"center",b:253},"214":{b:288,J:"Solid",K:"Solid",z:3,bC:0,L:"Solid",d:270,gg:"0",M:0,e:0.77301226,c:680,N:0,O:0,g:"#E8EBED",P:0,Q:2,R:"#1840B7",j:"absolute",S:4,k:"div",aI:16,T:4,aJ:16,aK:16,aZ:0,aL:16,A:"#FF2600",B:"#FF2600",r:"inline",C:"#FF2600",D:"#FF2600",w:"",bA:"#000",x:"visible",I:"Solid",a:201,bB:0},"206":{R:"#1840B7",S:2,aI:20,T:2,aJ:20,dB:"button",aK:20,aL:20,aM:"64_hover",Z:"break-word",aP:"pointer",a:242,b:582,c:142,d:57,aS:6,aT:6,g:"#FFF",aU:6,aV:6,i:"easyButton",j:"absolute",k:"div",A:"#FF9300",B:"#FF9300",C:"#FF9300",D:"#FF9300",aZ:0,F:"center",aA:{a:[{p:4,h:"65"}]},G:"#FF9300",r:"inline",s:"'Gill Sans','Lucida Grande',Helvetica,sans-serif",I:"Solid",t:48,J:"Solid",K:"Solid",bA:"#000",v:"bold",L:"Solid",w:"EASY",M:8,bB:0,x:"visible",N:8,bC:0,gg:"1",O:8,y:"preserve",z:9,bD:"none",P:8,Q:3},"212":{J:"None",z:8,K:"None",b:117,bC:4,L:"None",d:161,aS:8,M:0,c:1007,N:0,aT:8,O:0,aU:8,P:0,aV:8,i:"title1",j:"absolute",k:"div",aZ:8,A:"#000",Y:79,B:"#000",Z:"break-word",r:"inline",C:"#000",s:"'Gill Sans','Lucida Grande',Helvetica,sans-serif",D:"#000",t:96,F:"center",v:"bold",G:"#FF9300",w:"<font color=\"#b0c600\">a</font><font color=\"#41c700\">MAZE</font><font color=\"#b0c600\">ing</font><br>Goldfish <font color=\"#41c700\">Escape!</font>",bA:"#1840B7",x:"visible",I:"None",a:15,y:"preserve",bB:5},"209":{p:"no-repeat",b:96,c:250,q:"100% 100%",d:150,r:"inline",gg:"1",f:0,h:"114",j:"absolute",x:"visible",k:"div",dB:"img",bP:"YES",z:16,Q:6,R:"#1840B7",tX:0.5,S:3,a:-263,T:0,tY:0.5},"215":{k:"div",x:"hidden",c:1024,d:768,z:1,a:0,j:"absolute",b:1},"204":{aU:8,bB:2,G:"#FF9300",c:811,aV:8,r:"inline",d:299,e:1,s:"'Gill Sans','Lucida Grande',Helvetica,sans-serif",X:0,bC:2,t:42,Y:51,Z:"break-word",v:"bold",i:"title2",w:"&gt;Use Arrow Keys To Move<br>&gt; Eat Minnows To Get<br>&nbsp; &nbsp;Safely&nbsp;Under a Lilly Pad<br>&gt; Get to the Tall Weeds<br>&nbsp; &nbsp;Before Time Runs Out<br>",j:"absolute",x:"visible",aZ:2,k:"div",y:"preserve",z:7,aS:8,E:0.363636,aT:8,a:237,bA:"#1840B7",F:"left",b:291},"210":{h:"112",p:"no-repeat",x:"visible",R:"#1840B7",q:"100% 100%",b:93,j:"absolute",r:"inline",a:1033,T:3,z:15,d:150,dB:"img",Q:6,S:3,k:"div",c:250,gg:"1"},"213":{aU:8,bB:6,G:"#41C700",c:404,aV:8,r:"inline",d:354,bC:6,s:"'Gill Sans','Lucida Grande',Helvetica,sans-serif",t:288,Z:"break-word",v:"bold",i:"title3",w:"3",j:"absolute",x:"visible",aZ:4,k:"div",y:"preserve",z:11,aS:8,aT:8,a:-403,bA:"#1840B7",F:"center",b:253},"207":{aU:8,bB:6,G:"#FF9300",c:404,aV:8,r:"inline",d:354,bC:6,s:"Impact,'Arial Narrow Bold',Sans-Serif",t:288,Z:"break-word",i:"title6",w:"GO!\n",j:"absolute",x:"visible",aZ:4,k:"div",y:"preserve",z:14,aS:8,aT:8,a:-419,bA:"#1840B7",F:"center",b:251}}},{A:{a:[{p:4,h:"30"}]},o:"3",p:"600px",cA:false,Y:1024,Z:768,C:{a:[{p:4,h:"33"}]},c:"#00FDFF",L:[],bY:1,d:1024,U:{},T:{"52":{j:{"4":[[-455,321,-455,321,452,322,452,322]]},q:false,z:6.15,i:"52",n:"playerWin",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"53",q:false}]},o:"52"},{o:"230",y:0,z:1.15,i:"b",e:5,a:"4",f:"f",s:4},{o:"230",y:0,z:1.15,i:"a",e:4,a:"4",f:"f",s:-903},{f:"c",y:0,z:1.15,i:"f",e:360,s:0,o:"230"},{y:0,i:"e",s:0,z:0,o:"233",f:"c"},{y:1.15,i:"b",s:5,z:0,o:"230",f:"c"},{y:1.15,i:"a",s:4,z:0,o:"230",f:"c"},{y:1.15,i:"f",s:360,z:0,o:"230",f:"c"},{f:"c",y:4,z:0.15,i:"e",e:1,s:0,o:"232"},{y:4.15,i:"e",s:1,z:0,o:"232",f:"c"},{f:"c",y:6,z:0.15,i:"e",e:1,s:0,o:"235"},{y:6.15,i:"e",s:1,z:0,o:"235",f:"c"}],f:30,b:[]},"57":{j:{"5":[[-456,320,-456,320,448,320,448,320]]},q:false,z:6.15,i:"57",n:"playerLose",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"58",q:false}]},o:"57"},{f:"c",y:0,z:1.15,i:"f",e:360,s:0,o:"230"},{o:"230",y:0,z:1.15,i:"a",e:0,a:"5",f:"f",s:-904},{o:"230",y:0,z:1.15,i:"b",e:3,a:"5",f:"f",s:3},{y:0,i:"e",s:1,z:0,o:"233",f:"c"},{y:0,i:"e",s:0,z:0,o:"246",f:"c"},{y:1.15,i:"f",s:360,z:0,o:"230",f:"c"},{y:1.15,i:"b",s:3,z:0,o:"230",f:"c"},{y:1.15,i:"a",s:0,z:0,o:"230",f:"c"},{f:"c",y:4,z:0.15,i:"e",e:1,s:0,o:"232"},{y:4.15,i:"e",s:1,z:0,o:"232",f:"c"},{f:"c",y:6,z:0.15,i:"e",e:1,s:0,o:"235"},{y:6.15,i:"e",s:1,z:0,o:"235",f:"c"}],f:30,b:[]},"42":{q:false,z:0,i:"42",n:"doorOpen",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"201",q:false}]},o:"42"}],f:30,b:[]},"49_hover":{q:false,z:1,i:"49_hover",n:"49_hover",a:[{f:"c",y:0,z:1,i:"A",e:"#41C700",s:"#FF9300",o:"235"},{f:"c",y:0,z:1,i:"G",e:"#41C700",s:"#FF9300",o:"235"},{f:"c",y:0,z:1,i:"C",e:"#41C700",s:"#FF9300",o:"235"},{f:"c",y:0,z:1,i:"B",e:"#41C700",s:"#FF9300",o:"235"},{f:"c",y:0,z:1,i:"D",e:"#41C700",s:"#FF9300",o:"235"},{f:"c",y:0,z:1,i:"S",e:2,s:0,o:"235"},{f:"c",y:0,z:1,i:"T",e:2,s:0,o:"235"},{f:"c",y:0,z:1,i:"Q",e:6,s:0,o:"235"},{f:"c",y:0,z:1,i:"R",e:"#1840B7",s:"#000",o:"235"},{y:1,i:"A",s:"#41C700",z:0,o:"235",f:"c"},{y:1,i:"G",s:"#41C700",z:0,o:"235",f:"c"},{y:1,i:"C",s:"#41C700",z:0,o:"235",f:"c"},{y:1,i:"B",s:"#41C700",z:0,o:"235",f:"c"},{y:1,i:"D",s:"#41C700",z:0,o:"235",f:"c"},{y:1,i:"S",s:2,z:0,o:"235",f:"c"},{y:1,i:"T",s:2,z:0,o:"235",f:"c"},{y:1,i:"Q",s:6,z:0,o:"235",f:"c"},{y:1,i:"R",s:"#1840B7",z:0,o:"235",f:"c"}],f:30,b:[]},"45":{q:false,z:0,i:"45",n:"pickup",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"199",q:false}]},o:"45"}],f:30,b:[]},"43":{q:false,z:0,i:"43",n:"endMaze",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"40",q:false}]},o:"43"}],f:30,b:[]},"48_hover":{q:false,z:1,i:"48_hover",n:"48_hover",a:[{f:"c",y:0,z:1,i:"G",e:"#41C700",s:"#FF9300",o:"232"},{f:"c",y:0,z:1,i:"B",e:"#41C700",s:"#FF9300",o:"232"},{f:"c",y:0,z:1,i:"C",e:"#41C700",s:"#FF9300",o:"232"},{f:"c",y:0,z:1,i:"D",e:"#41C700",s:"#FF9300",o:"232"},{f:"c",y:0,z:1,i:"A",e:"#41C700",s:"#FF9300",o:"232"},{f:"c",y:0,z:1,i:"S",e:2,s:0,o:"232"},{f:"c",y:0,z:1,i:"T",e:2,s:0,o:"232"},{f:"c",y:0,z:1,i:"Q",e:4,s:0,o:"232"},{f:"c",y:0,z:1,i:"R",e:"#1840B7",s:"#000",o:"232"},{y:1,i:"G",s:"#41C700",z:0,o:"232",f:"c"},{y:1,i:"B",s:"#41C700",z:0,o:"232",f:"c"},{y:1,i:"C",s:"#41C700",z:0,o:"232",f:"c"},{y:1,i:"D",s:"#41C700",z:0,o:"232",f:"c"},{y:1,i:"A",s:"#41C700",z:0,o:"232",f:"c"},{y:1,i:"S",s:2,z:0,o:"232",f:"c"},{y:1,i:"T",s:2,z:0,o:"232",f:"c"},{y:1,i:"Q",s:4,z:0,o:"232",f:"c"},{y:1,i:"R",s:"#1840B7",z:0,o:"232",f:"c"}],f:30,b:[]},"41":{q:false,z:0,i:"41",n:"badBeep",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"202",q:false}]},o:"41"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30,b:[]},"44":{q:false,z:0,i:"44",n:"footstep",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"197",q:false}]},o:"44"}],f:30,b:[]}},bZ:180,O:["234","230","242","241","220","245","237","222","228","233","219","231","229","226","236","221","246","239","223","244","225","232","235","240","243","227","238","217","218","224"],n:"Untitled Layout","_":1,v:{"238":{c:1024,d:128,I:"None",J:"None",K:"None",g:"#41C700",L:"None",M:0,i:"bottomBorder",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:0,O:0,C:"#D8DDE4",z:2,k:"div",D:"#D8DDE4",a:0,b:640},"221":{h:"101",p:"no-repeat",x:"visible",a:904,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:18,i:"blueKeyDisplay",b:160,d:49,k:"div",c:80},"242":{h:"99",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:1,bF:"241",b:0,d:1280,i:"mask1",k:"div",c:1792},"234":{h:"116",p:"no-repeat",x:"visible",a:-0.5,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:2,bF:"230",b:-2,d:636,i:"background1",k:"div",c:895},"226":{p:"no-repeat",c:32,q:"100% 100%",d:32,I:"None",J:"None",K:"None",L:"None",h:"104",M:0,i:"greenDoor",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:7,k:"div",D:"#D8DDE4",a:701,b:128},"218":{aU:8,G:"#FFF",c:144,aV:8,r:"inline",d:84,s:"'Gill Sans','Lucida Grande',Helvetica,sans-serif",t:64,Z:"break-word",v:"bold",i:"counter",w:"60",j:"absolute",x:"visible",k:"div",y:"preserve",z:17,aS:8,aT:8,a:864,F:"center",b:640},"239":{c:80,d:50,I:"Solid",J:"Solid",K:"Solid",g:"#00FDFF",L:"Solid",M:10,i:"border2",N:10,A:"#0433FF",x:"visible",j:"absolute",B:"#0433FF",P:10,O:10,C:"#0433FF",z:10,k:"div",D:"#0433FF",a:894,b:300},"230":{Q:6,x:"visible",R:"#1840B7",tY:0.5,b:4,j:"absolute",a:-903,z:26,T:0,i:"gameOverBox",d:634,S:0,k:"div",c:896,f:0,gg:"1",tX:0.5},"222":{h:"172",p:"no-repeat",x:"visible",a:832,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:25,i:"checkeredFlag",b:32,d:32,k:"div",c:32},"243":{c:80,d:50,I:"Solid",J:"Solid",K:"Solid",g:"#00FDFF",L:"Solid",M:10,i:"border3",N:10,A:"#1840B7",x:"visible",j:"absolute",B:"#1840B7",P:10,O:10,C:"#1840B7",z:11,k:"div",D:"#1840B7",a:894,b:450},"235":{b:412,z:8,K:"Solid",c:218,L:"Solid",d:48,gg:"1",M:10,e:0,bD:"none",N:10,aS:6,dB:"button",O:10,g:"#FFF",aU:6,P:10,aT:6,bF:"230",Q:0,aV:6,i:"creditsButton",R:"#000",j:"absolute",S:0,k:"div",aI:25,T:0,aJ:25,aK:25,aL:25,A:"#FF9300",B:"#FF9300",aM:"49_hover",r:"inline",C:"#FF9300",Z:"break-word",s:"'Gill Sans','Lucida Grande',Helvetica,sans-serif",D:"#FF9300",t:36,F:"center",aA:{a:[{d:1.1,p:1,g:1,e:"73"}]},v:"bold",G:"#FF9300",aP:"pointer",w:"CREDITS",x:"visible",I:"Solid",a:511.5,y:"preserve",J:"Solid"},"227":{h:"100",p:"no-repeat",x:"visible",a:904,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:20,i:"greenKeyDisplay",b:458,d:52,k:"div",c:80},"219":{h:"100",p:"no-repeat",x:"visible",a:528,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:15,i:"greenKey",b:70,d:22,k:"div",c:44,f:-180},"231":{aU:8,bB:2,G:"#FF9300",c:816,aV:8,r:"inline",d:124,bC:2,s:"'Gill Sans','Lucida Grande',Helvetica,sans-serif",t:96,Z:"break-word",v:"bold",i:"gameOverMessage",w:"MESSAGE",bF:"230",j:"absolute",x:"visible",aZ:5,k:"div",y:"preserve",z:5,aS:8,aT:8,a:43.5,bA:"#1840B7",F:"center",b:88},"223":{w:"",h:"102",p:"no-repeat",x:"visible",a:903,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:19,b:311,i:"redKeyDisplay",d:49,k:"div",c:82},"244":{p:"no-repeat",c:32,q:"100% 100%",d:32,I:"None",J:"None",K:"None",L:"None",h:"105",M:0,i:"redDoor",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:14,k:"div",D:"#D8DDE4",a:574,b:324},"236":{c:80,d:50,I:"Solid",J:"Solid",K:"Solid",g:"#00FDFF",L:"Solid",M:10,i:"border1",N:10,A:"#0433FF",x:"visible",j:"absolute",B:"#0433FF",P:10,O:10,C:"#0433FF",z:9,k:"div",D:"#0433FF",a:894,b:150},"228":{aU:8,G:"#FFF",c:144,aV:8,r:"inline",d:32,s:"'Gill Sans','Lucida Grande',Helvetica,sans-serif",t:17,Z:"break-word",v:"bold",i:"inventoryTitle",w:"INVENTORY",j:"absolute",x:"visible",k:"div",y:"preserve",z:8,aS:8,aT:8,a:880,F:"center",b:30},"240":{h:"102",p:"no-repeat",x:"visible",a:747,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:16,i:"redKey",b:421,d:22,k:"div",c:44,f:-180},"232":{R:"#000",S:0,bF:"230",aI:25,T:0,aJ:25,dB:"button",aK:25,X:-1.12074,aL:25,Y:47,aM:"48_hover",Z:"break-word",aP:"pointer",a:130.5,b:412,c:254,d:48,aS:6,e:0,aT:6,g:"#FFF",aU:6,aV:6,i:"playAgainButton",j:"absolute",k:"div",A:"#FF9300",B:"#FF9300",C:"#FF9300",D:"#FF9300",F:"center",aA:{a:[{d:1.1,p:1,g:1,e:"59"}]},G:"#FF9300",r:"inline",s:"'Gill Sans','Lucida Grande',Helvetica,sans-serif",I:"Solid",t:36,J:"Solid",K:"Solid",v:"bold",L:"Solid",w:"PLAY AGAIN?",M:10,x:"visible",N:10,gg:"1",O:10,y:"preserve",z:6,bD:"none",P:10,Q:0},"224":{c:790,d:90,r:"inline",I:"None",J:"None",K:"None",g:"#FF9300",L:"None",M:0,i:"thermometer",N:0,A:"#FF2600",x:"visible",j:"absolute",B:"#FF2600",P:0,O:0,C:"#FF2600",z:12,k:"div",D:"#FF2600",a:53,b:645},"245":{h:"203",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:3,i:"map1",b:0,d:640,k:"div",c:896},"237":{c:128,d:768,I:"None",J:"None",K:"None",g:"#41C700",L:"None",M:0,i:"rightBorder",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:0,O:0,C:"#D8DDE4",z:1,k:"div",D:"#D8DDE4",a:896,b:0},"229":{p:"no-repeat",c:32,q:"100% 100%",d:32,I:"None",J:"None",K:"None",L:"None",h:"103",M:0,i:"blueDoor",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:6,k:"div",D:"#D8DDE4",a:257,b:126},"220":{h:"173",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:4,i:"player",b:0,d:32,k:"div",c:32},"241":{x:"hidden",k:"div",c:896,d:640,z:21,i:"maskBox",r:"inline",a:0,j:"absolute",b:0},"233":{p:"no-repeat",c:840,q:"100% 100%",d:580,r:"inline",e:0,gg:"1",h:"177",bF:"230",j:"absolute",x:"visible",k:"div",dB:"img",z:3,Q:5,R:"#1840B7",S:4,a:28.5,T:4,b:36},"225":{h:"101",p:"no-repeat",x:"visible",a:378,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:5,i:"blueKey",b:371,d:22,k:"div",c:44,f:90},"217":{c:780,d:80,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:10,i:"border4",N:10,A:"#0433FF",x:"visible",j:"absolute",B:"#0433FF",k:"div",O:10,C:"#0433FF",z:13,P:10,D:"#0433FF",a:48,b:640},"246":{h:"114",p:"no-repeat",x:"visible",a:145.5,q:"100% 100%",b:206,j:"absolute",r:"inline",z:4,bF:"230",dB:"img",d:349,k:"div",c:580,e:1}}},{o:"84",p:"600px",B:{a:[{p:13,o:"194",q:false}]},cA:false,Z:768,Y:1024,c:"#0433FF",L:[],bY:1,d:1024,U:{},T:{"79_hover":{q:false,z:1,i:"79_hover",n:"79_hover",a:[{f:"c",y:0,z:1,i:"G",e:"#41C700",s:"#FF9300",o:"256"},{f:"c",y:0,z:1,i:"B",e:"#41C700",s:"#FF9300",o:"256"},{f:"c",y:0,z:1,i:"C",e:"#41C700",s:"#FF9300",o:"256"},{f:"c",y:0,z:1,i:"D",e:"#41C700",s:"#FF9300",o:"256"},{f:"c",y:0,z:1,i:"A",e:"#41C700",s:"#FF9300",o:"256"},{f:"c",y:0,z:1,i:"R",e:"#1840B7",s:"#1840B7",o:"256"},{f:"c",y:0,z:1,i:"Q",e:14,s:3,o:"256"},{y:1,i:"G",s:"#41C700",z:0,o:"256",f:"c"},{y:1,i:"B",s:"#41C700",z:0,o:"256",f:"c"},{y:1,i:"C",s:"#41C700",z:0,o:"256",f:"c"},{y:1,i:"D",s:"#41C700",z:0,o:"256",f:"c"},{y:1,i:"A",s:"#41C700",z:0,o:"256",f:"c"},{y:1,i:"R",s:"#1840B7",z:0,o:"256",f:"c"},{y:1,i:"Q",s:14,z:0,o:"256",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{j:{"6":[[556,610,556,610,560,-456,560,-456]]},q:false,z:19.21,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"194",q:false}]},o:"kTimelineDefaultIdentifier"},{o:"253",y:0,z:19.21,i:"a",e:48,a:"6",f:"b",s:44},{o:"253",y:0,z:19.21,i:"b",e:-1056,a:"6",f:"b",s:10},{f:"c",y:17.03,z:2,i:"e",e:-0.23,s:0.77,o:"247"},{y:19.03,i:"e",s:-0.23,z:0,o:"247",f:"c"},{y:19.21,i:"a",s:48,z:0,o:"253",f:"c"},{y:19.21,i:"b",s:-1056,z:0,o:"253",f:"c"}],f:30,b:[]}},bZ:180,O:["253","255","257","254","249","248","250","251","252","247","256"],n:"Untitled Layout","_":2,v:{"252":{x:"hidden",k:"div",c:1024,d:283,z:4,i:"outerContainer",a:0,j:"absolute",b:289},"255":{aU:8,bB:2,G:"#FF9300",c:1008,aV:8,r:"inline",d:84,e:1,s:"'Gill Sans','Lucida Grande',Helvetica,sans-serif",bC:2,t:48,Z:"break-word",v:"bold",i:"credits2",w:"CREDITS\n",bF:"253",j:"absolute",x:"visible",aZ:2,k:"div",y:"preserve",z:1,aS:8,aT:8,a:0,bA:"#1840B7",F:"center",b:30},"248":{k:"div",x:"hidden",c:1024,d:768,z:1,a:1,j:"absolute",b:1},"251":{J:"None",z:6,K:"None",b:117,bC:4,L:"None",d:161,aS:8,M:0,c:1007,N:0,aT:8,O:0,aU:8,P:0,aV:8,j:"absolute",k:"div",aZ:8,A:"#000",Y:79,B:"#000",Z:"break-word",r:"inline",C:"#000",s:"'Gill Sans','Lucida Grande',Helvetica,sans-serif",D:"#000",t:96,F:"center",v:"bold",G:"#FF9300",w:"<font color=\"#b0c600\">a</font><font color=\"#41c700\">MAZE</font><font color=\"#b0c600\">ing</font><br>Goldfish <font color=\"#41c700\">Escape!</font>",bA:"#1840B7",x:"visible",I:"None",a:15,y:"preserve",bB:5},"254":{aU:8,bB:1,G:"#FF9300",c:432,aV:8,r:"inline",d:974,e:1,s:"'Gill Sans','Lucida Grande',Helvetica,sans-serif",bC:1,t:48,Y:73,Z:"break-word",i:"credits4",w:"Tina Murphy<br>Melle Teich (Pixabay)<br>TearOfTheStar @<br>&nbsp; opengameart.org<br>&nbsp;Darren Pearson<br>\nSaint Paul College<br>Tad<font size=\"6\">@</font><span style=\"font-size: 41px;\">Opengameart.org<br></span>Garageband<br>\nAmanda Delso<br>\nGreg Gengler<br>\nDairy Queen<br>Mela Thai Food&nbsp;",bF:"253",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:3,aS:8,aT:8,a:450.3112598,bA:"#1840B7",F:"left",b:114.04926346},"257":{aU:8,bB:1,G:"#FF9300",c:396,aV:8,r:"inline",d:884,e:1,s:"'Gill Sans','Lucida Grande',Helvetica,sans-serif",bC:1,t:48,Y:73,Z:"break-word",i:"credits3",w:"Designed by<br>Art by<br><br>&nbsp;<br>Javascript by<br>\nDeveloped at<br>\nAudio Resources<br><br>&nbsp;Usability Testers<br>\n<br>\nSpecial Thanks to<br>\n<br>\n<br>\n\n",bF:"253",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:2,aS:8,aT:8,a:96,bA:"#1840B7",F:"left",b:115},"247":{b:288,J:"Solid",K:"Solid",z:2,bC:0,L:"Solid",d:284,gg:"0",M:0,e:0.77,c:810,N:0,O:0,g:"#E8EBED",P:0,Q:2,R:"#1840B7",j:"absolute",S:4,k:"div",aI:16,T:4,aJ:16,aK:16,aZ:0,aL:16,A:"#FF2600",B:"#FF2600",r:"inline",C:"#FF2600",D:"#FF2600",w:"",bA:"#000",x:"visible",I:"Solid",a:115,bB:0},"250":{h:"112",p:"no-repeat",x:"visible",R:"#1840B7",q:"100% 100%",b:89,j:"absolute",r:"inline",a:731,T:3,z:7,d:150,dB:"img",Q:6,S:3,k:"div",c:250,gg:"1"},"253":{x:"visible",tY:0.5,i:"creditRoll",b:10,a:44,bF:"252",c:1024,k:"div",z:1,d:1200,j:"absolute",tX:0.5},"256":{b:1156,z:4,K:"Solid",c:326,L:"Solid",d:62,gg:"1",M:8,bD:"none",aS:6,N:8,aT:6,dB:"button",O:8,g:"#FFF",aU:6,P:8,bF:"253",Q:3,aV:6,i:"restartButton",R:"#1840B7",j:"absolute",S:2,k:"div",aI:20,T:2,aJ:20,aK:20,aL:20,A:"#FF9300",B:"#FF9300",aM:"79_hover",r:"inline",C:"#FF9300",Z:"break-word",s:"Impact,'Arial Narrow Bold',Sans-Serif",D:"#FF9300",t:48,F:"center",aA:{a:[{d:1.1,p:1,g:1,e:"59"}]},G:"#FF9300",aP:"pointer",w:"PLAY AGAIN?",x:"visible",I:"Solid",a:304,y:"preserve",J:"Solid"},"249":{w:"",h:"116",p:"no-repeat",x:"visible",a:-24,q:"100% 100%",b:-20,j:"absolute",r:"inline",z:1,bF:"248",dB:"img",d:788,k:"div",c:1064}}}],{},h,{f:{p:0,q:[[0,0,0.1971,0,0.3391,0.8944,0.3636,1],[0.3636,1,0.3636,1,0.4425,0.75,0.5455,0.75],[0.5455,0.75,0.6519,0.75,0.7273,1,0.7273,1],[0.7273,1,0.7273,1,0.7718,0.9375,0.8182,0.9375],[0.8182,0.9375,0.8646,0.9375,0.9091,1,0.9091,1],[0.9091,1,0.9091,1,0.9294,0.9844,0.9546,0.9844],[0.9546,0.9844,0.9798,0.9844,1,1,1,1]]}},null,false,true,-1,true,true,false,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
