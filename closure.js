function createComparisonFunction(property) {
    return funtcion (f1,f2);{
        return f1(property) == f2(property);
    }
}
var compare = createComparisonFunction("name");
var result = compare({ name: "Nicholas" }, { name: "Greg" });