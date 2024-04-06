import styles from "./styles.module.css"
import param from "./parameters.js"


const person_scale = param.person_scale;

const p_transform="matrix(0.1,0,0,-0.1,-52,66)"
	
const p_shoulder = "M 170 844.882812 L 870 844.882812 C 952.8125 844.882812 1020 762.578125 1020 661.171875 C 1020 559.765625 952.8125 477.421875 870 477.421875 L 170 477.421875 C 87.1875 477.421875 20 559.765625 20 661.171875 C 20 762.578125 87.1875 844.882812 170 844.882812 Z M 170 844.882812"

const p_nose  = "M 562.34375 1270.507812 C 589.609375 1217.8125 589.609375 1132.421875 562.34375 1079.726562 C 535.117188 1027.070312 490.9375 1027.070312 463.671875 1079.726562 C 436.445312 1132.421875 436.445312 1217.8125 463.671875 1270.507812 C 490.9375 1323.164062 535.117188 1323.164062 562.34375 1270.507812 "	
	
const p_head = "M 741.875 1040.820312 C 870.859375 855.546875 870.859375 555.15625 741.875 369.882812 C 612.929688 184.609375 403.828125 184.609375 274.84375 369.882812 C 145.898438 555.15625 145.898438 855.546875 274.84375 1040.820312 C 403.828125 1226.09375 612.929688 1226.09375 741.875 1040.820312 "
	
const p_hair = [
	"M 247.890625 841.757812 L 251.523438 230.9375 ", 
	"M 313.007812 751.875 L 316.601562 141.015625 ", 
	"M 378.125 751.875 L 381.71875 141.015625 ",
	"M 443.242188 751.875 L 446.835938 141.015625 ",
	"M 508.359375 710 L 511.953125 99.179688 ",
	"M 573.476562 751.875 L 577.070312 141.015625 ",
	"M 638.59375 798.359375 L 642.1875 187.539062 ",
	"M 703.710938 844.882812 L 707.304688 234.0625 ", 
	"M 768.828125 891.40625 L 772.421875 280.546875 "
]
const p_eye = [
	"M 69.257812 27.300781 C 71.984375 30.023438 71.984375 34.441406 69.257812 37.164062 C 66.535156 39.890625 62.117188 39.890625 59.390625 37.164062 C 56.667969 34.441406 56.667969 30.023438 59.390625 27.300781 C 62.117188 24.574219 66.535156 24.574219 69.257812 27.300781 ",
	"M 43.210938 27.300781 C 45.9375 30.023438 45.9375 34.441406 43.210938 37.164062 C 40.488281 39.890625 36.070312 39.890625 33.34375 37.164062 C 30.621094 34.441406 30.621094 30.023438 33.34375 27.300781 C 36.070312 24.574219 40.488281 24.574219 43.210938 27.300781 "
]

export default (person) => {
	
	person.append("path")
		//.attr("class",d => d.direction ? styles.left : styles.right)
		.attr("d",p_shoulder).attr("transform","scale("+person_scale+")"+p_transform)
		.classed(styles.shoulder,true)

	person.append("path")
		.attr("d",p_nose).attr("transform","scale("+person_scale+")"+p_transform)
		//.attr("class",d => d.direction ? styles.left : styles.right)
		.classed(styles.nose,true)
		.style("opacity",param.symbols.widget.value()==0?1:0)

	person.append("path")
		.attr("d",p_head)
		.attr("transform","scale("+person_scale+")"+p_transform)
		//.attr("class",d => d.direction ? styles.left : styles.right)
		.classed(styles.head,true)
		
	person.selectAll("."+styles.hair)
		.data(p_hair).enter().append("path")
		.attr("class",styles.hair)
		.attr("d",d=>d)
		.attr("transform","scale("+person_scale+")"+p_transform)

	person.selectAll("."+styles.eye).data(p_eye).enter()
		.append("path")
		.attr("class",styles.eye)
		.attr("d",d=>d)
		.attr("transform","scale("+person_scale+")"+"matrix(1,0,0,1,-52,-66)")
}

