import { fetchData } from '@/plugins/axios';

export const products = async () => {
    try {
        const [products] = await Promise.all([
            fetchData('products'),
        ]);
        return products;
    } catch (error) {
      console.error('(lib.products) Erro ao buscar dados:', error);
      throw error;
    }
};
