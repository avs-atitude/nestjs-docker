import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    firstName: string

    @Column({ type: 'text', unique: true })
    lastName: string

    @Column({ type: 'text' })
    email: string
}