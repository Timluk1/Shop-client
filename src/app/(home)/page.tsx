import { MainSection, Range } from "@/entities/Home"
import { Container } from "@/shared/ui/Container";

const Home = () => {
    return (
        <div>
            <MainSection className="mb-14"/>
            <Container>
                <Range />   
            </Container>
        </div>
    );
};

export default Home;
