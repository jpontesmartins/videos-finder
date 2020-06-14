
function calculateDaysToWatch(videos, week) {

    console.log(videos);
    console.log(`length videos: ${videos.length}`);
    
    let sair = false;
    let w = 0;
    let d = 0;
    let days = 0;
    // w
    while (!sair) {
        console.log("AAA");
        console.log("w: " + w);
        if (w >=2) {
            sair = true;
        }
        const tempoDisponivel = week[w];
        if (!tempoDisponivel) {
            sair = true;
            return;
        }
        console.log(`tempo disponivel no dia: ${tempoDisponivel}`);
        
        let sum = 0;
        let sair2 = false

        // d
        while (!sair2) {
        
            sum += videos[d];
            console.log(`sum: ${sum}`);
            console.log(`${tempoDisponivel} > ${sum}`);
            console.log(`w: ${w}`);
            console.log(`d: ${d}`);
            console.log(`----------------------------`);
            
            if (tempoDisponivel > sum) {
                console.log("TEMPO > SUM");
                d++;
                console.log(days);
            } else if (tempoDisponivel < sum) {
                console.log("TEMPO < SUM");
                days++;
                sum = 0;
                // sair2 = true;
                // return;
                console.log(`PROBLEM!!!  ${w}`);
                w++;
                if (w == week.length-1) {
                    w = 0;
                } else {
                    w++;
                }
                console.log(days);

                break;
            } 
            else if (tempoDisponivel == sum) {
                console.log("TEMPO == SUM");
                sum = 0;
                days++;
                w++;
                sair2 = true;
                console.log(days);

            }

            if (d == videos.length-1) {
                sair2 = true;
                sair = true;
            }

        }
        w++;
    } 

    console.log(`total of days: ${days}`);

    // console.log(week);

    return "totalOfDays";
}

module.exports = {
    calculateDaysToWatch
}


const total = calculateDaysToWatch([4,6,5],[5,10]);
console.log(total);

