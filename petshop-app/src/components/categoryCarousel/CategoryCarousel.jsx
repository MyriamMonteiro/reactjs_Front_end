/* Vai puxar o carrossel e o card de categorias*/
import Carousel from "../carousel/Carousel"
import CategoryCard from "../categoryCard/CategoryCard";

/* Criar lista de produtos */
const lista = [
     { 
        title: "Acessórios", 
        productCount:64,
        image:"https://site.petesperanca.com.br/wp-content/uploads/2023/10/Variedade_Produto.jpeg",
     },
     {
        title: "Comida",
        productCount: 30,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKNVKdNXjNo41Sf-cQhedtKy0Rh1F3ajPSw&s"
     }
    ]

/* Criar uma função */
const CategoryCarousel = () => {
    return (
        /*usando a estrura feita nos outros arquivos - Carousel, CategoryCard*/
        <Carousel title={"Pesquise por Categoria"} items={lista} RenderComponent={({item}) => <CategoryCard categoria={item}/> }/>
    );
}

export default CategoryCarousel;