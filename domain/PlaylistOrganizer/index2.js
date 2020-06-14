
function calculateDaysToWatch(videos, week) {
    console.log(videos);
    console.log(week);

    let sizeWeek = week.length-1;

    let totalDays = 0;
    let sair=false;
    let w = 0;
    let d = 0;
    while(!sair) {
        if (d >= videos.length-1) {
            break;
        }
        let tempoDisponivel = week[w];
        let tempoDoVideo = videos[d];

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
                    w == 0;
                } else {
                    w++;
                }
                
                sair2 = true;
            }

            if (tempoDisponivel == tempoDoVideo) {
                console.log("tempos iguais!!!!");
                totalDays++;
                if (w == sizeWeek) {
                    w == 0;
                } else {
                    w++;
                }
            }

        }

        // sair = true;
    }




}

module.exports = {
    calculateDaysToWatch
}


const total = calculateDaysToWatch([4, 6, 5], [5, 10]);

console.log(total);

