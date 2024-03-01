export interface IAssessment {
    id: number;
    name: string;
    users_resolved: number;
    active: boolean;
    image_url: string;
}

export interface IAssessmentGraph {
    data: {
        Agreeableness: number;
        Drive: number;
        Luck: number;
        Openess: number;
    };
    type: string;
}