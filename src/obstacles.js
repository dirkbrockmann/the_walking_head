import param from "./parameters.js"
import {lv} from "./utils.js"

const R1 = param.R1;
const R2 = param.R2;

const obstacle1 = { // single large obstacle
	R:8,
	r:(R1+R2)/2,
	x: (R1+R2)/2 * Math.cos(0),
	y: (R1+R2)/2 * Math.sin(0),
	sign: 1,
	name:"obs1",
	active:param.single_large_obstacle.widget.value()
}

var obstacle2 = { // central obstacle
	R:20,
	r:0,
	x: 0,
	y: 0,  
	sign: 1,
	name:"obs0",
	active:true
		
}

var obstacle3 = { // one of two smaller obstacles
	R:4,
	r:R1+(28-4*4)/3+4,
	x: (R1+(28-4*4)/3+4) * Math.cos(Math.PI),
	y: (R1+(28-4*4)/3+4) * Math.sin(Math.PI),
	sign: 1 ,
	name:"obs2",
	active:param.two_smaller_obstacles.widget.value()
}

var obstacle4 = { // one of two smaller obstacles
	R:4,
	r:R1+2*(28-4*4)/3+3*4,
	x: (R1+2*(28-4*4)/3+3*4) * Math.cos(Math.PI),
	y: (R1+2*(28-4*4)/3+3*4) * Math.sin(Math.PI),
	sign: 1 ,
	name:"obs2",
	active:param.two_smaller_obstacles.widget.value()
}

var obstacle5 = {
	R:3,
	r:(R1+R2)/2,
	x: (R1+R2)/2 * Math.cos(-Math.PI/2),
	y: (R1+R2)/2 * Math.sin(-Math.PI/2),
	sign: 1  ,
	name:"obs3",
	active:param.three_diagonal_obstacles.widget.value()
}

var obstacle6 = {
	R:3,
	r:(R1+R2)/2,
	x: (R1+R2)/2 * Math.cos(-Math.PI/2)-2*3,
	y: (R1+R2)/2 * Math.sin(-Math.PI/2)-2*3,
	sign: 1  ,
	name:"obs3",
	active:param.three_diagonal_obstacles.widget.value()
}

var obstacle7 = {
	R:3,
	r:(R1+R2)/2,
	x: (R1+R2)/2 * Math.cos(-Math.PI/2)+2*3,
	y: (R1+R2)/2 * Math.sin(-Math.PI/2)+2*3,
	sign: 1  ,
	name:"obs3",
	active:param.three_diagonal_obstacles.widget.value()
}

obstacle6.r=lv(obstacle6.x,obstacle6.y)
obstacle7.r=lv(obstacle7.x,obstacle7.y)

var obstacles = [];
obstacles.push(obstacle1)
obstacles.push(obstacle2)
obstacles.push(obstacle3)
obstacles.push(obstacle4)
obstacles.push(obstacle5)
obstacles.push(obstacle6)
obstacles.push(obstacle7)


export {obstacles}