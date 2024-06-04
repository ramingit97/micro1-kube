import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm'
import { IProduct } from '../interfaces/product.interface';
import { v4 as uuidv4 } from 'uuid';



@Entity('product')
export class ProductEntity implements IProduct {

    // @PrimaryGeneratedColumn()
    @PrimaryColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    count: number

    // @Column()
    // userId: number;

    constructor(product: Partial<IProduct>) {
        if (product) {
            if (!product.id) {
                product.id = uuidv4();
            }
            Object.assign(this, product)
        }
    }

}