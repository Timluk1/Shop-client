import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/shared/ui/shadcn/breadcrumb";

interface IPageHeaderProps {
    title: string;
    breadcrumbItems: Array<{ label: string; href: string }>;
}

export const PageHeader: React.FC<IPageHeaderProps> = ({ title, breadcrumbItems }) => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <h1 className="text-5xl font-medium leading-[72px]">{title}</h1>
            <Breadcrumb>
                <BreadcrumbList>
                    {breadcrumbItems.slice(0, -1).map((item, index) => (
                        <div key={index} className="flex items-center justify-center">
                            <BreadcrumbItem>
                                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                        </div>
                    ))}
                    <BreadcrumbItem>
                        <BreadcrumbPage>{breadcrumbItems.slice(-1)[0].label}</BreadcrumbPage>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}
