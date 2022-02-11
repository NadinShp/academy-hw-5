export default function testInput(input){
    const reg = /\d{1,3}-\d{1,4}/;
    return input.match(reg);
}