export default {
	'/handler/': function({get}) {
		// console.log(get);
        var result = Number(get.num1) + Number(get.num2)+ Number(get.num3);
        return result;
	}
}