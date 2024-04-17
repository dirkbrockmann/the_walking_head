// the global properties of the explorable, widget geometries etc. depending on the choice and application
// you are free to define new variables and properties for later access and for setting up the explorable
// the only place this is needed is for setting up the interactions in setup_interactions.js and in
// controls.js

export default { 
	widgets:{
		slider_size: 300,
		slider_show: true,
		slider_gap : 1.5,
		slider_anchor: {x:1,y:8.5},
		slider_girth: 10,
		slider_knob:14,
		
		toggle_anchor: {x:6.5,y:1.5},
		toggle_label_pos:"right",
		toggle_gap:1.5,
		toggle_size:12,
		
		playbutton_size: 120,
		playbutton_anchor:{x:3,y:2},
		backbutton_anchor:{x:4,y:4.5},
		resetbutton_anchor:{x:2,y:4.5},
		
		radio_anchor:{x:2,y:6.5},
		radio_size:300,
		radio_orientation:"horizontal",
		radio_label_position:"top",
		radio_shape:"circ",
		radio_buttonsize: 36,
		
		sym_radio_anchor:{x:9.5,y:8.5},
		sym_radio_size:72,
		sym_radio_orientation:"vertical",
		sym_radio_label_position:"right",
		sym_radio_shape:"rect",
		sym_radio_buttonsize: 24,
	},
	simulation: {
		delay:0
	}
}