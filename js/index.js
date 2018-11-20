//node.data.value pega a propriedade (value) do node.

//caso a pessoa clique duas vezes no node, abrir uma "caixa ao lado" com as possíveis informações que ele pode colocar dentro de um softgoal
//nome, prioridade, contributionType, etc.
//exemplo: se for o primeiro nó, não vai mostrar para ele algumas configurações como ("AND", "SATISFICIED", essas coisas).
//então no botão "criar", eu pego esses dados, e crio um novo node (softgoal) (que será outra função). 
//essa função irá receber o node e adicionar o node no node que foi disparado o doubleClick (softgoals)
//quando abrir o modal, tentar setar ele na parte direita da tela, para não prejudicar totalmente a visão do usuário.
//e quando apertar para abrir o modal, colocar o zoom da tela centralizado no node que está sendo clickado no momento, para o 
//usuário ter pelo menos noção de como está a estrutura atualmente
//não permitir a deleção automática do item, mas criar um método auxiliar para quando o usuário apertar algum botão
//o método deletar o node via node.removeNodeData();


// here's the family data
var nodeDataArray = [];

function init() {

    var $ = go.GraphObject.make;  // for conciseness in defining templates
    var div = document.querySelector("#myDiagramDiv");

    myDiagram =
        $(go.Diagram, "myDiagramDiv",  // must be the ID or reference to div
            {
                "toolManager.hoverDelay": 100,  // 100 milliseconds instead of the default 850
                initialContentAlignment: go.Spot.Center,
                layout:  // create a TreeLayout for the family tree
                    $(go.TreeLayout, //https:gojs.net/latest/api/symbols/Binding.html
                        {
                            angle: 90, nodeSpacing: 20, layerSpacing: 40, layerStyle: go.TreeLayout.LayerUniform,
                        }),
                "undoManager.isEnabled": true
            });

    clickAPIREST();
  
    function click(e, obj) {

        let xhttp = new XMLHttpRequest();
        let x;


        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                data = xhttp.response;
                x = JSON.parse(data);
                console.log(x);


                myDiagram.startTransaction();

                linksNodesToModel(x[0].softgoalMain, null);

                myDiagram.commitTransaction();
            }

        }

        let url = 'http://localhost:8080/catalogs';
        xhttp.open('GET', url, true);
        xhttp.send();

        //      myDiagram.scale = 1;
        //      myDiagram.scrollToRect(myDiagram.findNodeForKey(obj.data.key).actualBounds);

    }

    function clickAPIREST(e, obj) {

        myDiagram.startTransaction();

        linksNodesToModel(apiREST[0].softgoalMain, null);

        myDiagram.commitTransaction();

        // create the model for the family tree
        myDiagram.model = new go.TreeModel(nodeDataArray);

    }

    function linksNodesToModel(softgoal, softgoalParent) {

        //adiciona o softgoal na árvore
        var newNode = {
            key: softgoal.id,
            name: softgoal.name,
            priority: softgoal.priority,
            nfrType: softgoal.nfrType,
            contributionType: softgoal.contributionType,
            contributionTypeCatalog: softgoal.contributionTypeCatalog,
            evaluationProcedure: softgoal.evaluationProcedure
        };

        if (softgoalParent !== null) {
            newNode.parent = softgoalParent.id;
        }

        nodeDataArray.push(newNode);

        //chama recursivamente para os outros nodes
        for (let x = 0; x < softgoal.softgoalList.length; x++) {
            linksNodesToModel(softgoal.softgoalList[x], softgoal);
        }
    }

    myDiagram.nodeTemplate =
        $(go.Node, "Auto",
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

                $(go.TextBlock, { textAlign:"center", font: "bold 17pt Comic Sans MS, Comic Sans, cursive, helvetica, arial, sans-serif", margin: new go.Margin(13, 10, 0, 10), row: 0, column: 1 },
                    new go.Binding("text", "evaluationProcedure", setEvaluationProcedure)),

                $(go.TextBlock, { font: "20pt arial, sans-serif", textAlign: "center", margin: new go.Margin(25, 0, 0, 5), row: 0, column: 2 },
                    new go.Binding("text", "priority", isPriority)),

                $(go.TextBlock, { font: "10pt helvetica, arial, sans-serif",textAlign: "center", wrap: go.TextBlock.WrapFit, width: 100, margin: new go.Margin(5, 0, 0, 0), row: 1, column: 1 },
                    new go.Binding("text", "name")),
            )
        );  

    // replace the default Node template in the nodeTemplateMap

    // define the Link template
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

    document.getElementById('zoomToFit').addEventListener('click', function () {
        myDiagram.zoomToFit();
    });
    document.getElementById('centerRoot').addEventListener('click', function () {
        myDiagram.scale = 1;
        myDiagram.scrollToRect(myDiagram.findNodeForKey(0).actualBounds);
    });

}