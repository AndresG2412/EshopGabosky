import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <Container className="text-black p-10 bg-shop-light-pink">
      <p className="text-xl font-semibold">Welcome to Next.js!</p>
      <p className="texl-lg">Ut tempor eu cillum nostrud. Eiusmod nostrud ut exercitation exercitation deserunt voluptate aute incididunt tempor. Ex dolor excepteur Lorem incididunt reprehenderit excepteur cillum amet amet. In dolor ea sit labore voluptate ut cupidatat ad commodo non pariatur. Exercitation labore deserunt duis commodo amet occaecat nulla dolore veniam sint ut.</p>
      <Button className="mt-4" variant="default">Check Out</Button>
    </Container>
  );
}
