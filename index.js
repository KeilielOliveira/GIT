const HelloWorld = "Hello World!";

msg(hello());

function hello() {
    return HelloWorld;
}

function msg(msg) {
    console.log(msg);
}