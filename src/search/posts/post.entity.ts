import {
    Column,
    Entity, ObjectIdColumn
  } from "typeorm";
  
  @Entity({ name: "products" })
  export class Post {
    @ObjectIdColumn()
    id: number;
  
    @Column({
        type: "string"
    })
    title: string;

    @Column({
        type: "string"
    })
    content: string;
    
    @Column({
        type: "string"
    })
    authorId: string;
  
  }