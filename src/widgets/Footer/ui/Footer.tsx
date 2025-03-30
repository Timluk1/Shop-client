import { Container } from "@/shared/ui/Container"
import { footerHelp, footerLinks } from "@/shared/utils"
import Link from "next/link"

export const Footer = () => {
    return (
        <div className="pt-24">
            <div className="w-full h-0.5 bg-gray-200"></div>
            <Container>
                <footer className="pt-12 px-4 flex flex-wrap justify-between">

                    <div className="max-w-xs">
                        <p className="font-mont text-2xl font-bold">Furniro.</p>
                        <p className="text-gray-100">
                            400 University Drive Suite 200 Coral Gables, FL 33134 USA
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold">Links</p>
                        <nav className="flex flex-col gap-2 mt-2">
                            {footerLinks.map(({ path, name }) => (
                                <Link key={name} href={path} className="text-gray-500 hover:text-gray-800 transition">
                                    {name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div>
                        <p className="font-semibold">Help</p>
                        <nav className="flex flex-col gap-2 mt-2">
                            {footerHelp.map(({ path, name }) => (
                                <Link key={name} href={path} className="text-gray-500 hover:text-gray-800 transition">
                                    {name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="w-full h-0.5 bg-gray-200 mt-6"></div>

                    <p className="text-center text-gray-100 mt-4">2025 Furniro. All rights reserved</p>
                </footer>
            </Container>
        </div>
    )
}
