export interface IGetNote{
    id:string
    tittle:string
    description:string
    addedDate:string
    isCanceled:boolean
}

export interface ICreateNote{
    tittle:string
    description:string
}

export interface IUpdateNote{
    id:string
    tittle:string
    description:string
    isCanceled:boolean
}