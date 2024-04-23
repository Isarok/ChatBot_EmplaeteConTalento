
import { imgs, categories } from './data.ts';
import { CategoryCard } from './CategoryCard.tsx';

const [imgEmprendimiento] = imgs;

export const CategoryList: React.FC = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-4 mt-10">
      {/* Category Link Ciencia */}
      <CategoryCard
        category={categories.emprendimiento}
        src={imgEmprendimiento}
        alt={`Categoría ${categories.emprendimiento}`}
        gradientColor="from-violet-900 to-rose-500"
      />
    </div>
  );
};
