let nodeDataArray = [];
let linkDataArray = [];
let myDiagram = null;
let $ = go.GraphObject.make;  // for conciseness in defining templates

function init() {
    
    myDiagram =
        $(go.Diagram, "myCatalogSIG",  // must be the ID or reference to div
            {
                "toolManager.hoverDelay": 100,  // 100 milliseconds instead of the default 850
                initialContentAlignment: go.Spot.Top,
                layout:  // create a TreeLayout for the family tree
                    $(go.TreeLayout, //https:gojs.net/latest/api/symbols/Binding.html
                        {
                            angle: 90, nodeSpacing: 10, layerSpacing: 40, layerStyle: go.TreeLayout.LayerUniform,
                        }),
                "undoManager.isEnabled": true
            });

    myDiagram.nodeTemplate =
        $(go.Node, "Auto", {
            doubleClick: addSoftgoal
        },
            $(go.Shape, "Rectangle", { stroke: "white", fill: "white" }),
            $(go.Panel, "Table",
                {
                    defaultSeparatorPadding: 2
                },
                //Row 0
                $(go.TextBlock, "", { row: 0, column: 0 }),

                $(go.Shape, {
                    geometry: go.Geometry.parse('M 25,25 a 25,20 2 0,0 0,40 h 50 a 20,20 1 0,0 0,-40 a 20,10 1 0,0 -15,-10 a 15,15 1 0,0 -35,10 z'),
                    column: 1, desiredSize: new go.Size(100, 50), fill: "green", alignment: go.Spot.Left
                },
                    new go.Binding("strokeWidth", "nfrType", isOperationalizationSoftgoal),
                    new go.Binding("strokeDashArray", "nfrType", isClaimSoftgoal)),

                $(go.TextBlock, { textAlign: "center", font: "bold 17pt Comic Sans MS, Comic Sans, cursive, helvetica, arial, sans-serif", margin: new go.Margin(13, 10, 0, 10), row: 0, column: 1 },
                    new go.Binding("text", "evaluationProcedure", setEvaluationProcedure)),

                $(go.TextBlock, { font: "20pt arial, sans-serif", textAlign: "center", margin: new go.Margin(25, 0, 0, 5), row: 0, column: 2 },
                    new go.Binding("text", "priority", isPriority)),

                $(go.TextBlock, { font: "10pt helvetica, arial, sans-serif", textAlign: "center", wrap: go.TextBlock.WrapFit, width: 100, margin: new go.Margin(5, 0, 0, 0), row: 1, column: 1 },
                    new go.Binding("text", "name")),
            )
        );

        myDiagram.linkTemplate =
        $(go.Link,  // the whole link panel
            { routing: go.Link.Orthogonal, corner: 2, selectable: true, adjusting: go.Link.Stretch, reshapable: true },
            $(go.Shape,
                { strokeWidth: 1, stroke: 'black' }),
            $(go.TextBlock,  // the label text
                {
                    textAlign: "center",
                    font: "bold 10pt helvetica, arial, sans-serif",
                    margin: new go.Margin(20, 0, 0, 20),
                    segmentOffset: new go.Point(0, -15)
                },
                // editing the text automatically updates the model data
                new go.Binding("text", "contributionTypeCatalog", setContributionTypeCatalog).makeTwoWay()),
            $(go.TextBlock, {
                    segmentIndex: 3, segmentFraction: 0.2, textAlign: "center"
                },
                new go.Binding("text", "contributionType", isAndContributionType)),
            $(go.TextBlock, {
                segmentIndex: 3, segmentFraction: 0.4, textAlign: "center"
                },
                new go.Binding("text", "contributionType", isOrContributionType))
        );
        

    let btNewSIG = document.getElementById("btNewSIG");
    btNewSIG.addEventListener("click", addSoftgoal);

    document.getElementById('zoomToFit').addEventListener('click', function () {
        myDiagram.zoomToFit();
    });

    document.getElementById('centerRoot').addEventListener('click', function () {
        myDiagram.scale = 1;
        myDiagram.scrollToRect(myDiagram.findNodeForKey(0).actualBounds);
    });
}


function addSoftgoal(e, obj) {

    //chamar o modal aqui
    let input = prompt("Crie um novo softgoal").split(',');
    let softgoal = new Object();

    //1,Facibility,0,true,1,2,2,4
    //id,name,parent,priority,nfrType,contributionType,contributionTypeCatalog, evaluationProcedure

    softgoal.key = input[0];
    softgoal.name = input[1];
    softgoal.parent = input[2];
    softgoal.priority = input[3];
    softgoal.nfrType = input[4];
    softgoal.contributionType = input[5];
    softgoal.contributionTypeCatalog = input[6];
    softgoal.evaluationProcedure = input[7];

    myDiagram.startTransaction("Adding new softgoal");

    nodeDataArray.push(softgoal);

    myDiagram.commitTransaction("Softgoal added");
    myDiagram.model = new go.TreeModel(nodeDataArray);

};

