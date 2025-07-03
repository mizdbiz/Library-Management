import { Book } from '../entities/book.entity';

export const getAllBooks = (): Book[] => {
  return [
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "Brave New World", author: "Aldous Huxley" }
  ];
};
