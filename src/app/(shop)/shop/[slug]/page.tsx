import { ProductHeader } from "@/entities/Product/ui/ProductHeader";
import { apiPaths, axiosInstance } from "@/shared/api/axios";
import { ProductInfo } from "@/entities/Product/ui/ProductInfo";
import { Container } from "@/shared/ui/Container";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;
    const product = await axiosInstance.get(apiPaths.getProductById + slug);
    return (
        <div>
            <ProductHeader />
            <Container>
                <ProductInfo product={product.data} />
            </Container>
        </div>
    );
}
