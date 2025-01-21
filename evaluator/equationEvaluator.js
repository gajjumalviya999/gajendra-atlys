export const equationEvaluator = (value=0,equations=[]) => {
    let CurrentValue=value;
    let res;
    if(equations.length>0){
        for(let i=0;i<equations.length;i++){
            res= evaluate(equations[i],CurrentValue);
            if(res!=="Error"){
                CurrentValue=res;
            }else {
                return `Invalid Expression in function ${i+1} equation`
            }
        }
        
    }
    return CurrentValue;
}

function evaluate(expression, x) {
    if(expression!==""){
        try {
            const sanitizedExpression = expression.replace(/(\d)(x)/g, "$1*$2").replace(/(\))(\d)/g, "$1*$2").replace(/\^/g, "**");
            const result = eval(sanitizedExpression);
            return result;
        } catch (error) {
            // If an error occurs, the expression is invalid
            console.error("Invalid expression:", error.message);
            return "Error";
        }
    }
    return x;
}