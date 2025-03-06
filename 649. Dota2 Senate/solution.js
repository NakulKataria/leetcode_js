function predictPartyVictory(senate) {
    let radiantQueue = [];
    let direQueue = [];
    let n = senate.length;

   
    for (let i = 0; i < n; i++) {
        if (senate[i] === 'R') {
            radiantQueue.push(i);
        } else {
            direQueue.push(i);
        }
    }

    while (radiantQueue.length > 0 && direQueue.length > 0) {
        let rIndex = radiantQueue.shift(); 
        let dIndex = direQueue.shift();

        
        if (rIndex < dIndex) {
            radiantQueue.push(rIndex + n); 
        } else {
            direQueue.push(dIndex + n);
        }
    }

    return radiantQueue.length > 0 ? "Radiant" : "Dire";
}