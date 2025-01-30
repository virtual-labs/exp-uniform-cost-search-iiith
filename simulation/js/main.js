var curr;
var started = false;

var nuxtdis = false;
var refreshIntervalId = null;

var isObservation = false; 

var visit = new PriorityQueue();
var explored = [];

var SN = null;
var EN = null;

function reconstructPath() {
    let path = [];
    let path_edges = [];
    let c = curr;
    while (c != null) {
        path.push(c);
        if(parent[c] != null) {
            for(const neighbour of edges[parent[c]]) {
                if(neighbour[0] == c) {
                    path_edges.push(neighbour[1]);
                    break;
                }
            }
        }
        c = parent[c];
    }
    return [path.reverse(), path_edges.reverse()];
}


function ALG_STOP() {
    console.log("ALG_STOP");
    started = false;
    path_data = reconstructPath();
    path = path_data[0];
    path_edges = path_data[1];
    curr = null;
    visit.clear();
    document.getElementById("nuxt").disabled = false;
    document.getElementById("startucs").disabled = false;
    document.getElementById("disablewarning").style.display="none";
    if(!NoQuestion)
        addEventListeners();
    // document.getElementById("nuxt").disabled = true;
    nuxtdis = false;
    clearInterval(refreshIntervalId);
}

function UCS() {
    if(!started) {return;}
    if(!edgeAdded) {return;}
    if(isQuestion) {return;}

    if(!visit.empty()) {
        const { priority: currentCost, element: c} = visit.get();
        if (!exist[c]|| visited.includes(c))
            return;

        console.log("currentCost:",currentCost, ", node:",c);
        curr = c;
        path_data = reconstructPath();
        path = path_data[0];
        path_edges = path_data[1];
        var path_string = path.join(" -> ");
        var path_edges_string = path_edges.join("+");
        // document.getElementById("path_history_list").innerHTML += "<li>" + path_string + " (" + path_edges_string + "=" + currentCost + ")" + "</li>";

        // Get reference to the <ul> element
        const pathHistoryList = document.getElementById("path_history_list");

        // Get the number of existing list items
        const numItems = pathHistoryList.getElementsByTagName("li").length + 1;

        // Create a new <li> element with the appropriate number
        const listItem = document.createElement("li");
        listItem.textContent = numItems + ". " + path_string + " (" + path_edges_string + "=" + currentCost + ")";

        // Append the <li> element to the <ul> element
        pathHistoryList.appendChild(listItem);


        trav_circle(parent[curr], curr);
        visited.push(curr);

        if (curr == EN) {
            ALG_STOP();
            return;
        }

        if (!NoQuestion && !visit.empty()) { // chance = 2/10
            var rand = Math.random();
            console.log(rand);
            if (rand < chance) {
                isQuestion = true;
                question();
            }
        }

        if (edges[curr].length == 0) {
            return UCS();
        }

        for (const neighbour of edges[curr]) {
            const newCost = currentCost + neighbour[1];

            if(!exist[neighbour[0]]) continue;

            if(!visited.includes(neighbour[0]) && (!(neighbour[0] in costSoFar) || newCost < costSoFar[neighbour[0]])) {
                costSoFar[neighbour[0]] = newCost;
                visit.put(newCost, neighbour[0]);
                parent[neighbour[0]] = curr;
            }

        }
    }
    else {
        document.getElementById("goal_not_reached").style.display = "block";
        ALG_STOP();
    }
}