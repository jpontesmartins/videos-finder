
function calculateDaysToWatch(videos, week) {
    console.log(videos);
    console.log(week);

    let sizeWeek = week.length-1;
    let sizeVideos = videos.length-1;

    let totalDays = 0;
    let sair=false;
    let w = 0;
    let d = 0;
    while(!sair) {
        if (d > sizeVideos) {
            break;
        }
        let tempoDisponivel = week[w];
        let tempoDoVideo = videos[d];

        if (tempoDoVideo >= 200) {
            console.log("MAIOR IGUAL QUE 200");
            d++;
            tempoDoVideo = videos[d];
            totalDays--;
        }

        let sumDurationVideos = 0;
        let sair2 = false
        while (!sair2) {
            
            tempoDoVideo = videos[d];
            console.log(`adiciona a duracao do video seguinte`);
            sumDurationVideos += tempoDoVideo;
            console.log(sumDurationVideos);

            if(tempoDisponivel > sumDurationVideos) {
                console.log(`tempo disponivel ${tempoDisponivel} `);
                console.log(`tempo do video ${sumDurationVideos}`);

                console.log("posso assistir!");
                console.log(`next: `)
                console.log("-------------------");
                
                d++;  //vou para o proximo video
                
                if (d > sizeVideos) {
                    totalDays++;
                    break;
                }
            }

            if (tempoDisponivel < sumDurationVideos) {
                console.log(`tempo do video somado: ${tempoDoVideo}`)
                console.log(`new sum: ${sumDurationVideos}`)
                console.log(`tempo disp: ${tempoDisponivel}`)
                console.log(`W: ${w}`)
                
                console.log(" nao posso assistir!!!");
                
                totalDays++;

                console.log(`total days: ${totalDays}`);
                console.log(`tempo disponivel: ${tempoDisponivel}`);
                console.log(`w: ${w}`);
                console.log(`duration videos: ${sumDurationVideos}`);
                console.log(`d: ${d}`);

                sumDurationVideos = 0;
                if (w == sizeWeek) {
                    w = 0;
                } else {
                    w++;
                }


                if (d == sizeVideos && w == sizeWeek) {
                    console.log("recomeçaaar");
                    sumDurationVideos = 0;
                    // w = 0;
                }
                console.log(`reiniciando w: ${w}`);
                sair2 = true;
            }

            if (tempoDisponivel == tempoDoVideo) {
                console.log("tempos iguais!!!!");
                totalDays++;
                d++;
                if (w == sizeWeek) {
                    w = 0;
                } else {
                    w++;
                }

                console.log(`w:: ${w}`);
                console.log(`d:: ${d}`);

                if (d > sizeVideos) {
                    break;
                }

                console.log(`total days: ${totalDays}`)
            }

        }

    }

    return totalDays

}

module.exports = {
    calculateDaysToWatch
}


const total = calculateDaysToWatch([4, 6, 5], [5, 10]);

// const week = [15, 120, 30, 150, 20, 40, 90]; //i
// const videos = [20, 30, 60, 90, 200, 30, 40, 20, 60, 15]; //j

// const total = calculateDaysToWatch(videos, week);

console.log("total");
console.log(total);

