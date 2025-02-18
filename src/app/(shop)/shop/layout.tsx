import { Container } from "@/shared/ui/Container"
import { Header } from "@/widgets/Header"
import { PropsWithChildren } from "react"

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div>
            <Container>
                <Header />
            </Container>
            {children}
        </div>
  )
}
