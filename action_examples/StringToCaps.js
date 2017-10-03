function main(params) {
    
    var name = params.name; // String
    var surname = params.surname; // String
    var test = params.test;// Array []
    var orig_str = name + "-" + surname;
    name = name.toUpperCase() + "-" + surname + "-" + test[0] + "-" + new Date().toISOString();
    //name = name.toUpperCase() + "-" + surname + "-"  + new Date().toISOString();
    return {orig:  orig_str, result: name};
}
