cwidth = canv.offsetWidth
cheight = canv.offsetHeight



var graphs = [
    function () {
        cwidth = canv.offsetWidth
        cheight = canv.offsetHeight


        // Make an array of coordinates
        cities = [
            [650 / 791 * cwidth, 450 / 500 * cheight], // Bucharest
            [350 / 791 * cwidth, 100 / 500 * cheight], // Fagaras
            [400 / 791 * cwidth, 320 / 500 * cheight], // Pitesti
            [150 / 791 * cwidth, 250 / 500 * cheight], // Rimnicu_Vilcea
            [100 / 791 * cwidth, 50 / 500 * cheight] // Sibiu
        ]

        citiesGraph = [
            [0, 1, 211],
            [0, 2, 101],
            [1, 4, 99],
            [2, 3, 97],
            [3, 4, 80],
        ]

        for (var i = 0; i < cities.length; i++) {
            nodes.push(cities[i]);
            edges[i] = [];
        }

        for (var i = 0; i < citiesGraph.length; i++) {
            edges[citiesGraph[i][0]].push([citiesGraph[i][1], citiesGraph[i][2]]);
            edges[citiesGraph[i][1]].push([citiesGraph[i][0], citiesGraph[i][2]]);
        }

        for (n = 0; n < nodes.length; n++) {
            exist.push(true);
            parent.push(null);
        }
        n--;
    }
    ,
    function () {
        cwidth = canv.offsetWidth
        cheight = canv.offsetHeight
        cities = [
            [100 / 791 * cwidth, 300 / 500 * cheight], // start
            [600 / 791 * cwidth, 300 / 500 * cheight], // end
            [200 / 791 * cwidth, 200 / 500 * cheight], // 2
            [275 / 791 * cwidth, 150 / 500 * cheight], // 3
            [275 / 791 * cwidth, 250 / 500 * cheight], // 4
            [350 / 791 * cwidth, 200 / 500 * cheight], // 5
            [425 / 791 * cwidth, 150 / 500 * cheight], // 6
            [425 / 791 * cwidth, 250 / 500 * cheight], // 7
            [500 / 791 * cwidth, 200 / 500 * cheight], // 8
        ]

        citiesGraph = [
            [0, 1, 200],
            [0, 2, 25],
            [2, 3, 20],
            [2, 4, 21],
            [3, 5, 22],
            [4, 5, 19],
            [5, 6, 25],
            [5, 7, 19],
            [6, 8, 17],
            [7, 8, 22],
            [1, 8, 25],

            

            // [0, 1, 211],
            // [0, 2, 101],
            // [1, 4, 99],
            // [2, 3, 97],
            // [3, 4, 80],
        ]

        for (var i = 0; i < cities.length; i++) {
            nodes.push(cities[i]);
            edges[i] = [];
        }

        for (var i = 0; i < citiesGraph.length; i++) {
            edges[citiesGraph[i][0]].push([citiesGraph[i][1], citiesGraph[i][2]]);
            edges[citiesGraph[i][1]].push([citiesGraph[i][0], citiesGraph[i][2]]);
        }

        for (n = 0; n < nodes.length; n++) {
            exist.push(true);
            parent.push(null);
        }

        // EN = Number(document.getElementById("evi").value);
        // console.log(EN + "is end node for heuristics");
        // for (n = 0; n < nodes.length; n++) {
        //     if(n != EN) {
        //         d = dist(nodes[n][0], nodes[n][1], nodes[EN][0], nodes[EN][1]);
        //         console.log("distance from ", n, "to", EN, "is", d);
        //         heuristics[n] = d;
        //     }
        // }
        // heuristics[EN] = 0;
        n--;
    }
    , 
    function () {
        cities = [
            [159/791 * cwidth, 155/500 * cheight],
            [359/791 * cwidth, 95/500 * cheight],
            [586/791 * cwidth, 131/500 * cheight],
            [264/791 * cwidth, 254/500 * cheight],
            [452/791 * cwidth, 232/500 * cheight],
            [252/791 * cwidth, 412/500 * cheight],
            [546/791 * cwidth, 402/500 * cheight],
        ]

        citiesGraph = [
            [0, 1, 5],
            [0, 3, 3],
            [1, 2, 1],
            [1, 4, 4],
            [2, 4, 6],
            [2, 6, 8],
            [3, 4, 2],
            [3, 5, 2],
            [3, 6, 8],
            [4, 6, 4],
            [5, 6, 3],
        ]

        for (var i = 0; i < cities.length; i++) {
            nodes.push(cities[i]);
            edges[i] = [];
        }

        for (var i = 0; i < citiesGraph.length; i++) {
            edges[citiesGraph[i][0]].push([citiesGraph[i][1], citiesGraph[i][2]]);
            edges[citiesGraph[i][1]].push([citiesGraph[i][0], citiesGraph[i][2]]);
        }

        for (n = 0; n < nodes.length; n++) {
            exist.push(true);
            parent.push(null);
        }
        n--;
    }
]
