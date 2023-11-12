import Container from "../../Shared/Container";
import CategoryBox from "./CategoryBox";
import { categories } from "./categoriesData";

const Categories = () => {
    return (
        <Container>
            <div>
                {categories?.map(category => <CategoryBox key={category.label} label={category.label} icon={category.icon} />)}
            </div>
        </Container>
    );
};

export default Categories;