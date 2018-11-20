//arquivo apenas para guardar o retorno da chamada da API REST

let apiREST = [
    {
        "id": 1,
        "reference": "Reference",
        "year": 2018,
        "keyWords": "Ubiquos System, IoT, Security, ",
        "description": "This is a catalog of Ubiquos System developed to be showed on a HIC Conference",
        "owner": {
            "id": 2,
            "name": "Yuri",
            "email": "yuricavalcante@gmail.com"
        },
        "softgoalMain": {
            "id": 1,
            "parent": null,
            "name": "Security",
            "description": "Security is ...",
            "priority": false,
            "nfrType": 1,
            "contributionType": 0,
            "contributionTypeCatalog": 0,
            "evaluationProcedure": 0,
            "softgoalList": [
                {
                    "id": 2,
                    "parent": null,
                    "name": "Integrity",
                    "description": "Integrity is ...",
                    "priority": false,
                    "nfrType": 1,
                    "contributionType": 1,
                    "contributionTypeCatalog": 3,
                    "evaluationProcedure": 1,
                    "softgoalList": []
                },
                {
                    "id": 3,
                    "parent": null,
                    "name": "Confidentiality",
                    "description": "Confidentiality is ...",
                    "priority": false,
                    "nfrType": 3,
                    "contributionType": 1,
                    "contributionTypeCatalog": 0,
                    "evaluationProcedure": 2,
                    "softgoalList": [
                        {
                            "id": 4,
                            "parent": null,
                            "name": "Authorize access",
                            "description": "Authorize access is ...",
                            "priority": false,
                            "nfrType": 2,
                            "contributionType": 2,
                            "contributionTypeCatalog": 2,
                            "evaluationProcedure": 0,
                            "softgoalList": [
                                {
                                    "id": 5,
                                    "parent": null,
                                    "name": "Validate access agains eligibility rules",
                                    "description": "Validate access agains eligibility rules is ...",
                                    "priority": false,
                                    "nfrType": 3,
                                    "contributionType": 1,
                                    "contributionTypeCatalog": 1,
                                    "evaluationProcedure": 3,
                                    "softgoalList": []
                                },
                                {
                                    "id": 6,
                                    "parent": null,
                                    "name": "Identify users",
                                    "description": "Identify users is ...",
                                    "priority": false,
                                    "nfrType": 2,
                                    "contributionType": 1,
                                    "contributionTypeCatalog": 0,
                                    "evaluationProcedure": 0,
                                    "softgoalList": []
                                },
                                {
                                    "id": 7,
                                    "parent": null,
                                    "name": "Authenticate user access",
                                    "description": "Authenticate user access is ...",
                                    "priority": false,
                                    "nfrType": 2,
                                    "contributionType": 1,
                                    "contributionTypeCatalog": 5,
                                    "evaluationProcedure": 5,
                                    "softgoalList": [
                                        {
                                            "id": 8,
                                            "parent": null,
                                            "name": "Use PIN",
                                            "description": "Use PIN is ...",
                                            "priority": false,
                                            "nfrType": 2,
                                            "contributionType": 0,
                                            "contributionTypeCatalog": 0,
                                            "evaluationProcedure": 0,
                                            "softgoalList": []
                                        },
                                        {
                                            "id": 9,
                                            "parent": null,
                                            "name": "Compare signature",
                                            "description": "Compare signature is ...",
                                            "priority": false,
                                            "nfrType": 2,
                                            "contributionType": 2,
                                            "contributionTypeCatalog": 0,
                                            "evaluationProcedure": 0,
                                            "softgoalList": []
                                        },
                                        {
                                            "id": 10,
                                            "parent": null,
                                            "name": "Require additional ID",
                                            "description": "Require additional ID is ...",
                                            "priority": false,
                                            "nfrType": 2,
                                            "contributionType": 2,
                                            "contributionTypeCatalog": 0,
                                            "evaluationProcedure": 1,
                                            "softgoalList": []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": 11,
                    "parent": null,
                    "name": "Availability",
                    "description": "Availability is ...",
                    "priority": true,
                    "nfrType": 1,
                    "contributionType": 1,
                    "contributionTypeCatalog": 0,
                    "evaluationProcedure": 2,
                    "softgoalList": []
                }
            ]
        },
        "notesList": [],
        "authors": [
            {
                "id": 1,
                "name": "Rainara Maia Carvalho",
                "email": "rainaramaia4@gmail.com"
            },
            {
                "id": 2,
                "name": "Yuri",
                "email": "yuricavalcante@gmail.com"
            }
        ],
        "areasList": [
            {
                "id": 1,
                "name": "Internet of Things",
                "description": "Descrição 1",
                "example": "Example 1, Example 2, Example 3"
            }
        ],
        "applicationDomainList": [
            {
                "id": 1,
                "name": "Banking",
                "description": "Descrição 1",
                "example": "Example 1, Example 2, Example 3"
            }
        ]
    }
]