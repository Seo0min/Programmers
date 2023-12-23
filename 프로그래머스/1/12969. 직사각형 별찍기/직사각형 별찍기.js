process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const m = data.split(" ");
    const a = Number(n[0])
    const b = Number(n[1]); 
    let star = "";
    for (let i=0; i<b; i++) { //세로 길이
        for (let j=0; j<a; j++) //가로 길이 
            star += "*"
            star += "\n"; // 가로 끝나면 줄 바꾸기
           
    }
    console.log(star);
});
   
