export class Softgoal {
    parent?: Softgoal;
    name?: String;
    priority?: Boolean;
    nfrType?: Number;
    contributionType?: Number;
    contributionTypeCatalog?: Number;
    evaluationProcedure?: Number;
    softgoalList?: Array<Softgoal>;

    constructor(parent, name, priority, nfrType, contributionType, contributionTypeCatalog, evaluationProcedure, softgoalList) {
        this.parent = parent;
        this.name = name;
        this.priority = priority;
        this.nfrType = nfrType;
        this.contributionType = contributionType;
        this.contributionTypeCatalog = contributionTypeCatalog;
        this.evaluationProcedure = evaluationProcedure;
        this.softgoalList = softgoalList;

    };

};  