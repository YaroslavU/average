export default {
	'/handler/': function({get}) {
        let arr = [5, 4, 3, 2, 1]
        for(var i = 0; i < arr.length; i++) {
            if(get.num == i){
            return arr[i];
            }
        }
	}
}