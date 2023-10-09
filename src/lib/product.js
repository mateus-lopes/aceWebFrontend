import { fetchData } from '@/plugins/axios';

export const products = async () => {
    try {
        const [products, categories, genders] = await Promise.all([
            fetchData('products'),
            fetchData('categories'),
            fetchData('genders')
        ]);
        // substiuindo categorias e geneors pelos titulos
        products.forEach((el) => {
            el.category = categories.filter((cat) => cat.id === el.category);
            el.gender = genders.filter((cat) => cat.id === el.gender);
        });
        return products;
    } catch (error) {
      console.error('(lib.products) Erro ao buscar dados:', error);
      throw error;
    }
};
