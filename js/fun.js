function fun(n,o){
	console.log(o);
	return {
	    fun:function(m){
	    	return fun(m,n)
	    }
	}
}