import { ArrowRight } from "phosphor-react";
import { Container, Form, Header } from "./style";
import { Text, TextInput, MultiStep, Button, Heading } from "@ignite-ui/react";

export default function Register() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={1} />
      </Header>

      <Form as="form">
        <label>
          <Text>Nome de usuário</Text>
          <TextInput
            crossOrigin=""
            prefix="ignite.com/"
            placeholder="seu-usuario"
          />
        </label>

        <label>
          <Text>Nome completo</Text>
          <TextInput crossOrigin="" placeholder="Seu nome" />
        </label>

        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  );
}
