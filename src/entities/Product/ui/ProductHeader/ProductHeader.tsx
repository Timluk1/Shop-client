import { Container } from "@/shared/ui/Container";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from "@/shared/ui/shadcn/breadcrumb";

export const ProductHeader = () => {
    return (
        <div className="flex items-center w-full h-24 bg-golden-100">
            <Container>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                    </BreadcrumbList>
                </Breadcrumb>
            </Container>
        </div>
    );
};
