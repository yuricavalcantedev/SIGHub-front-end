function isClaimSoftgoal(nfrType) {

    if (nfrType == 3) {
        let arrayDashed = [];
        arrayDashed.push(10);
        arrayDashed.push(5);
        return arrayDashed;
    } else {
        return null;
    }
}

function isPriority(priority) {
    if (priority + "" == "true")
        return "!";
    else
        return "";
}

function isOperationalizationSoftgoal(nfrType) {
    if (nfrType == 2)
        return 4; // boldness of cloud
    else
        return 2;
}

function setContributionTypeCatalog(contributionTypeCatalog) {


    if (contributionTypeCatalog == 1)
        return "BREAKS";
    else if (contributionTypeCatalog == 2)
        return "HURTS";
    else if (contributionTypeCatalog == 3)
        return "UNKNOWN";
    else if (contributionTypeCatalog == 4)
        return "HELP";
    else if (contributionTypeCatalog == 5)
        return "SOME -";
    else if (contributionTypeCatalog == 6)
        return "SOME +";
    else
        return "";
}

function setEvaluationProcedure(evaluationProcedure) {

    if (evaluationProcedure == 1)
        return "x";
    else if (evaluationProcedure == 2)
        return "w(-)";
    else if (evaluationProcedure == 3)
        return "u";
    else if (evaluationProcedure == 4)
        return "w(+)";
    else if (evaluationProcedure == 5)
        return "v";
    else if (evaluationProcedure == 6)
        return "z";
    else
        return "";
}

//dar um jeito nisso aqui
function isAndContributionType(contributionType) {
    if (contributionType == 0)
        return "";
    else if (contributionType == 1 || contributionType == 2)
        return "___";
}

function isOrContributionType(contributionType) {
    if (contributionType == 0 || contributionType == 1)
        return "";
    else if (contributionType == 2)
        return "___";
}