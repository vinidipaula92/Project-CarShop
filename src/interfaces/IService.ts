export default interface IService<T> {
  create(obj:unknown): Promise<T>,
  read():Promise<T[]>,
  readOne(_id:string):Promise<T>,
  update(_id:string, object:unknown): Promise<T>,
  delete(_id:string):Promise<T>
}