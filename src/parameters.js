// this object defines the parameters of the model
// - constants
// - variables (connected to sliders) properties range and default
// - choices (connected to radios) properties choices and default
// - switches (connected to toggles) property default
// utils.js provides methods for extracting various types of parameters for later use

export default {
		dt:0.03,
		tau:0.05,
		M:1,
		B:2,
		A:300,
		radius:0.5,
		R1:20,
		R2:48,
		twist: 0.0,
		person_scale:0.16,
		k:0,
		kappa:0,
		L:50,
		agentsize: 1.0,
	
		mean_speed: {
			range:[3,10],
			default:6,
			label:"Geschwindigkeit"
		},
		speed_variability:{
			range : [0,0.3],
			default : 0.1,
			label: "Variabilität Geschwindigkeit"
		},
		directional_bias:{
			range : [-200,200],
			default : 0,
			label: "Richtungsverteilung"
		},
		number_of_walkers : {
			choices:[25,50,100,200],
		default:1,
			label:"Personen"
		},
		symbols : {
			choices:["Köpfe","Kreise","Manlios"],
		default:0
		},
		three_diagonal_obstacles: {
		default: false,
		label:"Drei Hindernisse"
		},
		two_smaller_obstacles: {
			default: false,
		label:"Zwei Hindernisse"
		},
		single_large_obstacle: {
		default: false,
		label:"Ein großes Hindernis"
		}	
		
}

