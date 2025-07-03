import app from './app';
import { AppDataSource } from './databases/data-source';

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log('📦 MySQL Data Source has been initialized!');
    app.listen(PORT, () => {
      console.log(`🚀 Server is listening on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Error during MySQL Data Source initialization', err);
  });
