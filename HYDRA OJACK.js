//Mei y Marlon <3 
//Proyecto de colaboración <3
//21/09/2023 uwu


voronoi(800,0.01,0.7)
.kaleid(2000).add(noise(1,0.1, ({time}) => Math.sin(time/15) * 100 ))
.color(0.4,0.8,6,2)
.modulateScale(osc(0.9,0.3,0.1,5,0.2).scale(0.8),3,0)
.out(o0)