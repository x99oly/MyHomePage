export class RepositoryClass {
    title: string;
    img: string;
    link: string;
    about: string;
    isActive: boolean;

    constructor(Title: string, Img: string, Link: string, About: string, isActive = false) {
        this.title = Title
        this.img = Img
        this.link = Link
        this.about = About
        this.isActive = isActive
    }
}
