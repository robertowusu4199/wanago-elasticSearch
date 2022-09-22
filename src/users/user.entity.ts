import {
    Column,
    Entity, ObjectIdColumn
  } from "typeorm";
  
  @Entity({ name: "products" })
  export class User {
    @ObjectIdColumn()
    id: number;
  
    @Column({
      type: "string"
    })
    author: string;
}