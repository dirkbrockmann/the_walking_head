// this is a module that contains most of the explorable specific code
// the "math" of the explorable, the model itself, without the elements
// of visualization which are done in viz.js

import param from "./parameters.js"
import {obstacles} from "./obstacles.js"
import {each,range,map,shuffle,filter} from "lodash-es"
import {lv,dist,theta_func} from "./utils.js"
import {randomNormal} from "d3"
 

const L = param.L;
const dt = param.dt;
const R1 = param.R1;
const R2 = param.R2;
const twist = param.twist;

const max_N = param.number_of_walkers.choices[3];

const rd = randomNormal(0,1);

var agents = [];


function target_velocity(node){
	let l = lv(node.x,node.y);	
	let nx = node.x/l;
	let ny = node.y/l;
	
	
	if(node.direction==0){
		node.v0x = node.v0*(Math.cos(Math.PI/2+twist)*nx - Math.sin(Math.PI/2+twist)* ny);
		node.v0y = node.v0*(Math.sin(Math.PI/2+twist)*nx + Math.cos(Math.PI/2+twist)* ny);
	} else {
		node.v0x = node.v0*(Math.cos(-Math.PI/2-twist)*nx - Math.sin(-Math.PI/2-twist)* ny);
		node.v0y = node.v0*(Math.sin(-Math.PI/2-twist)*nx + Math.cos(-Math.PI/2-twist)* ny);	
	}
}


const initialize = () => {

	// set/reset timer
	param.timer={}; param.tick=0;
		
	agents = map(range(max_N), i => {
		let r = R1+2+(R2-R1-4)*Math.random();
		let theta = 2*Math.PI*Math.random();
		let dv0 = rd();
		  return {
		    index: i,
			direction: i < max_N / 2 ? 1 : 0,
			theta: theta,
			r: r,
			x: r * Math.cos(theta),
			y: r * Math.sin(theta),  
			dx : 0,
			dy : 0,
			dvx : 0,
			dvy : 0,
			vx:0,
			vy:0,
			M : param.M,
			tau: param.tau,
			A: param.A,
			B: param.B,
			R: param.radius,
			dv0: dv0,
			v0: param.mean_speed.widget.value()*(1+param.speed_variability.widget.value()*(dv0))
		  };
	});
	
	agents = shuffle(agents)
	
	each(agents,a => {a.direction = a.index < max_N / 2 ? 1 : 0})
	
	each(agents,a => {
		target_velocity(a)
		a.vx=a.v0x;
		a.vy=a.v0y;
		a.heading=Math.atan2(a.vx,a.vy)
	})
	
	relax()

	
};


const go  = () => {
	param.tick++;
	update_state(param.number_of_walkers.choices[param.number_of_walkers.widget.value()]);
}


const update = (r) => {	
	if(r) {relax()}
	setdirection()	
}


function relax(){
	const A0 = param.A;
	const T0 = 100;
	let i = 0
	param.A = 5

	each(agents,n=>{n.v0=0,n.A=param.A})
	while (i < T0) {
	  update_state(max_N)		
	  i++;
	}
	param.A = A0 
	each(agents,n=>{
		n.v0 = param.mean_speed.widget.value()*(1+param.speed_variability.widget.value()*(n.dv0))
		n.A = A0
	})	
}

function setdirection(){
	const x = param.directional_bias.widget.value();

	if ( x >= 0 ){
		const z = Math.floor(x);
		each(agents,d => {
			if (d.index<z ){
				d.direction = 0
			} 
			else {
				d.direction = d.index % 2 == 0 ? 0 : 1
			}
			target_velocity(d)
		})
	} else {
		let z = Math.floor(-x);		
		each(agents,d=>{
			if (d.index < z ){
				d.direction = 1;
			} else {
				d.direction = d.index % 2 == 0 ? 0 : 1;
			}				
			target_velocity(d)
		})
	}
}


function update_state(M){

	const active = filter(agents,(d,i) => {return i<M});
	const active_obstacles = filter(obstacles,d=>{return d.active == true});

	each(active,n => {
		n.dx = n.vx;
		n.dy = n.vy;
		n.dvx = n.M / n.tau * (n.v0x - n.vx)
		n.dvy = n.M / n.tau * (n.v0y - n.vy)
		let fx = 0;
		let fy = 0;
	
		each(active,m => {
			let d_nm = dist(n,m);
			let ddx = (n.x-m.x)/d_nm;
			let ddy = (n.y-m.y)/d_nm;
			let dtx = - ddy;
			let dty = ddx;
			let dvnm = (m.vx-n.vx)*dtx+(m.vy-n.vy)*dty;

			if(m.index != n.index){
						
				let f = n.A*Math.exp( (n.R+m.R-d_nm)/(n.B) ) + param.k * theta_func (2*param.radius-d_nm)
				let f_tangent = param.kappa * theta_func (2*param.radius-d_nm)*((m.vx-n.vx)*dtx+(m.vx-n.vx)*dty)
			
				fx += f*ddx+f_tangent*dtx
				fy += f*ddy+f_tangent*dty
			}
		})
	
	
		each(active_obstacles,m=>{
			let d_nm = dist(n,m);
			let ddx = (n.x-m.x)/d_nm;
			let ddy = (n.y-m.y)/d_nm;
			let f = 2.5*n.A*Math.exp( (n.R+m.R-d_nm)/(n.B) )			
			fx += f*ddx
			fy += f*ddy
		})

		let d = lv(n.x,n.y)
		let f = 2.5*n.A*Math.exp( (n.R-(param.R2-d))/(n.B) )

		fx-=f*n.x/lv(n.x,n.y);
		fy-=f*n.y/lv(n.x,n.y);
		n.dvx+=fx;
		n.dvy+=fy;	
		n.dx*=dt;
		n.dy*=dt;
		n.dvx*=dt;
		n.dvy*=dt;
	})

	each(active,n=>{
		n.x+=n.dx;
		n.y+=n.dy;
		n.r=lv(n.x,n.y);		
		n.vx+=n.dvx;
		n.vy+=n.dvy;	
		target_velocity(n)
		n.heading=Math.atan2(n.vx,n.vy)
		n.theta=Math.atan2(n.x,n.y)
	})


}

export {agents,initialize,go,update}
