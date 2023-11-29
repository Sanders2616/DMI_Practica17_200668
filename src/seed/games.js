const games=[
    {
    player_ID: generateRandom(1,10),
    title:"Game #, Level #",
    startAt: Date.now(),
    endsAT: Date.now() + generateRandom(5000,300000),
    score: generateRandom(10,100000)
    },
    {
    player_ID: generateRandom(1,10),
    title:"Game #, Level #",
    startAt: Date.now(),
    endsAT: Date.now() + generateRandom(5000,300000),
    score: generateRandom(10,100000)
    },
    {
        player_ID: generateRandom(1,10),
        title:"Game #, Level #",
        startAt: Date.now(),
        endsAT: Date.now() + generateRandom(5000,300000),
        score: generateRandom(10,100000)
        },
        {
        player_ID: generateRandom(1,10),
        title:"Game #, Level #",
        startAt: Date.now(),
        endsAT: Date.now() + generateRandom(5000,300000),
        score: generateRandom(10,100000)
        },
        {
            player_ID: generateRandom(1,10),
            title:"Game #, Level #",
            startAt: Date.now(),
            endsAT: Date.now() + generateRandom(5000,300000),
            score: generateRandom(10,100000)
            },
            {
            player_ID: generateRandom(1,10),
            title:"Game #, Level #",
            startAt: Date.now(),
            endsAT: Date.now() + generateRandom(5000,300000),
            score: generateRandom(10,100000)
            }, {
                player_ID: generateRandom(1,10),
                title:"Game #, Level #",
                startAt: Date.now(),
                endsAT: Date.now() + generateRandom(5000,300000),
                score: generateRandom(10,100000)
                },
                {
                player_ID: generateRandom(1,10),
                title:"Game #, Level #",
                startAt: Date.now(),
                endsAT: Date.now() + generateRandom(5000,300000),
                score: generateRandom(10,100000)
                },
                {
                    player_ID: generateRandom(1,10),
                    title:"Game #, Level #",
                    startAt: Date.now(),
                    endsAT: Date.now() + generateRandom(5000,300000),
                    score: generateRandom(10,100000)
                    },
                    {
                    player_ID: generateRandom(1,10),
                    title:"Game #, Level #",
                    startAt: Date.now(),
                    endsAT: Date.now() + generateRandom(5000,300000),
                    score: generateRandom(10,100000)
                    },{
                    player_ID: generateRandom(1,10),
                    title:"Game #, Level #",
                    startAt: Date.now(),
                    endsAT: Date.now() + generateRandom(5000,300000),
                    score: generateRandom(10,100000)
                    },
                    {
                    player_ID: generateRandom(1,10),
                    title:"Game #, Level #",
                    startAt: Date.now(),
                    endsAT: Date.now() + generateRandom(5000,300000),
                    score: generateRandom(10,100000)
                    },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                    {
                        player_ID: generateRandom(1,10),
                        title:"Game #, Level #",
                        startAt: Date.now(),
                        endsAT: Date.now() + generateRandom(5000,300000),
                        score: generateRandom(10,100000)
                        },
                        {
                        player_ID: generateRandom(1,10),
                        title:"Game #, Level #",
                        startAt: Date.now(),
                        endsAT: Date.now() + generateRandom(5000,300000),
                        score: generateRandom(10,100000)
                        },
                        {
                            player_ID: generateRandom(1,10),
                            title:"Game #, Level #",
                            startAt: Date.now(),
                            endsAT: Date.now() + generateRandom(5000,300000),
                            score: generateRandom(10,100000)
                            },
                            {
                            player_ID: generateRandom(1,10),
                            title:"Game #, Level #",
                            startAt: Date.now(),
                            endsAT: Date.now() + generateRandom(5000,300000),
                            score: generateRandom(10,100000)
                            },
                            {
                                player_ID: generateRandom(1,10),
                                title:"Game #, Level #",
                                startAt: Date.now(),
                                endsAT: Date.now() + generateRandom(5000,300000),
                                score: generateRandom(10,100000)
                                },
                                {
                                player_ID: generateRandom(1,10),
                                title:"Game #, Level #",
                                startAt: Date.now(),
                                endsAT: Date.now() + generateRandom(5000,300000),
                                score: generateRandom(10,100000)
                                },
                                {
                                    player_ID: generateRandom(1,10),
                                    title:"Game #, Level #",
                                    startAt: Date.now(),
                                    endsAT: Date.now() + generateRandom(5000,300000),
                                    score: generateRandom(10,100000)
                                    },
                                    {
                                    player_ID: generateRandom(1,10),
                                    title:"Game #, Level #",
                                    startAt: Date.now(),
                                    endsAT: Date.now() + generateRandom(5000,300000),
                                    score: generateRandom(10,100000)
                                    },
];

function generateRandom(min = 0, max = 100){
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand=rand + min;
    return rand;


} 
export default games;

