export class Task{
    Id:number =0;
    Text:string|any;
    IsDone:boolean=false;
    private static Count:number =0;

    constructor(text:string){
        this.Id = Task.Count++;
        this.Text = text;
    }
}
export class ApiTask{
    Id:number =0;
    Title:string|any;
    IsDone:boolean=false;
    constructor(text:string){
        this.Title = text;
    }
}

