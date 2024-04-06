// here all functions are connected to the widgets, these functions can be defined here, like the 
// startstop function connected to the go button, or they can be functions defined elsewhere,
// like the initialization functions, or reset parameter functions. Regardless, here
// all functions that need to be execuded for example if a controls element is modified, are connected
// to the update() method of an widget object. See below.


import {interval} from "d3"
import * as ct from "./controls.js"
import cfg from "./config.js"
import param from "./parameters.js"
import resetparameters from "./reset_parameters.js"
import {iterate,initialize,update} from "./simulation.js"
import {obstacles} from "./obstacles.js"
import {filter,each} from "lodash-es"
import {agents} from "./model.js"

var timer = {}

// this defines a startstop simulation function that execute the function iterate() that is defined in simulation.js
// it also uses information defined in config.js, in this case the delay time between iteration steps.

const startstop = (display,config) => {
	ct.go.value() == 1 ? timer = interval(()=>iterate(display,config),cfg.simulation.delay) : timer.stop()

}


// this function is called by index.js to connect actions and update functions to the explorables.
// once this is called, all widgets are usable in the controls panel

export default (display,controls,config) => {
	
	const toggle_obs = (v,name) => {
		each(filter(obstacles,q=>{return q.name==name}),o=>{o.active=v})
		update(display,config,true)
	}
	const updatespeed = () => {
		agents.forEach(function(n){
			n.v0=param.mean_speed.widget.value()*(1+param.speed_variability.widget.value()*(n.dv0))
		})
	}
	
	ct.reset.update(()=>resetparameters(controls))	// one button gets the resetparameters() method defined in resetparameters.js
	ct.go.update(() => startstop(display,config)) // one button gets the startstop function defined above
	ct.setup.update(() => initialize(display,config)) // this once gets the initialize() method defined in simulation.js
	param.mean_speed.widget.update(updatespeed);
	
	param.number_of_walkers.widget.update(()=>update(display,config,true))
	
	param.directional_bias.widget.update(()=>update(display,config,false))
	param.symbols.widget.update(()=>update(display,config,false))
		
	param.single_large_obstacle.widget
		.update(()=>toggle_obs(param.single_large_obstacle.widget.value(),"obs1"))
	param.two_smaller_obstacles.widget
		.update(()=>toggle_obs(param.two_smaller_obstacles.widget.value(),"obs2"))
	param.three_diagonal_obstacles.widget
		.update(()=>toggle_obs(param.three_diagonal_obstacles.widget.value(),"obs3")) 
}

