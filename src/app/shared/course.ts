export class Course {
    id: string;
    name: string;
    folder: string;
    semester: string;
    current: boolean;

    weekView?: boolean = false;
    publishMode?: boolean = false;
}
