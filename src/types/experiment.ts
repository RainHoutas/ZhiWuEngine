export interface Experiment {
    id: number;
    name: string;
    subject: string;
    description?: string | null;
    sceneAssetPath?: string | null;
    version?: string | null;
    createdAt: string | Date;
}
