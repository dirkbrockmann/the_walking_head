import * as d3 from "d3"
import param from "./parameters.js"
import {agents} from "./model.js"
import styles from "./styles.module.css"
import attach_head from "./cartoon.js"
import {obstacles} from "./obstacles.js"
import manlio from './manlio.png';


console.log(manlio)

const L = param.L;
const person_scale = param.person_scale;

var X = d3.scaleLinear().domain([-L,L]);
var Y = d3.scaleLinear().domain([-L,L]);

var node;

const initialize = (display,config) => {

	const W = config.display_size.width;
	const H = config.display_size.height;
	
	X.range([-W/2,W/2]);
	Y.range([-H/2,H/2]);
	
	const N_walkers = param.number_of_walkers.choices[param.number_of_walkers.widget.value()];
		
	display.selectAll("#origin").remove();
	
	const origin = display.append("g")
		.attr("id","origin")
		.attr("transform","translate("+W/2+","+H/2+")")
	
	origin.append("circle")
		.attr("r",X(param.R2))
		.style("stroke","black")
		.attr("class",styles.arena)
	
	node = origin.selectAll("."+styles.node)
		.data(agents).enter().append("g")
		.attr("class",styles.node)
		.attr("transform",d=>"translate("+X(d.x)+","+Y(d.y)+")rotate("+(180-d.heading*180/Math.PI)+")")
		.style("opacity",function(d,i){return i < N_walkers ? 1 : 0})
		.classed(styles["left"],d=>d.direction)
		.classed(styles["right"],d=>!d.direction)

	node.append("circle")
		.attr("r",X(1))
		.attr("class",styles.mulch)
	
	const person = node.append("g")
		.attr("class",styles.person)
	
	attach_head(person)

	node.append('image')
		.attr("xlink:href", manlio)
		.attr('width', 30)
		.attr('height', 30)
		.attr('x',-15)
		.attr('y',-15)
		.attr("class",styles.manlio)

	const obstacle = origin.selectAll("."+styles.obstacle)
	.data(obstacles).enter()
	.append("circle")
	.attr("class",d => styles.obstacle+" "+styles[d.name]).attr("r",d=>X(d.R))
	.attr("cx",d=>X(d.x))
	.attr("cy",d=>Y(d.y))
	.style("opacity",function(d){return d.active==true?1:0})
	
	
	display.selectAll("#origin").selectAll("."+styles.person)
			.style("opacity",param.symbols.widget.value()==0?1:0)

	display.selectAll("#origin").selectAll("."+styles.mulch)
			.style("opacity",param.symbols.widget.value()==1?1:0)
	
	display.selectAll("#origin").selectAll("."+styles.manlio)
			.style("opacity",param.symbols.widget.value()==2?1:0)

	
};


const go = (display,config) => {
	
	const N_walkers = param.number_of_walkers.choices[param.number_of_walkers.widget.value()];
	
	display.selectAll("#origin").selectAll("."+styles.node)
		.attr("transform",d=>"translate("+X(d.x)+","+Y(d.y)+")rotate("+(180-d.heading*180/Math.PI)+")")
		.style("opacity",function(d,i){return i < N_walkers ? 1 : 0})
	
}


const update = (display,config) => {
	
	const N_walkers = param.number_of_walkers.choices[param.number_of_walkers.widget.value()];
	
	display.selectAll("#origin").selectAll("."+styles.obstacle)
		.style("opacity",function(d){return d.active==true?1:0})
	
	display.selectAll("#origin").selectAll("."+styles.node)
		.attr("transform",d=>"translate("+X(d.x)+","+Y(d.y)+")rotate("+(180-d.heading*180/Math.PI)+")")
		.style("opacity",function(d,i){return i < N_walkers ? 1 : 0})
		.classed(styles["left"],d=>d.direction)
		.classed(styles["right"],d=>!d.direction)
	
	
	display.selectAll("#origin").selectAll("."+styles.person)
			.style("opacity",param.symbols.widget.value()==0?1:0)

	display.selectAll("#origin").selectAll("."+styles.mulch)
			.style("opacity",param.symbols.widget.value()==1?1:0)
	
	display.selectAll("#origin").selectAll("."+styles.manlio)
			.style("opacity",param.symbols.widget.value()==2?1:0)

}





export {initialize,go,update}
