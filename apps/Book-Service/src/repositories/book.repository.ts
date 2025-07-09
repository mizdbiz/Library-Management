import { AppDataSource } from '../databases/data-source';
import { Book } from '../entities/book.entity';

export class BookRepository {
    private repo = AppDataSource.getRepository(Book);

    findAll = () => this.repo.find();

    findById= (id: number) => this.repo.findOneBy({ id });

    create= (data: Partial<Book>)=> this.repo.save(this.repo.create(data));

    update = async (id: number, data: Partial<Book>) =>this.repo.update(id, data).then(() => this.findById(id));

    delete = async (id: number) =>this.repo.delete(id).then(() => ({ message: 'Book deleted' }));

}